import "./hero.css"
import logo from "../../Assets/logo.png"

const Header = () => {
    return (
        <section className="heroContainer">
            <nav className="navBar">
                <img src={logo} alt="logo" />
                <div className="navBarText">
                    <a href="#réalisation">Réalisations</a>
                    <a href="#parcours">Parcours</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
            <h1>Appréhender votre projet différement. Je relève le défi.<br />Et vous ?</h1>
            <div className="heroGallery">
                <img src="https://i.postimg.cc/j2W9zY0q/booki.png" alt="site booki" className="card3" />
                <img src="https://i.postimg.cc/V6WTHGSn/bluel.png" alt="site sophie bluel" className="card2" />
                <img src="https://i.postimg.cc/bvTKPR9P/nina.png" alt="site nina carducci" className="card1" />
                <img src="https://i.postimg.cc/QCRzmYhQ/omf.png" alt="site ohmyfood" className="card2" />
                <img src="https://i.postimg.cc/25mPgtvT/kasa-logement.png" alt="site kasa" className="card3" />
            </div>
        </section>
    );
}
export default Header;