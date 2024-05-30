import Modal from "../../Modal/Modal"
import "./largecards.css"
import { useState } from "react";


const LargeCards = ({ pictures }) => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    return (
        <div >
            <Modal open={open} close={closeModal} />
            <img src={pictures} alt="" className="largecards" onClick={() => setOpen(true)} />
        </div>
    );
}
export default LargeCards;