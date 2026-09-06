import images from "../images/exporting";

const Modal = ({open, sent, notSent, success}) => {
    
    return(
        <div className={!open ? 'blur-bg-modal' : 'blur-bg-modal show-fade'}>
            <div className="flex-col align-center modal-content gap-1">
                <img className="modal-icon" src={success ? images.check : images.error} alt="icon"></img>
                <h4 className="modal-text simple-flex align-center">{success ? sent : notSent}</h4>
            </div>
        </div>
    )
}

export default Modal
