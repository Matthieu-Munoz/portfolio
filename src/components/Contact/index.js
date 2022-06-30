// Dependencies
import { useSelector, useDispatch } from "react-redux";
// Local | React-Redux
import Field from "../Field";
import {
  changeField,
  confirmSending,
  toggleError,
  toggleLoading,
} from "Actions/contact";
import SectionTitle from "../SectionTitle";
import sent from "Assets/images/done-sent.svg";
import ContactMap from "../ContactMap";
import Loader from "../Loader";
import { useCursorContext } from "../Cursor";
// Styles
import "./contact.scss";

function Contact({ data }) {
  const dispatch = useDispatch();
  const {
    name,
    email,
    subject,
    message,
    nameError,
    emailError,
    subjectError,
    messageError,
    isSent,
    isLoading,
  } = useSelector((state) => state.contact);

  const handleChange = (value, field) => {
    fieldValidation(field, value);
    dispatch(changeField(value, field));
  };

  const fieldValidation = (field, value) => {
    const emailValidREgex =
      // eslint-disable-next-line
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    switch (field) {
      case "email":
        dispatch(toggleError("email", false));
        if (!value.match(emailValidREgex)) {
          dispatch(toggleError("email", true));
        }
        break;
      case "name":
        dispatch(toggleError("name", false));
        if (value.length < 3 || value === "") {
          dispatch(toggleError("name", true));
        }
        break;
      case "subject":
        dispatch(toggleError("subject", false));
        if (value.length < 3 || value === "") {
          dispatch(toggleError("subject", true));
        }
        break;
      case "message":
        dispatch(toggleError("message", false));
        if (value.length < 30 || value === "") {
          dispatch(toggleError("message", true));
        }
        break;
      default:
        break;
    }
  };

  const formValidation = () => {
    if (nameError || emailError || subjectError || messageError) {
      return false;
    }
    return true;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(toggleLoading(true));
    if (formValidation()) {
      sendFeedback("template_5cbehrd", {
        message: message,
        from_name: name,
        reply_to: email,
        subject: subject,
      });
    } else {
      dispatch(toggleLoading(false));
    }
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs.init("Y0XFV25ELhB4FImsp");
    window.emailjs
      .send("service_yax8ggy", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!", res);
        if (res.status === 200) {
          dispatch(toggleLoading(false));
          dispatch(confirmSending(true));
        }
      })
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  };
  const cursor = useCursorContext();

  return (
    <div className="contact">
      <SectionTitle title="Contact" />
      <div className="contact__ctn" data-aos="fade">
        <div className="contact__infos">
          <ContactMap />
          <div className="contact__infos__mail">contact@matthieu-munoz.fr</div>
          <div className="contact__infos__sep" />
          <div className="contact__infos__num">06.05.21.64.40</div>
        </div>
        <form className="contact__form" onSubmit={handleSubmit} I>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {isSent ? (
                <div className="contact__form__confirm">
                  <img
                    src={sent}
                    className="contact__form__confirm__img"
                    alt="Sending confirmation"
                  />
                  Bien récu, merci !
                  <button
                    type="button"
                    className="contact__form__submit"
                    onClick={() => dispatch(confirmSending(false))}
                  >
                    Retour
                  </button>
                </div>
              ) : (
                <div className="contact__form__inputs">
                  <Field
                    label={data.name}
                    name="name"
                    onChange={handleChange}
                    value={name}
                    tip={"Merci de saisir un nom d'au moins 3 caractères"}
                    onMouseOver={cursor.mouseOverEvent}
                    onMouseOut={cursor.mouseOutEvent}
                  />
                  <Field
                    label={data.email}
                    name="email"
                    type="text"
                    onChange={handleChange}
                    value={email}
                    tip={"Merci de saisir un email valide"}
                    onMouseOver={cursor.mouseOverEvent}
                    onMouseOut={cursor.mouseOutEvent}
                  />
                  <Field
                    label={data.subject}
                    name="subject"
                    onChange={handleChange}
                    value={subject}
                    tip={"Merci de saisir un sujet d'au moins 3 caractères"}
                    onMouseOver={cursor.mouseOverEvent}
                    onMouseOut={cursor.mouseOutEvent}
                  />
                  <Field
                    label={data.message}
                    name="message"
                    type="textarea"
                    onChange={handleChange}
                    value={message}
                    tip={"Merci de saisir un message d'au moins 30 caractères"}
                    onMouseOver={cursor.mouseOverEvent}
                    onMouseOut={cursor.mouseOutEvent}
                  />
                  <button
                    type="submit"
                    className="contact__form__submit"
                    onMouseOver={cursor.mouseOverEvent}
                    onMouseOut={cursor.mouseOutEvent}
                  >
                    {data.send}
                  </button>
                </div>
              )}
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
