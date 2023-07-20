import React from "react";
import "../components/PruebaMedidor.css";

function PruebaMedidor() {
  return (
    <>
      <div className="containerCard">
        <div className="containerCar">
          <div className="containerImg">
            <img
              src="../../public/tecun.gif"
              alt=""
              className="imgmedidormonofase"
            />
          </div>
          <div className="containerDatoCard">
            <p className="titleCard">Prueba medidor</p>
            <p>
              La prueba que se realiza a los medidores debe ser personal
              calificado.
            </p>
            <a href=""> Mas información</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PruebaMedidor;
