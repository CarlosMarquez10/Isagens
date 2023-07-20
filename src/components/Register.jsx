import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import Navar from "./Navar";

export function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handelChage = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-email") {
        setError("Ingrese un Correo Valido");
      }
    }
  };

  return (
    <>
     <Navar/>
      <div>
        {error && <p>{error}</p>}

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="ejemplo@company.com"
            onChange={handelChage}
          />

          <label htmlFor="password">Passworad</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            onChange={handelChage}
          />

          <button className="bg-green-500 m-5 ">Registar</button>
        </form>
      </div>
    </>
  );
}
