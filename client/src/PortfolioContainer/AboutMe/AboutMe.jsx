import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // eslint-disable-next-line no-unused-vars
  const fadeInSubcription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANT = {
    description:
      "Desarrollador web y móvil con conocimientos en front-end y back-end, junto con una habilidad especial para crear aplicaciones con la máxima eficiencia. Dispuesto a aportar y ser productivo para cualquier empresa.",
    highlights: {
      bullets: [
        "Full Stack web and mobile development",
        "Interactivo Front End como en Back End",
        "React y React Native",
        "Redux para el manejo de estados Globales",
        "REST API",
        "Gestión de la base de datos",
      ],
      heading: "Aquí hay algunos puntos destacados:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANT.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"Sobre Mi"} subHeading={"¿Por qué elegir mi?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANT.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANT.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Contratame{" "}
              </button>
              <a
                href="Currículum.pdf"
                download="cristian_barriento Currículum.pdf"
              >
                <button className="btn highlighted-btn">Currículum</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
