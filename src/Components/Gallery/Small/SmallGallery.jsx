import dataGallery from "../../../Datas/gallery.json"
import MediumCards from "../../Cards/MediumCards/MediumCards";
import "./smallgallery.css"

const SmallGallery = () => {
    
   
    return ( 
        <div className="smallGallery">
        {dataGallery.map(data => {
            
                // if (data.id === "2")
                
                return (
                    
                <MediumCards  
                       pictures={data.pictures}    />
            )

        })}
       </div>
     );
      
   
}
 
export default SmallGallery;