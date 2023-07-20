import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import {GiHamburgerMenu} from 'react-icons/gi'
import "../components/Home.css";

function Navar() {
  const { user, logout } = useAuth();
  const [ActiveItem, setActiveItem] = useState("Home");
  const [menu, setMenu] = useState('false')

  const handleLogout = async () => {
    await logout();
  };

  useEffect(() => {
    const path = window.location.pathname;
    setActiveItem(path.split("/")[1]);
  }, []);

  const handlemenu = () =>{
    const state = !menu;
    setMenu(state)
  }


  return (
    <>
      <nav className="navarmenu">
        <div className="navarLogo">
          <div className="logoNav">
            <img src="../../src/assets/inmel.ico" alt="" />
          </div>
          <div className="nameLogo">
              <h1>{user.email.split('@')[0]}</h1>
            <button
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>
          </div>
        </div>
        <div className={menu ?'containeritem':'containeritemclose'}>
          <ul className="navarItem">
            <li>
              <Link to="/" className={ActiveItem === "Home" ? "active" : "/"}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/registrar"
                className={ActiveItem === "registrar" ? "active" : "registrar"}
              >
                registrar
              </Link>
            </li>
            <li>
              <Link
                // to="/contact"
                // className={ActiveItem === "Contact" ? "active" : ""}
                onClick={handleLogout}
              >
                Salir
              </Link>
            </li>
          </ul>
        </div>
        <GiHamburgerMenu className="menuicons" onClick={handlemenu}/>
      </nav>
    </>
  );
}

export default Navar;
