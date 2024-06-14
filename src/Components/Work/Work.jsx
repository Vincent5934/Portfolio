import Card from "../Card/Card";
import "./work.css"
import workDatas from "../../Datas/workDatas.json"

const Work = () => {
    return (
        <section className="workGlass" id="réalisation">
            <figure className="workContainer">
                {workDatas.map(item => {
                    return (<Card
                        key={item.id}
                        title={item.title}
                        pictures={item.pictures}
                        description={item.description}
                        lienGithub={item.lienGithub}
                        webSite={item.webSite}
                    />)
                })}
            </figure>
        </section>
    )
}

export default Work;