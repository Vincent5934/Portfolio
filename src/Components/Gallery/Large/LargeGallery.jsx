import LargeCards from "../../Cards/LargeCards/LargeCards";
import "./largegallery.css"
import dataGallery from "../../../Datas/gallery.json"

const Gallery = () => {
    return (
        <>
            <h2 className="galleryTitle">Mes Réalisations</h2>
            <div className="gallery"  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                {dataGallery.map(data => {
                    return (
                        <LargeCards
                            pictures={data.pictures[0]}
                        />
                    )
                })}
            </div>
        </>
    );
}

export default Gallery;