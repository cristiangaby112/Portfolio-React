import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import { BsGithub } from "react-icons/bs";
// import Animations from '../../utilities/Animations';
// import ScrollService from '../../utilities/ScrollService';
import "./Proyectos.css";

export default function Proyectos(props) {
  // let fadeInScreenHandler = (screen) => {
  //   if(screen.fadeInScreen !== props.id)
  //     return;
  //   Animations.animations.fadeInScreen(props.id)
  // }
  // const fadeInSubcription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="proyect-container " id={props.id || ""}>
      <ScreenHeading title="Proyectos" subHeading="Mis Proyectos" />
      <div className="container-flex">
        <div className="container-data">
          <div className="container-video">
            <iframe
              className="video"
              src="https://www.youtube.com/embed/Bpkp3N2XEVU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="texto-container">
            <p className="texto">
              Desarrollo de una aplicación Web en la cual se puede ver
              información de distintos paises utilizando una API externa y a
              partir de ella poder buscar paises, filtrarlos/ordenarlos, crear
              actividades turísticas y mas funcionalidades. Desarrollado con:
              React JS, Node JS, Express JS, Sequelize, PostgreSQL
            </p>
          </div>
          <div className="container-icons">
            <a
              className="fifth"
              href="https://github.com/cristiangaby112/PI-Countries-main"
            >
              <BsGithub /> Codigo
            </a>
            <a
              className="fifth-web"
              href="https://pi-countries-main.vercel.app/"
            >
              Web
            </a>
          </div>
        </div>
        <div className="container-data">
          <div className="container-video">
            <iframe
              className="video"
              src="https://www.youtube.com/embed/2hALPb1sGXM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="texto-container">
            <p className="texto">
              Desarrollo de una App móvil para Android, "Event In", donde podrás
              consultar eventos cultutales, sociales y de interés general. Se
              puede buscar cualquier evento por nombre, filtrar por eventos u
              ordenarlos por categoria de evento, Loguarse y crear su propio
              evento pagando una tarifa por dia mediante mercado pago.
              Desarrollado con: React Native JS, Express JS, Firebase.
            </p>
          </div>
          <div className="container-icons">
            <a
              className="fifth"
              href="https://github.com/cristiangaby112/EventIn"
            >
              <BsGithub /> Codigo
            </a>
            {/* <a
              className="fifth-web"
              href="https://pi-countries-main.vercel.app/"
            >
              Web
            </a> */}
          </div>
        </div>
        <div className="container-data">
          <div className="container-video">
            <iframe
              className="video"
              src="https://www.youtube.com/embed/DApvqOVXzkA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="texto-container">
            <p className="texto">
              Desarrollo de un clon de Netflix utilizando React JS, Redux, CSS
              Module para la maquetacion, la obtencion de datos atraves de una
              API externa.
            </p>
          </div>
          <div className="container-icons">
            <a
              className="fifth"
              href="https://github.com/cristiangaby112/Chanllenge_MoviesNexflix"
            >
              <BsGithub /> Codigo
            </a>
            <a
              className="fifth-web"
              href="https://nettflix-movies-app.herokuapp.com/"
            >
              Web
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
