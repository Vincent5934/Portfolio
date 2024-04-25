import "./smallcards.css"

const SmallCards = ({ pictures }) => {
    return (
        <div className="smallcards" data-aos="zoom-in-up">
            <img src={pictures} alt="logos des lagages maitrisés" className="smallcards__logo"  />
        </div>
    );
}

export default SmallCards;