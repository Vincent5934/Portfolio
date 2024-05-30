import "./modal.css"

const Modal = ({ open, close }) => {
    return (
        <div className="modal" style={{ transform: open ? 'translateY(0vh)' : 'translateY(-100vh)', opacity: open ? '1' : '0' }}>
        <p onClick={close} className="close">Fermer</p>
        </div>
    );
}
export default Modal;

