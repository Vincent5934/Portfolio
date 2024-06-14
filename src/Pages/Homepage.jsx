import Career from "../Components/Career/Career";
import Contact from "../Components/Contact/Contact";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Skills from "../Components/Skills/Skills";
import Work from "../Components/Work/Work";

const Homepage = () => {
    return (
        <>
            <Hero />
            <Header />
            <Work />
            <Career />
            <Skills />
            <Contact />
        </>
    );
}

export default Homepage;