import "./hero.css"
import heroLogo from "../../Assets/logo.png"

const Hero = () => {
    return (
        <>
            <section className="heroContainer">
                <img src={heroLogo} alt="logo webstudio" className="heroLogo" />
                <nav>
                    <a href="#réalisation">Réalisations</a>
                    <a href="#parcours">Parcours</a>
                    <a href="#contact">Contact</a>
                </nav>
            </section>
            <h1>Appréhender votre projet différement. Je relève le défi.<br />Et vous ?</h1>
        </>
    );
}

export default Hero;