import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import "./RegisterModal.css";

function RegisterModal({ onRegister, onClose }) {
  const { values, isValid, handleChange } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  return (
    <div className="register-modal" onMouseDown={onClose}>
      <div className="register-modal__container" onMouseDown={(e) => e.stopPropagation()}>
        <button className="register-modal__close" type="button" onClick={onClose} aria-label="Close register modal">
          ×
        </button>

        <h2 className="register-modal__title">Create Account</h2>

        <form className="register-modal__form" onSubmit={handleSubmit}>
          <input
            className="register-modal__input"
            name="name"
            type="text"
            placeholder="Name"
            value={values.name || ""}
            onChange={handleChange}
            minLength="2"
            maxLength="30"
            required
          />

          <input
            className="register-modal__input"
            name="email"
            type="email"
            placeholder="Email"
            value={values.email || ""}
            onChange={handleChange}
            required
          />

          <input
            className="register-modal__input"
            name="password"
            type="password"
            placeholder="Password"
            value={values.password || ""}
            onChange={handleChange}
            required
          />

          <button className="register-modal__submit" type="submit" disabled={!isValid}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;
