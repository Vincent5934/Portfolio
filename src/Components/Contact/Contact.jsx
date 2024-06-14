import "./contact.css"
import { useRef } from "react";
import emailjs from "@emailjs/browser"

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_42zm5b5', 'template_xf3eo4k', form.current, {
                publicKey: 'dJDY4-Ed0bkQTlSuz',
            })
            .then(
                () => {
                    alert('Votre message a bien été envoyé');
                },
                (error) => {
                    alert('Message non envoyé. Veuillez remplir les champs demandés', error.text);
                },
            );
    };
    return (
        <section className="contactBackground" id="contact">
            <p className="contactTitle">Prêt à relerver le défi ?<br /> Contactez-moi</p>
            <form ref={form} onSubmit={sendEmail}  >
                <div className="formText">
                    <label htmlFor="lastname">Nom</label>
                    <input type="text" id="lastname" name="user_lastname" required="required" />
                    <label htmlFor="firstname">Prénom</label>
                    <input type="text" id="firstname" name="user_firstname" />
                    <label htmlFor="society">Société</label>
                    <input type="text" id="society" name="user_society" />
                    <label htmlFor="mail">Email</label>
                    <input type="email" id="mail" name="user_email" required="required" />
                    <label htmlFor="mobile">Téléphone</label>
                    <input type="mobile" id="mobile" name="user_mobile" />
                </div>
                <div className="formMessage">
                    <label htmlFor="message">Message</label>
                    <textarea name="user_message" id="message" />
                    <input type="submit" value="Envoyer" className="button" />
                </div>
            </form>
        </section>
    );
}

export default Contact;