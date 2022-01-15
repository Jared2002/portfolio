import React, {useState} from "react";
import { Fragment } from 'react/cjs/react.production.min';

const H2 = ({text,id}) => <h2 id={id}>{text}</h2>
const H3 = ({text, id}) => <h3 id={id}>{text}</h3>
const P = ({text}) => <p>{text}</p>
const Button = ({text, c, onClick, id}) => <button id={id} className={c} onClick={onClick}>{text}</button>
const Main = (proj) => {
    const proje = proj.proj;
    let status = [];
    proje.map(project => {
      status.push(project.open);
      return status;
    })
    const [textState, setTextState] = useState([]);

    const handleClickMore = (e) => {
      const id = e.target.id - 1;
      let newStatus = [...status]
      status[id] === false 
        ? newStatus[id] = true
        : newStatus[id] = false
      setTextState(newStatus)
    }

    return(
      <div>
        <H2 text="Estos son los proyectos que he realizado." />
        {proje.map(project =>{
          const rID = project.id - 1;
          return(
            <Fragment key={project.id}>
              <div className="project-container" key={project.id}>
                <div className="description-container">
                  <H3 text={project.name} />
                  <P text={project.smallText}/>
                  <P text={project.explanation}/>
                </div>
                <div className="img-project-container">
                  <img className="project-image" src={project.img} alt={project.name}></img>
                </div>
                {textState[rID] === true && 
                <div id={project.id} className="project-container-hide" key={project.id + ".1"}>
                  <P text={project.explanationTwo}/>
                  <P text={project.explanation}/>
                  <div className="tech-used-container">
                    {project.technologies.map(tech =>{
                      return(
                        <div className="tech-container" key={tech}>{tech}</div>
                      )
                    })}
                  </div>
                  <div className="anchor-container">
                    <a href={project.url} target="_blank" rel="noreferrer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.46014 16.8191C2.23856 16.5893 2.1867 16.2444 2.33091 15.9596L3.03241 14.5743C4.69268 11.2954 8.05563 9.2288 11.7308 9.2288H12.0757C12.1009 8.68242 12.1334 8.1363 12.1731 7.59057L12.241 6.65993C12.2961 5.90311 13.14 5.48004 13.7795 5.88863C15.8771 7.22899 17.7007 8.95608 19.153 10.9778L19.6091 11.6128C19.797 11.8742 19.797 12.2264 19.6091 12.4879L19.153 13.1228C17.7007 15.1446 15.8771 16.8717 13.7795 18.212C13.14 18.6206 12.2961 18.1976 12.241 17.4407L12.1731 16.5101C12.1256 15.8584 12.0886 15.2061 12.0619 14.5535C9.91207 14.4914 7.76486 14.9253 5.7915 15.8361L3.31431 16.9794C3.02447 17.1132 2.68173 17.0488 2.46014 16.8191ZM4.67839 14.6978L5.16291 14.4742C7.57405 13.3613 10.2196 12.8915 12.8447 13.0932C13.227 13.1225 13.5256 13.4355 13.5369 13.8188C13.5624 14.6802 13.6065 15.5411 13.6692 16.401L13.6746 16.4755C15.3181 15.3138 16.7583 13.8855 17.9348 12.2477L18.0766 12.0503L17.9348 11.853C16.7583 10.2152 15.3181 8.78683 13.6746 7.62517L13.6692 7.69962C13.6132 8.46723 13.5721 9.23565 13.5458 10.0044C13.532 10.4084 13.2005 10.7288 12.7962 10.7288L11.7308 10.7288C8.83352 10.7288 6.16555 12.2467 4.67839 14.6978Z" fill="black"/>
                      </svg>
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.75C5.64625 0.75 0.5 5.89625 0.5 12.25C0.5 17.3387 3.79187 21.6369 8.36312 23.1606C8.93812 23.2612 9.15375 22.9162 9.15375 22.6144C9.15375 22.3412 9.13938 21.4356 9.13938 20.4725C6.25 21.0044 5.5025 19.7681 5.2725 19.1212C5.14313 18.7906 4.5825 17.77 4.09375 17.4969C3.69125 17.2812 3.11625 16.7494 4.07938 16.735C4.985 16.7206 5.63187 17.5687 5.8475 17.9137C6.8825 19.6531 8.53563 19.1644 9.19688 18.8625C9.2975 18.115 9.59938 17.6119 9.93 17.3244C7.37125 17.0369 4.6975 16.045 4.6975 11.6462C4.6975 10.3956 5.14312 9.36062 5.87625 8.55562C5.76125 8.26812 5.35875 7.08937 5.99125 5.50812C5.99125 5.50812 6.95438 5.20625 9.15375 6.68687C10.0738 6.42812 11.0513 6.29875 12.0288 6.29875C13.0063 6.29875 13.9838 6.42812 14.9038 6.68687C17.1031 5.19188 18.0662 5.50812 18.0662 5.50812C18.6987 7.08937 18.2962 8.26812 18.1812 8.55562C18.9144 9.36062 19.36 10.3812 19.36 11.6462C19.36 16.0594 16.6719 17.0369 14.1131 17.3244C14.53 17.6837 14.8894 18.3737 14.8894 19.4519C14.8894 20.99 14.875 22.2262 14.875 22.6144C14.875 22.9162 15.0906 23.2756 15.6656 23.1606C20.2081 21.6369 23.5 17.3244 23.5 12.25C23.5 5.89625 18.3538 0.75 12 0.75V0.75Z" fill="#F4F5F7"/>
                      </svg>
                    </a>
                  </div>
                </div>}
              </div>
              <Button id={project.id} text={textState[rID] === true ? 'Ver menos' : 'Ver más'} c="button more" onClick={handleClickMore}/>
            </Fragment>
          )
        })}
        <H2 id="view-design" text="Puedes ver los diseños completos en mi Instagram o en mi perfil de Behance."/>
      </div>
    )
}

export default Main