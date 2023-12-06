import { Link } from "react-router-dom";
import style from "./Landing.module.css";
const Landing = () => {
  return (
    <div>
      <h1>Bienvenido</h1>
      <h2>a</h2>
      <h3>FinanzApp Educa</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className={style.links}>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
};

export default Landing;
