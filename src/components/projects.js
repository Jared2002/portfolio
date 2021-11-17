import React from "react";

const H2 = ({text,id}) => <h2 id={id}>{text}</h2>
const Img = ({src, c}) => <img className={c} src={src} alt="hola"></img>
const Button = ({text, c, onClick }) => <button className={c} onClick={onClick}><a href="/projects">{text}</a></button>
const Projects = () =>{
    return(
      <div className="projects">
        <H2 id="dark" text="Proyectos destacados"/>
        <div className="projects-image-container">
          <Img c="project-image-p1" src="./assets/img/ex1.png"/>
          <Img c="project-image-p2" src="./assets/img/portfolio.png"/>
          <Img c="project-image-p3" src="./assets/img/ex2.jpg"/>
        </div>
        <Button text="Ver todos" c="button more"/>
      </div>
    )
}

export default Projects