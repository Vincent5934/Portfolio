import "./form.css"

const Form = () => {
    return (
        <div className="formBackground">
            <h2 className="formTitle">Prêt à relever le défi?</h2>
            <div className="form">
                <form action="" method="post">
                    <div className="formText">
                        <input type="text" name="prénom" id="prénom" placeholder="Prénom" />
                        <input type="text" name="nom" id="nom" placeholder="Nom" />
                        <input type="text" name="société" id="société" placeholder="Société" />
                    </div>
                    <div className="formNumber">
                        <input type="email" name="email" id="email" placeholder="Email" />
                        <input type="mobile" name="mobile" id="mobile" placeholder="Téléphone" />
                    </div>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Parlez-moi de votre projet"></textarea>
                    <input type="submit" value="Défi relevé" className="button" />
                </form>
            </div>
        </div>
    );
}

export default Form;