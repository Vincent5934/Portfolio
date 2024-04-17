import "./skill.css"
import logoReact from "../../Assets/react.png"
import langage from "../../Assets/langage.png"
import agile from "../../Assets/agile.png"

const Skill = () => {
    return ( 
       <div className="container">
       <h2>Different comment ?</h2>
       <div className="largeContainer">
        <div className="smallContainer">
            <img src={logoReact} alt="logo React" className="logo" />
            <h3>REACT</h3>
            <p>Spécialiste REACT, je mets à votre disposition toute la puissance de cet outil pour créer votre projet. Votre site Internet sera et restera à la pointe de la technologie.</p>
            <a href="https://fr.react.dev/">En savoir plus</a>
        </div>
        <div className="smallContainer">
            <img src={langage} alt="bulle de discussion" className="logo" />
            <h3 className="langage">Nous parlons le même langage</h3>
            <p>Clients, vente, management, trésorerie, retour sur investissement...mon parcours professionnel à fait de moi un homme de terrain me permettant d'avoir une vision pertinante et réaliste pour votre projet. </p>
            <a href="https://fr.react.dev/">En savoir plus</a>
        </div>
        <div className="smallContainer">
            <img src={agile} alt="" className="logo" />
            <h3 className="langage">Gestion de projet </h3>
            <p>Votre projet sera réalisé avec la méthode Agile. Vous serez au centre de ce dernier. Je privilégie les individus plutôt que les processus; une collaboration avec vous plutôt qu'une négociattion contractuelle.</p>
            <a href="https://www.youtube.com/watch?v=weP6BLvfzG8">En savoir plus</a>
        </div>
        </div>
       </div>
     );
}
 
export default Skill;