// Dependencies
import dynamic from 'next/dynamic'
import { useForm } from "react-hook-form";
import Script from 'next/script'
// Local | React-Redux
import { SectionTitle } from "../SectionTitle";
// import { ContactMap } from "../ContactMap";
import { Field } from "../Field";
import { Loader } from "../Loader";
import { useAppContext } from "../../context/state";
import Image from "next/image";
// Styles

const DynamicContactMap = dynamic(() => import('../ContactMap'), {
  ssr: false,
})

export function Contact({ data }) {
  const { contact } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    contact.setCfIsLoading(true);
    sendFeedback("template_5cbehrd", {
      message: data.message,
      from_name: data.name,
      reply_to: data.email,
      subject: data.subject,
    });
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs.init("Y0XFV25ELhB4FImsp");
    window.emailjs
      .send("service_yax8ggy", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!", res);
        if (res.status === 200) {
          contact.setCfIsLoading(false);
          contact.setCfIsSent(true);
        }
      })
      .catch((err) => console.error("Oh well, you failed. Here some thoughts on the error that occured:", err));
  };

  return (
    <div className="contact">
      <Script src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js" />
      <SectionTitle title="Contact" />
      <div className="contact__ctn">
        <div className="contact__infos">
          <DynamicContactMap />
          <div className="contact__infos__mail">contact@matthieu-munoz.fr</div>
          <div className="contact__infos__sep" />
          <div className="contact__infos__num">06.05.21.64.40</div>
        </div>
        <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
          {contact.cfIsLoading ? (
            <Loader />
          ) : (
            <>
              {contact.cfIsSent ? (
                <div className="contact__form__confirm">
                  <Image className="contact__form__confirm__img" alt={`Sending confirmation icon`} src="/static/images/done-sent.svg" width={350} height={247} />
                  Bien récu, merci !
                  <button type="button" className="contact__form__submit" onClick={() => contact.setCfIsSent(false)}>
                    Retour
                  </button>
                </div>
              ) : (
                <div className="contact__form__inputs">
                  <Field label={data.name} name="name" tip={"Merci de saisir un nom d'au moins 3 caractères"} rhfregister={register} rhferror={errors} />
                  <Field label={data.email} name="email" type="text" tip={"Merci de saisir un email valide"} rhfregister={register} rhferror={errors} />
                  <Field label={data.subject} name="subject" tip={"Merci de saisir un sujet d'au moins 3 caractères"} rhfregister={register} rhferror={errors} />
                  <Field label={data.message} name="message" type="textarea" tip={"Merci de saisir un message d'au moins 30 caractères"} rhfregister={register} rhferror={errors} />
                  <button type="submit" className="contact__form__submit">
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
