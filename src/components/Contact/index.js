// Dependencies
import { useSelector, useDispatch } from "react-redux";
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
// Local | React-Redux
import Field from "../Field";
import { changeField, confirmSending, toggleLoading } from "@/actions/contact";
import SectionTitle from "../SectionTitle";
import sent from "@/assets/images/done-sent.svg";
// Styles
import "./contact.scss";
import Loader from "../Loader/inder";

function Contact() {
  const dispatch = useDispatch();
  const { name, email, subject, message, isSent, isLoading } = useSelector(
    (state) => state.contact
  );

  const handleChange = (value, field) => {
    dispatch(changeField(value, field));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(toggleLoading(true));
    sendFeedback("template_5cbehrd", {
      message: message,
      from_name: name,
      reply_to: email,
      subject: subject,
    });
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

  const cld = new Cloudinary({
    cloud: {
      cloudName: "matthieu-munoz",
    },
  });

  const myImage = cld.image("map_qfqfwt");
  myImage.resize(fill(600)).format("webp").quality(100);

  return (
    <div className="contact">
      <SectionTitle title="Contact" />
      <div className="contact__ctn">
        <div className="contact__infos">
          <AdvancedImage
            loading="lazy"
            className="contact__infos__map"
            alt="Map with location"
            cldImg={myImage}
            plugins={[lazyload(), placeholder({ mode: "blur" })]}
          />
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
                    label="Nom"
                    name="name"
                    onChange={handleChange}
                    value={name}
                  />
                  <Field
                    label="e-mail"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={email}
                  />
                  <Field
                    label="Sujet"
                    name="subject"
                    onChange={handleChange}
                    value={subject}
                  />
                  <Field
                    label="Message"
                    name="message"
                    type="textarea"
                    onChange={handleChange}
                    value={message}
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
