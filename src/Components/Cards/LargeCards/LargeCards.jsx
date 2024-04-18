import "./largecards.css"


const LargeCards = ({pictures}) => {
    return ( 
        <div >
            <img src={pictures} alt="" className="largecards" />
        </div>
     );
}
 
export default LargeCards;