import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function LoginModal({ onLogin, onClose }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <ModalWithForm title="Log In" onSubmit={handleSubmit} onClose={onClose}>
      <input name="email" type="email" placeholder="Email" value={values.email || ""} onChange={handleChange} required />

      <input name="password" type="password" placeholder="Password" value={values.password || ""} onChange={handleChange} required />
    </ModalWithForm>
  );
}

export default LoginModal;
