import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

const validate = (input) => {
  let errors = {};
  if (!input.email) {
    errors.email = "El email es requerido";
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = "El email no es válido";
  }
  if (!input.password) {
    errors.password = "La contraseña es requerida";
  } else if (input.password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  }
  return errors;
};
const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });


    setErrors(validate(input));
  };

    const handleSubmit = (e) => {
      e.preventDefault();
      setInput({
        email: "",
        password: "",
      })
    }


  const onSubmit = (e) => {
    e.preventDefault();
    setInput({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-container">
      <div>
        <h1>Login</h1>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>  

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
        {errors.email !== "" && <p className="p-login-error">{errors.email}</p>}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
        {errors.password !== "" && <p className="p-login-error">{errors.password}</p>}
        <button
          type="submit"
          disabled={
            !input.email || !input.password || errors.email || errors.password
          }
        >
          Login
        </button>
        <p>¿No tienes cuenta? Ingresa <Link to={'/signup'}>aquí</Link></p>
      </form>
      <div className="login-google">
        <p>Login with</p>
        <p>google</p>
      </div>
    </div>
  );
};

export default Login;
