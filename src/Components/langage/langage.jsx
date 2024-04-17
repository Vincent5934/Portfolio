import image from "../../Assets/scott-graham-5fNmWej4tAA-unsplash.jpg"
import "./langage.css"
import datas from "../../Datas/logo.json"
import SmallCards from "../SmallCards/SmallCards"

const Langage = () => {
  return (
    <>
      <img src={image} alt="" className="image" />
      <div className="glass">
        <h2 className="glassTitle">Donnez vie à votre projet</h2>
        <p className="glass__p">Faites moi part de vos besoins, de vos attentes, de vos objetcifs. Faites moi découvrir votre secteur d'activité,<br></br>ses avantages, ses inconvénients et je sélectionnerai pour vous les technologies les plus adaptées pour répondre à votre demande.</p>
        <div className="langage__smallcards">
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
        </div>
      </div>


    </>
  );
}

export default Langage;