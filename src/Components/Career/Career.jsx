import "./career.css"
import careerImage from "../../Assets/carriere.jpg"
import bmw from "../../Assets/bmw.png"
import mercedes from "../../Assets/mercedes.png"
import ca from "../../Assets/ca.png"

const Career = () => {
    return (
        <>
            <img src={careerImage} alt="" className="careerImage" id="parcours" />
            <div className="glass"  >
                <div className="careerContainer">
                    <div className="formation">
                        <h2>Formation</h2>
                        <p>Titre de Développeur Web Front-End<br />Formation openclassRooms</p>
                        <p>Master spécialisation Négocation-vente<br />Ecole Supérieure de Commerce de Montpellier</p>
                        <p>BA in Business Strategy<br /> University of Sunderland (UK)</p>
                        <p>DUT Génie Electrique et Informatique Industriel<br />IUT de Lille</p>
                    </div>
                    <div className="parcours">
                        <h2>Parcours</h2>
                        <div className="careerLogo">
                            <img src={bmw} alt="logo bmw" className="logoBMW" />
                            <img src={mercedes} alt="logo mercedes" className="logoMercedes" />
                        </div>
                        <p>Responsable Marketing et Communication - 10 ans</p>
                        <div className="careerLogo">
                            <img src={ca} alt="logo Crédit Agricole" className="logoCA" />
                        </div>
                        <p>Conseiller Financier Professionnel - 6 ans</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Career;