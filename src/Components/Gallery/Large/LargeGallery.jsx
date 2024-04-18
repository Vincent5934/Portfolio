import LargeCards from "../../Cards/LargeCards/LargeCards";
import "./largegallery.css"
import dataGallery from "../../../Datas/gallery.json"

const Gallery = () => {
    return ( 
        <>
        <h2 className="galleryTitle">Mes Réalisations</h2>
        <div className="gallery">
            {dataGallery.map(data =>{
                return (
                    <LargeCards 
                    pictures={data.pictures[0]}
                    />
                )
            } )}
            

            
        </div>
        </>
     );
}
 
export default Gallery;