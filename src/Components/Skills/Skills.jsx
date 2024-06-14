import "./skills.css"
import skillsDatas from "../../Datas/skillsDatas.json"

const Skills = () => {
    return (
        <section className="skillsGlass">
            <p className="skillsTitle">Donnez vie à votre projet</p>
            <p className="skillsText">Faites moi part de vos besoins, de vos attentes, de vos objetcifs. Faites moi découvrir votre secteur d'activité,
                ses avantages, ses inconvénients et je sélectionnerai pour vous les technologies les plus adaptées
                pour répondre à votre demande.</p>
            <figure className="skillsContainer">
                {skillsDatas.map(item => {
                    return (<img
                        key={item.id}
                        src={item.pictures}
                        alt={item.title}
                        className="skillsLogo" />)
                })}
            </figure>
        </section>
    );
}

export default Skills;

