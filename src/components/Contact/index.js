// Dependencies
import { useSelector, useDispatch } from "react-redux";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
// Local | React-Redux
import Field from "../Field";
import {
  changeField,
  confirmSending,
  toggleError,
  toggleLoading,
} from "@/actions/contact";
import SectionTitle from "../SectionTitle";
import sent from "@/assets/images/done-sent.svg";
// Styles
import "./contact.scss";
import Loader from "../Loader/inder";

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
  var myIcon = new Icon({
    iconUrl:
      "https://res.cloudinary.com/matthieu-munoz/image/upload/v1655536463/eva_pin-fill_tolpb6.svg",
    iconSize: [35, 35],
  });
  return (
    <div className="contact">
      <SectionTitle title="Contact" />
      <div className="contact__ctn">
        <div className="contact__infos">
          <MapContainer
            className="contact__infos__map"
            center={[47.2899789559538, 5.014323442477459]}
            zoom={12}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              // trunk-ignore(gitleaks/generic-api-key)
              url="https://api.mapbox.com/styles/v1/matthieumunoz/cl4ji3z2f001814mqlqqu6ndt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF0dGhpZXVtdW5veiIsImEiOiJjbDRqaHh3bDQwOXMyM2JueHZ1dGJvdmE2In0.sby-JMh6aub5MLKGLLEfHQ"
            />
            <Marker
              icon={myIcon}
              position={[47.26055934665719, 4.979900748951688]}
            ></Marker>
          </MapContainer>
          <div className="contact__infos__mail">
            matthieu.munoz.pro@gmail.com
          </div>
          <div className="contact__infos__sep" />
          <div className="contact__infos__num">06.05.21.64.40</div>
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
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
                  />
                  <Field
                    label={data.email}
                    name="email"
                    type="text"
                    onChange={handleChange}
                    value={email}
                    tip={"Merci de saisir un email valide"}
                  />
                  <Field
                    label={data.subject}
                    name="subject"
                    onChange={handleChange}
                    value={subject}
                    tip={"Merci de saisir un sujet d'au moins 3 caractères"}
                  />
                  <Field
                    label={data.message}
                    name="message"
                    type="textarea"
                    onChange={handleChange}
                    value={message}
                    tip={"Merci de saisir un message d'au moins 30 caractères"}
                  />
                  <button type="submit" className="contact__form__submit">
                    Envoyer
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
