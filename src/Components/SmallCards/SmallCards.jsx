import "./smallcards.css"

const SmallCards = ({pictures}) => {
    return ( 
        <div className="smallcards">
            <img src={pictures} alt="logos des lagages maitrisés" className="smallcards__logo" />
        </div>
     );
}
 
export default SmallCards;