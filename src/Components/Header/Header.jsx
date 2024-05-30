import "./header.css"
import logo from "../../Assets/logo_2.png"
import SmallGallery from "../Gallery/Small/SmallGallery";

const Header = () => {
    return (
        <>
            <div className="headerContainer">
                <div className="navbar">
                    <img src={logo} alt="logo" className="test" />
                    <div className="navbar__text">
                        <a href="#réalisation">Réalisations</a>
                        <a href="#contact">Contact</a>
                        <a href="parcours">Qui suis-je?</a>
                    </div>
                </div>
                <h1>Appréhender votre projet différement. Je relève le défi.<br/>Et vous?</h1>
                <SmallGallery />
            </div>
        </>
    );
}

export default Header;