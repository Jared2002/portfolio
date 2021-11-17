import { Fragment } from "react/cjs/react.production.min";
import Main from "./main";
import Footer from "./footer";

const Pageprojects = () =>{
    const projects = [
      {
        name: "Mi portafolio.",
        id: 1,
        smallText: "Este proyecto esta hecho para mostrar mis proyectos y habilidades",
        explanation: "Al ser este mi primer proyecto serio, creí necesario adoptar un diseño básico pero bonito, utilizando colores claros y oscuros para hacer el cambio de tema, además del color amarillo para representar mi gusto a Javascript.",
        explanationTwo:"Planeo empezar a desarrollar en React, por lo que este es el proyecto elegido para empezar a prácticar. Las posibles nuevas actualizaciones a este proyecto son integrar un sistema de blog dentro de la página, además de mejorar y elevar la calidad del diseño.",
        technologies: ["HTML5", "CSS3", "ReactJS", "Figma"],
        img: "./assets/img/portfolio.png",
        url: "/index.html",
        github: "https://github.com/Jared2002/portfolio"
      },
      {
        name: "All- M",
        id: 2,
        smallText: "Este proyecto fue hecho utilizando la API pública de Marvel, creando una SPA con scroll infinito.",
        explanation: "La paleta de colores de este proyecto fue elegida por el logo de Marvel, ademas de la eleccion de poner los enlaces a mis redes sociales en la parte superior de la pantalla, pues al tener un scroll infinito, si se ponian al final nunca iban a poder clikearse. Además cuenta con un diseño responsivo",
        explanationTwo:"Las posibles nuevas actualizaciones a este proyecto contendran un espacio para la busqueda de personajes individuales, además de al hacer click en cada persona que te redirija a una pagina especial por personaje con la misma línea de diseño.",
        technologies: ["HTML5", "CSS3", "Javascript", "Figma"],
        img: "./assets/img/ex1.png",
        url: "https://jared2002.github.io/All-M/",
        github: "https://github.com/Jared2002/All-M/tree/master"
      }
    ]  
  
    return(
      <Fragment>
      <div className="decoration-container-top">
        <svg className="decoration-top" width="768" height="208" viewBox="0 0 768 208" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 207.36L21.12 184.32C42.88 161.28 85.12 115.2 128 96C170.88 76.8 213.12 84.48 256 103.68C298.88 122.88 341.12 153.6 384 149.76C426.88 145.92 469.12 107.52 512 92.16C554.88 76.8 597.12 84.48 640 72.96C682.88 61.44 725.12 30.72 746.88 15.36L768 0H746.88C725.12 0 682.88 0 640 0C597.12 0 554.88 0 512 0C469.12 0 426.88 0 384 0C341.12 0 298.88 0 256 0C213.12 0 170.88 0 128 0C85.12 0 42.88 0 21.12 0H0V207.36Z" fill="#FAB631"/>
        </svg>
      </div>
      <section className="main">
        <Main proj={projects}/>
      </section>
      <footer id="footer">
        <Footer />
        <div className="decoration-container-bottom">
          <svg className="decoration-bottom" width="768" height="173" viewBox="0 0 768 173" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M768 0.199997L746.88 19.4C725.12 38.6 682.88 77 640 93C597.12 109 554.88 102.6 512 86.6C469.12 70.6 426.88 45 384 48.2C341.12 51.4 298.88 83.4 256 96.2C213.12 109 170.88 102.6 128 112.2C85.12 121.8 42.88 147.4 21.12 160.2L0 173H21.12C42.88 173 85.12 173 128 173C170.88 173 213.12 173 256 173C298.88 173 341.12 173 384 173C426.88 173 469.12 173 512 173C554.88 173 597.12 173 640 173C682.88 173 725.12 173 746.88 173H768V0.199997Z" fill="#FAB631"/>
          </svg>
      </div>
      </footer>
    </Fragment>
    )
}

export default Pageprojects