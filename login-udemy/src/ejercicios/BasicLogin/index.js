import { useState } from "react";
import "./login.css";

function LoginFormBasic() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    isLogin: false,
  });

  const handleInputChange = ({ target: { id, value } }) =>
    setForm((last) => ({ ...last, [id]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm((last) => ({ ...last, isLogin: true }));
  };

  return (
    <>
      {form.isLogin ? (
        <h2 className="title"> Bienvenido {`${form.email}`}!!!</h2>
      ) : (
        <form className="form-container" onSubmit={handleSubmit}>
          <h2>Iniciar Sesión</h2>
          <label>Email:</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={handleInputChange}
          />
          <label>Contraseña:</label>
          <input
            id="password"
            type="password"
            value={form.password}
            onChange={handleInputChange}
          />
          <button type="submit">Enviar</button>
        </form>
      )}
    </>
  );
}

export default LoginFormBasic;
