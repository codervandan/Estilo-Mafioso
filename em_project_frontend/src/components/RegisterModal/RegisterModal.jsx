import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function RegisterModal({ onRegister, onClose }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  return (
    <ModalWithForm title="Sign Up" onSubmit={handleSubmit} onClose={onClose}>
      <input name="name" type="text" placeholder="Name" value={values.name || ""} onChange={handleChange} required />

      <input name="email" type="email" placeholder="Email" value={values.email || ""} onChange={handleChange} required />

      <input name="password" type="password" placeholder="Password" value={values.password || ""} onChange={handleChange} required />
    </ModalWithForm>
  );
}

export default RegisterModal;
