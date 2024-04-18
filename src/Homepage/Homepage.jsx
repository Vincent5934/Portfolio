import Form from "../Components/Form/Form";
import Gallery from "../Components/Gallery/Large/LargeGallery";
import Header from "../Components/Header/Header";
import Skill from "../Components/Skill/Skill";

import Langage from "../Components/langage/langage";
import "./homepage.css"


const Homepage = () => {
    return ( 
        <>
        <Header/>
        <Skill/>
        <Langage />
        <Gallery />
        <Form />       
        </>
     );
}
 
export default Homepage;