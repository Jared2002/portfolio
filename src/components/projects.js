import React from "react";
import { Link } from "react-router-dom";

const H2 = ({text,id}) => <h2 id={id}>{text}</h2>
const Img = ({src, c}) => <img className={c} src={src} alt="hola"></img>
const Button = ({text, c, onClick }) => <button className={c} onClick={onClick}><Link to="/portfolio/projects">{text}</Link></button>
const Projects = () =>{
    return(
      <div className="projects">
        <H2 id="dark" text="Proyectos destacados"/>
        <div className="projects-image-container">
          <Img c="project-image-p1" src={process.env.PUBLIC_URL + "/assets/img/ex1.png"}/>
          <Img c="project-image-p2" src={process.env.PUBLIC_URL + "/assets/img/portfolio.png"}/>
          <Img c="project-image-p3" src={process.env.PUBLIC_URL + "/assets/img/reactPokedex.png"}/>
        </div>
        <Button text="Ver todos" c="button more"/>
      </div>
    )
}

export default Projects