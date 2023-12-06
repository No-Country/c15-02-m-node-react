import { Link } from "react-router-dom";
import { useState } from "react";
import './SignUp.css'

const validate = (input) => {
  let errors = {};
  if (!input.nombre) {
    errors.nombre = "El nombre es requerido";
  } else if (!/^[a-zA-Z\s]*$/.test(input.nombre)) {
    errors.nombre = "El nombre solo puede contener letras";
  }
  if (!input.apellido) {
    errors.apellido = "El apellido es requerido";
  } else if (!/^[a-zA-Z\s]*$/.test(input.apellido)) {
    errors.apellido = "El apellido solo puede contener letras";
  }
  if (!input.dni) {
    errors.dni = "El dni es requerido";
  } else if (!/^[0-9]*$/.test(input.dni)) {
    errors.dni = "El dni solo puede contener números";
  }
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
  if (input.password !== input.confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }

  return errors;
};

const SignUp = () => {
  const [input, setInput] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(validate(input));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setInput({
      nombre: "",
      apellido: "",
      dni: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="sign-up-container">
      <div>
        <Link to="/landing">Landing</Link>
      </div>
      <div>
        <h1>Registro</h1>
      </div>

      <form className="sign-up-form" onSubmit={onSubmit}>
        <label htmlFor="">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={input.nombre}
          onChange={handleChange}
          />
        {errors.nombre !== "" && <p className="error">{errors.nombre}</p>}

        <label htmlFor="">Apellido</label>
        <input
          type="text"
          name="apellido"
          value={input.apellido}
          onChange={handleChange}
        />
        {errors.apellido !== "" && <p className="error">{errors.apellido}</p>}

        <label htmlFor="">DNI</label>
        <input
          type="number"
          name="dni"
          value={input.dni}
          onChange={handleChange}
        />
        {errors.dni !== "" && <p className="error">{errors.dni}</p>}

        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
        {errors.email !== "" && <p className="error">{errors.email}</p>}

        <label htmlFor="">Contraseña</label>
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleChange}
          />
        {errors.password !== "" && <p className="error">{errors.password}</p>}

        <label htmlFor="">Confirmar contraseña</label>
        <input
          type="password"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={handleChange}
          />
        {errors.confirmPassword !== "" && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        <button
          type="submit"
          disabled={
            !input.nombre ||
            !input.apellido ||
            !input.dni ||
            !input.email ||
            !input.password ||
            !input.confirmPassword ||
            errors.apellido ||
            errors.dni ||
            errors.email ||
            errors.password ||
            errors.confirmPassword
          }
        >
          Sign Up
        </button>
      </form>
      <div>
        <p>Registrate con</p>
        <p>google</p>
      </div>
    </div>
  );
};

export default SignUp;
