import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdError } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import "./Login.css";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");


  const handelChage = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(`${user.email}@isagens.com`, user.password);
      navigate("/");
    } catch (error) {
      console.log(error.code)
      if (error.code === "auth/invalid-email") {
       setError("Usuario Incorrecto ó No existe "); 
      } 

      if(error.code === "auth/wrong-password")
      setError("Clave incorrecta"); 

      if(error.code === "auth/too-many-requests")
      setError("Clave incorrecta");

      if(error.code === "auth/user-not-found")
      setError("Ingrese un Crreo Valido");
    }
    //auth/user-not-found
  };

 
  return (
    <>
      <div className="containerroot">
        <img src="../public/LOGO_APRENDIZAJE.svg" alt="" className="imalogo" />
        <div className="containerLogin aparecer">
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit} className="containerform">
            <div className="CampoDato">
              <MdEmail className="iconslogin" />
              <input
                type="text"
                name="email"
                placeholder="Usuario"
                onChange={handelChage}
                className="inptlog"
              />
            </div>
            <div className="CampoDato">
              <FaKey className="iconslogin" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                onChange={handelChage}
                className="inptlog"
              />
            </div>

            <button className="btnLogin ">Login</button>
          </form>
          <img src="../../public/inmel.png" alt="" className="logoinmel" />
        </div>
      </div>
    </>
  );
}
