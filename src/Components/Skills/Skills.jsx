import "./skills.css"
import { skillsDatas } from "../../Datas/Datas"
import image from "../../Assets/scott-graham-5fNmWej4tAA-unsplash.jpg"

const Skills = () => {
    return (
        <>
            <img src={image} alt="réunion de travail" className="skillsImage" />
            <div className="skillsGlass">
                <h2 className="skillsGlassTitle">Donnez vie à votre projet</h2>
                <p>Faites moi part de vos besoins, de vos attentes, de vos objetcifs. Faites moi découvrir votre secteur d'activité,<br></br>ses avantages, ses inconvénients et je sélectionnerai pour vous les technologies les plus adaptées pour répondre à votre demande.</p>
                <div className="skillsContainer">
                    {skillsDatas.map((Datas) => (
                        <img src={Datas.pictures} alt="" className="skillsLogo" key={Datas.id} />
                    ))}
                </div>
            </div>
        </>
    );
}
export default Skills;