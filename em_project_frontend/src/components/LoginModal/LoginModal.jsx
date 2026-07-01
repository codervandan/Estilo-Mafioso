import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import "./LoginModal.css";

function LoginModal({ onLogin, onClose }) {
  const { values, isValid, handleChange } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <div className="login-modal" onMouseDown={onClose}>
      <div className="login-modal__container" onMouseDown={(e) => e.stopPropagation()}>
        <button className="login-modal__close" type="button" onClick={onClose} aria-label="Close login modal">
          ×
        </button>

        <h2 className="login-modal__title">Log In</h2>

        <form className="login-modal__form" onSubmit={handleSubmit}>
          <input
            className="login-modal__input"
            name="email"
            type="email"
            placeholder="Email"
            value={values.email || ""}
            onChange={handleChange}
            required
          />

          <input
            className="login-modal__input"
            name="password"
            type="password"
            placeholder="Password"
            value={values.password || ""}
            onChange={handleChange}
            required
          />

          <button className="login-modal__submit" type="submit" disabled={!isValid}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
