import "./contact.css"
import React, { useRef } from 'react';
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
        <div className="contactBackground">
            <h2 className="contactTitle" id="contact" >Prêt à relever le défi ? Contactez-moi.</h2>
            <form ref={form} onSubmit={sendEmail}  >
                <div className="formText">
                    <label>Nom</label>
                    <input type="text" name="user_lastname" required="required" />
                    <label>Prénom</label>
                    <input type="text" name="user_firstname" />
                    <label>Société</label>
                    <input type="text" name="user_society" />
                </div>
                <div className="formContact">
                    <label>Email</label>
                    <input type="email" name="user_email" required="required" />
                    <label>Téléphone</label>
                    <input type="mobile" name="user_mobile" />
                </div>
                <label>Message</label>
                <textarea name="user_message" />
                <input type="submit" value="Envoyer" className="button" />
            </form>

        </div>
    );
}
export default Contact;