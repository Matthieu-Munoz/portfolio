// Dependencies
import { useForm } from 'react-hook-form';
// Local | React-Redux
// Styles
import './contact.scss';

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => sendFeedback("template_5cbehrd", { message: data.message, from_name: data.name, reply_to: data.email, subject: data.subject, },);

    const sendFeedback = (templateId, variables) => {
        window.emailjs.send(
            'service_yax8ggy', templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!', res)
        })
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err, errors))
    }

    return (
        <div className="contact">
            <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Nom" {...register("name", { required: true, max: 20, min: 3, maxLength: 80 })} />
                <input type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input type="text" placeholder="Sujet" {...register("subject", {})} />
                <textarea {...register("message", { required: true })} />
                <input type="submit" />
            </form>

        </div>
    );
}

export default Contact;
