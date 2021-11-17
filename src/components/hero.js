import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";

const H2 = ({text,id}) => <h2 id={id}>{text}</h2>
const Img = ({src, c}) => <img className={c} src={src} alt="hola"></img>
const P = ({text, c, id}) => <p id={id} className={c}>{text}</p>
const Button = ({text, c, onClick }) => <button className={c} onClick={onClick}><Link to="/portfolio/projects">{text}</Link></button>
const Hero = () =>{
    return (
      <Fragment>
        <div className="main-face--img-container">
          <Img c="main-face--img" src={process.env.PUBLIC_URL + "/assets/img/imgPrincipal.png"}/>
          <div className="deg"></div>
        </div>
        <div className="hero">
          <H2 id="dark" text="Liderando el diseño y desarrollo web" />
          <P id="dark" text="Hola, soy desarrollador frontend, especializado en diseño de interfaces. Busco una oportunidad laboral en el campo frontend." />
          <Button id="dark" text="Ver Proyectos" c="button"/>
        </div>
      </Fragment>
    )
}

export default Hero