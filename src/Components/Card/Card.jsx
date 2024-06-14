import { Link } from "react-router-dom";
import "./card.css"

const Card = ({ pictures, description, lienGithub, title, webSite }) => {
    return (
        <figure className="card">
            <img src={pictures} alt={title} className="cardPictures" />
            <h3>{title}</h3>
            <p className="cardText">{description}</p>
            <div className="lienContainer">
                <Link to={webSite} target="_blank" className="lien">Website</Link>
                <Link to={lienGithub} target="_blank" className="lien">Lien Github</Link>
            </div>
        </figure>
    );
}
export default Card;
