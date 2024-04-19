import "./header.css"
import logo from "../../Assets/logo.png"
import SmallGallery from "../Gallery/Small/SmallGallery";

const Header = () => {
    return (
        <>
            <div className="headerContainer">
                <div className="navbar">
                    <img src={logo} alt="logo" />
                    <div className="navbar__text">
                        <p>Accueil</p>
                        <p>Réalisations</p>
                        <p>Parcours</p>
                        <p>Contact</p>
                    </div>
                </div>
                <h1>Appréhender votre projet différement. Je relève le défi.<br></br>Et vous?</h1>
                <SmallGallery />
            </div>
        </>
    );
}

export default Header;