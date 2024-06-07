import "./work.css"
import { workDatas } from "../../Datas/Datas";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <section id="réalisations">
      <h2 className="workTitle" id="réalisation">Mes Réalisations</h2>
      <div className="workContainer" >
        {workDatas.map((Datas) => (
          <div className="workCards" key={Datas.id}>
            <img src={Datas.pictures} alt="" className="workPictures" />
            <h3 className="workDatasTitle">{Datas.title}</h3>
            <p className="workDatasText">{Datas.description}</p>
            <Link to={Datas.lien} target="_blank" className="workDatasLien" >lien Github</Link>
            <div className="workLogoContainer">
            <img src={Datas.logo[0]} alt="" className="workLogo"/>
            <img src={Datas.logo[1]} alt="" className="workLogo"/>
            <img src={Datas.logo[2]} alt="" className="workLogo"/>
            <img src={Datas.logo[3]} alt="" className="workLogo"/>
            <img src={Datas.logo[4]} alt="" className="workLogo"/>
            <img src={Datas.logo[5]} alt="" className="workLogo"/>
            <img src={Datas.logo[6]} alt="" className="workLogo"/>
            </div>
          </div>
        ))}
      </div>
    </section>

  );
}
export default Work;