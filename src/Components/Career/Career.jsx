import "./career.css"

const Career = () => {
    return (
        <section className="career" id="parcours">
            <article className="formation">
                <h4>Formation</h4>
                <p>Certificat professionnel Développeur Front-End<br />Formation Openclassrooms</p>
                <p>Master spécialisation Négocation-vente<br />Ecole Supérieure de Commerce de Montpellier</p>
                <p>BA in Business Strategy<br /> University of Sunderland (UK)</p>
                <p>DUT Génie Electrique et Informatique Industriel<br />IUT de Lille</p>
            </article>
            <article className="parcours">
                <h4>Parcours</h4>
                <p>Responsable Marketing et Communication - 10 ans<br />BMW / Mercedes-Benz</p>
                <p>Conseiller Financier Professionnel - 6 ans<br />Crédit Agricole</p>
            </article>
        </section>
    );
}

export default Career;