import SmallCards from "../SmallCards/SmallCards";
import datas from "../../Datas/logo.json"

const Gallery = () => {
    return(
        <>
    {datas.map(data => {
    return (
        <SmallCards
        key={data.id}
        id={data.id}
        title={data.title}
        pictures={data.pictures}
        />
    )
})}
</>
)
}
 
export default Gallery;