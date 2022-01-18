import React from "react";
import "./FooterContainer.css";

export default function FooterContainer() {
  return (
    <div className="FooterContainer-container">
      <div className="icon-container">
        <div className="icon-container-container">
          <a href="https://www.linkedin.com/in/barriento-cristian/">
            <i className="fa fa-linkedin"/>
          </a>
        </div>
        <div className="icon-container-container">
          <a href="mailto=cristiangabrielbarriento@outlook.com">
            <i className="fa fa-envelope"/>
          </a>
        </div>
        <div className="icon-container-container">
          <a href="https://www.instagram.com/cristian_gbarriento/">
            <i className="fa fa-instagram"/>
          </a>
        </div>
        <div className="icon-container-container">
          <a href="https://github.com/cristiangaby112">
            <i className="fa fa-github"/>
          </a>
        </div>
      </div>
      <div className="text-container">
        <p>Hecho por @cristiangaby112</p>
        <p className="text-correo">cristiangabrielbarriento@outlook.com</p>
        <p>© 2022 - Todos los derechos reservados.</p>
      </div>
    </div>
  );
}
