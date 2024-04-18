import "./mediumcards.css"


const MediumCards = ({id, pictures}) => {
   
    return ( 
        
        
        <img src={pictures} id={id} alt="" className="card1" />
      
     );
}
 
export default MediumCards;