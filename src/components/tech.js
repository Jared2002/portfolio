import {React, useState} from "react";
import { Fragment } from "react/cjs/react.production.min";

const H2 = ({text,id}) => <h2 id={id}>{text}</h2>
const Img = ({src, c}) => <img className={c} src={src} alt="hola"></img>
const Button = ({text, c, onClick, id}) => <button id={id} className={c} onClick={onClick}>{text}</button>
const Tech = () =>{
    const [textState, setTextState] = useState("Ver más");
  
    const handleClickMore = () =>{
      const pMore = document.querySelector(".pOct");
      pMore.classList.toggle("none");
      let newTextState = textState
      if (newTextState === "Ver más"){
        newTextState = "Ver menos"
        setTextState(newTextState)
      } else{
        newTextState = "Ver más"
        setTextState(newTextState)
      }
    }
    return (
      <Fragment>
        <H2 text="Tecnologías"/>
        <div className="tech-image-container">
          <Img c="tech-image-1" src={process.env.PUBLIC_URL + "/assets/icons/html.svg"}/>
          <Img c="tech-image-2" src={process.env.PUBLIC_URL + "/assets/icons/css.svg"}/>
          <Img c="tech-image-3" src={process.env.PUBLIC_URL + "/assets/icons/js.svg"}/>
          <Img c="tech-image-4" src={process.env.PUBLIC_URL + "/assets/icons/react.svg"}/>
        </div>
        <div className="pOct none tech-image-container">
          <Img c="tech-image-1" src={process.env.PUBLIC_URL + "/assets/icons/sass.svg"}/>
          <Img c="tech-image-2" src={process.env.PUBLIC_URL + "/assets/icons/webpack.svg"}/>
        </div>
        <Button id="dark" text={textState} c="button more" onClick={handleClickMore}/>
      </Fragment>
    )
}

export default Tech