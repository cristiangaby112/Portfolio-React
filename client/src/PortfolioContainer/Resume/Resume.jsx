import React, {useState} from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css';

export default function Resumen(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // eslint-disable-next-line no-unused-vars
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.link ? props.link : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Estudios", logoSrc: "education.svg" },
    { label: "Experiencia", logoSrc: "work-history.svg" },
    { label: "Habilidades en programación", logoSrc: "programming-skills.svg" },
    { label: "Proyectos", logoSrc: "projects.svg" },
    { label: "Interes", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 100 },
    { skill: "React JS", ratingPercentage: 100 },
    { skill: "React Native", ratingPercentage: 100 },
    { skill: "Redux", ratingPercentage: 100 },
    { skill: "Typescript", ratingPercentage: 100 },
    { skill: "HTML", ratingPercentage: 100 },
    { skill: "CSS", ratingPercentage: 100 },
    { skill: "Bootstrap", ratingPercentage: 100 },
    { skill: "Sequelize", ratingPercentage: 100 },
    { skill: "Node JS", ratingPercentage: 100 },
    { skill: "Express JS", ratingPercentage: 100 },
    { skill: "Mongo DB", ratingPercentage: 100 },
    { skill: "Mongoose", ratingPercentage: 100 },
    { skill: "Jest", ratingPercentage: 100 },
    { skill: "Angular", ratingPercentage: 100 },
  ];

  const projectsDetails = [
    // {
    //   title: "Personal Portfolio Website",
    //   duration: { fromDate: "2021", toDate: "2021" },
    //   link: <a href="https://stephenportfolio.herokuapp.com/">Personal Portfolio</a>,
    //   description:
    //     `Desarrollé un sitio web de portafolio de una página que ayuda a mostrar mis habilidades, proyectos y aspectos destacados sobre mí.`,
    //   subHeading: "Tecnologías utilizadas: React JS, Bootstrap, PS",
    // },
    {
      title: " App de Eventos ",
      duration: { fromDate: "2021", toDate: "2021" },
      link: <a href="https://github.com/cristiangaby112/EventIn">App de Eventos</a>,
      description:
        `App Movil de eventos en el que se puede crear eventos al estar
        logueado y solo se puede crear un evento pagando atraves de
        mercado pago se puede ver los eventos disponible y guardarlo
        en tu prefil en favoritos, buscar por titulo de evento todo esto
        usando Firebase y React native.`,
      subHeading: "Tecnologías utilizadas: React Native JS, Firebase, CSS",
    },
    {
      title: "App de Paises",
      duration: { fromDate: "2021", toDate: "2021" },
      link: <a href="https://github.com/cristiangaby112/PI-Countries-main">App de Paises</a>,
      description:
        `App de Paises que te permite ordenar y filtrar los datos
        traídos de una API y de una base de datos local también
        permite crear actividades propias y mostrar en actividades las
        mismas.`,
      subHeading: "Tecnologías utilizadas: React JS, Redux JS, PosgretSQL, Sequelize, Express, Node JS,  CSS",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"BOOTCAMP Henry +800 hs"}
        subHeading={"FULL STACK WEB DEVELOPER"}
        fromDate={"2021"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"Escuela Tecnica Nro. 17 D.E.13"}
        subHeading={"TECNICO ELECTRONICO"}
        fromDate={"2009"}
        toDate={"2014"}
      />
      {/* <ResumeHeading
        heading={"Federal University of Technology Akure"}
        subHeading={"BACHELOR OF TECHNOLOGY IN APPLIED GEOPHYSICS"}
        fromDate={"2010"}
        toDate={"2015"}
      /> */}
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Full Stack"}
        subHeading={"APP EVENTOS"}
        fromDate={"2021"}
        toDate={"2021"}
      />
      
            <div className="experience-description">
        <span className="resume-description-text">
        App Movil de eventos en el que se puede crear eventos al estar
        logueado y solo se puede crear un evento pagando atraves de
        mercado pago se puede ver los eventos disponible y guardarlo
        en tu prefil en favoritos.Buscar por titulo de evento todo esto
        usando Firebase y React native.
        </span>
      </div>
      <div className="experience-description">
        {/* <span className="resume-description-text">
        Buscar por titulo de evento todo esto
        usando Firebase y React native.{" "}
        </span> */}
        <br />
      </div>





      
      <ResumeHeading
        heading={"Full Stack"}
        subHeading={"APP DE PAISES"}
        fromDate={"2021"}
        toDate={"2021"}
      />
      {/* <div className="experience-description">
        <span className="resume-description-text">
          Helped in several capacities to the success of several projects 
        </span>
      </div> */}
      <div className="experience-description">
        <span className="resume-description-text">
        App de Paises que te permite ordenar y filtrar los datos
        ídos de una API y de una base de datos local también
        permite crear actividades propias y mostrar en actividades las
        mismas.{" "}
        </span>
        {/* <br />
        <span className="resume-description-text">
          -I was stretched and tasked with replicating User Interfaces produced by the UI/UX team.{" "}
        </span> */}
        <br />
          </div>
      </div>,
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            {/* <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div> */}
          </div>
        ))}
      </div>
      , /* PROJECTS */
      <div className="resume-screen-container" key="projects">
        {projectsDetails.map((projectsDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            fromDate={projectsDetails.duration.fromDate}
            toDate={projectsDetails.duration.toDate}
            link={projectsDetails.link}
          />
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Cursos de Nuevas Tecnologías"
          description="Me gusta aprender nuevas tecnologías y aprender de los demás"
        />
        <ResumeHeading
          heading="Gimnasio"
          description="Me gusta hacer ejercicios y estar en el gimnasio"
        />
        {/* <ResumeHeading
          heading="Gaming"
          description="I like to challenge my reflexes a lot while competing in football games, 
          pushing the rank and having interactive gaming sessions excites me well. Playing with colleagues
          also help build strong bond among ourselves"
        /> */}
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="ooopps..no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };



  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={'Resumen'} subHeading= {'Detalles de mi biografía formal'} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">

              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  )
}
