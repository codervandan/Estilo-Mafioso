import "./ModalWithForm.css";

function ModalWithForm({ title, children, onSubmit, onClose }) {
  return (
    <div className="modal">
      <div className="modal__content">
        <button type="button" onClick={onClose}>
          X
        </button>
        <h2>{title}</h2>
        <form onSubmit={onSubmit}>
          {children} <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
