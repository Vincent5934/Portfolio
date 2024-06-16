import "./header.css"
import logoReact from "../../Assets/react.webp"
import langage from "../../Assets/langage.webp"
import agile from "../../Assets/agile.webp"

const Header = () => {
    return (
        <>
            <section className="headerContainer">
                <figure className="headerCard">
                    <img src={logoReact} alt="logo React" className="logoReact" />
                    <h3>REACT</h3>
                    <figcaption>Spécialiste REACT, je mets à votre disposition toute la puissance de cet outil pour créer votre projet. Votre site Internet sera et restera à la pointe de la technologie.</figcaption>
                    <a href="https://fr.react.dev/" target="_blank" rel="noreferrer" >En savoir plus</a>
                </figure>
                <figure className="headerCard">
                    <img src={langage} alt="bulle de discussion" className="headerLogo" />
                    <h3 className="langage">Nous parlons le même langage</h3>
                    <figcaption>Clients, vente, management, trésorerie, retour sur investissement...mon parcours professionnel à fait de moi un homme de terrain me permettant d'avoir une vision pertinante et réaliste pour votre projet.</figcaption>
                    <a href="#parcours" rel="noreferrer" >En savoir plus</a>
                </figure>
                <figure className="headerCard">
                    <img src={agile} alt="logo agile" className="headerLogo" />
                    <h3 className="langage">Gestion de projet </h3>
                    <figcaption>Votre projet sera réalisé avec la méthode Agile. Vous serez au centre de ce dernier. Je privilégie les individus plutôt que les processus; une collaboration avec vous plutôt qu'une négociattion contractuelle.</figcaption>
                    <a href="https://www.wrike.com/fr/project-management-guide/faq/quest-ce-que-la-methodologie-agile-en-gestion-de-projet/" target="_blank" rel="noreferrer">En savoir plus</a>
                </figure>
            </section>
        </>
    );
}

export default Header;