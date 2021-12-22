import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from '../../../utilities/ScrollService'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/barriento-cristian/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="mailto=cristiangabrielbarriento@outlook.com">
                <i className="fa fa-envelope"></i>
              </a>
              <a href="https://www.instagram.com/cristian_gbarriento/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/cristiangaby112">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hola, Yo Soy <span className="highlighted-text">Cristian</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer 🚀",
                    1000,
                    "React/Redux Developer",
                    1000,
                    "React-native Developer",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Destreza para construir aplicaciones web y móviles tanto en
                front-end como en el back-end.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {""}
              Contratame{" "}
            </button>
            <a
              href="Currículum.pdf"
              download="cristian_barriento Currículum.pdf"
            >
              <button className="btn highlighted-btn">Curriculum</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
