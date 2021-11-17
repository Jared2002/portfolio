import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import H1 from './components/h1';
import P from './components/paragraph';
import Home from './components/home';
import Pageprojects from './components/pageprojects';

const App = ({def}) => {
  const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);

  useEffect(() => {
    document.getElementsByTagName("HTML")[0].setAttribute("data-theme", localStorage.getItem("theme"));
  }, [checked]);

  const handleThemeChange = () => {
    if (checked === false) {
      const theme = document.querySelector("#theme");
      theme.classList.add("active");
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      const theme = document.querySelector("#theme");
      theme.classList.remove("active");
      localStorage.setItem("theme", "light");
      setChecked(false);
    }
  };

  const handleShow = () =>{
    const nav = document.querySelector(".menu-hidden");
    nav.classList.toggle("none");
  }
  const handleHide = () => {
    const nav = document.querySelector(".menu-hidden");
    nav.classList.toggle("none");
  }

  return(
    <Fragment>
    <div className="header">
      <a href="./index.html"><H1 id="dark" text= "Jared Romero"/></a>
      <button className="menuButton" onClick={handleShow}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3334 15.9999C26.3334 15.4476 25.8856 14.9999 25.3334 14.9999H6.66669C6.1144 14.9999 5.66669 15.4476 5.66669 15.9999C5.66669 16.5522 6.1144 16.9999 6.66669 16.9999H25.3334C25.8856 16.9999 26.3334 16.5522 26.3334 15.9999Z" fill="#082032"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3334 9.33325C26.3334 8.78097 25.8856 8.33325 25.3334 8.33325H6.66669C6.1144 8.33325 5.66669 8.78097 5.66669 9.33325C5.66669 9.88554 6.1144 10.3333 6.66669 10.3333H25.3334C25.8856 10.3333 26.3334 9.88554 26.3334 9.33325Z" fill="#082032"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3334 22.6666C26.3334 22.1143 25.8856 21.6666 25.3334 21.6666H6.66669C6.1144 21.6666 5.66669 22.1143 5.66669 22.6666C5.66669 23.2189 6.1144 23.6666 6.66669 23.6666H25.3334C25.8856 23.6666 26.3334 23.2189 26.3334 22.6666Z" fill="#082032"/>
        </svg>
      </button>
      <nav className="menu-hidden none" id="menuButton">
          <a href="./index.html"><P text="Home"/></a>
          <a href="https://www.youtube.com"><P id="dark" text="Blog"/></a>
          <a href="./projects"><P text="Proyectos"/></a>
          <div className="check-container">
          <button defaultValue={def} onClick={handleThemeChange} className="theme" id="theme">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1.5625C15.5178 1.5625 15.9375 1.98223 15.9375 2.5V3.75C15.9375 4.26777 15.5178 4.6875 15 4.6875C14.4822 4.6875 14.0625 4.26777 14.0625 3.75V2.5C14.0625 1.98223 14.4822 1.5625 15 1.5625Z" fill="#F4F5F7"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.8125 15C7.8125 11.0305 11.0305 7.8125 15 7.8125C18.9695 7.8125 22.1875 11.0305 22.1875 15C22.1875 18.9695 18.9695 22.1875 15 22.1875C11.0305 22.1875 7.8125 18.9695 7.8125 15ZM15 9.6875C12.066 9.6875 9.6875 12.066 9.6875 15C9.6875 17.934 12.066 20.3125 15 20.3125C17.934 20.3125 20.3125 17.934 20.3125 15C20.3125 12.066 17.934 9.6875 15 9.6875Z" fill="#F4F5F7"/>
                <path d="M6.8241 5.49828C6.45798 5.13216 5.86439 5.13216 5.49827 5.49828C5.13215 5.8644 5.13215 6.45799 5.49827 6.82411L6.38215 7.70799C6.74827 8.07411 7.34186 8.07411 7.70798 7.70799C8.0741 7.34187 8.0741 6.74828 7.70798 6.38216L6.8241 5.49828Z" fill="#F4F5F7"/>
                <path d="M28.4375 15C28.4375 15.5178 28.0178 15.9375 27.5 15.9375H26.25C25.7322 15.9375 25.3125 15.5178 25.3125 15C25.3125 14.4822 25.7322 14.0625 26.25 14.0625H27.5C28.0178 14.0625 28.4375 14.4822 28.4375 15Z" fill="#F4F5F7"/>
                <path d="M24.5017 6.8241C24.8678 6.45798 24.8678 5.86439 24.5017 5.49827C24.1356 5.13215 23.542 5.13215 23.1759 5.49827L22.292 6.38215C21.9259 6.74827 21.9259 7.34186 22.292 7.70798C22.6581 8.0741 23.2517 8.0741 23.6178 7.70798L24.5017 6.8241Z" fill="#F4F5F7"/>
                <path d="M15 25.3125C15.5178 25.3125 15.9375 25.7322 15.9375 26.25V27.5C15.9375 28.0178 15.5178 28.4375 15 28.4375C14.4822 28.4375 14.0625 28.0178 14.0625 27.5V26.25C14.0625 25.7322 14.4822 25.3125 15 25.3125Z" fill="#F4F5F7"/>
                <path d="M23.6179 22.292C23.2518 21.9259 22.6582 21.9259 22.2921 22.292C21.926 22.6581 21.926 23.2517 22.2921 23.6179L23.176 24.5017C23.5421 24.8679 24.1357 24.8679 24.5018 24.5017C24.8679 24.1356 24.8679 23.542 24.5018 23.1759L23.6179 22.292Z" fill="#F4F5F7"/>
                <path d="M4.6875 15C4.6875 15.5178 4.26777 15.9375 3.75 15.9375H2.5C1.98223 15.9375 1.5625 15.5178 1.5625 15C1.5625 14.4822 1.98223 14.0625 2.5 14.0625H3.75C4.26777 14.0625 4.6875 14.4822 4.6875 15Z" fill="#F4F5F7"/>
                <path d="M7.7079 23.6178C8.07401 23.2517 8.07401 22.6581 7.7079 22.292C7.34178 21.9259 6.74819 21.9259 6.38207 22.292L5.49819 23.1759C5.13207 23.542 5.13207 24.1356 5.49819 24.5017C5.8643 24.8678 6.4579 24.8678 6.82401 24.5017L7.7079 23.6178Z" fill="#F4F5F7"/>
            </svg> 
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3578 5.9599C9.65243 6.2893 5.9375 10.2108 5.9375 15C5.9375 20.0051 9.99492 24.0625 15 24.0625C19.0098 24.0625 22.4121 21.4577 23.606 17.8483C22.6872 18.2279 21.6801 18.4375 20.625 18.4375C16.3103 18.4375 12.8125 14.9397 12.8125 10.625C12.8125 8.87607 13.3876 7.26136 14.3578 5.9599ZM4.0625 15C4.0625 8.95938 8.95938 4.0625 15 4.0625C15.562 4.0625 16.1147 4.10497 16.6549 4.18702C17.0286 4.24379 17.3317 4.51942 17.4236 4.88608C17.5154 5.25274 17.3781 5.63869 17.0753 5.86493C15.624 6.94919 14.6875 8.6776 14.6875 10.625C14.6875 13.9042 17.3458 16.5625 20.625 16.5625C22.0428 16.5625 23.3423 16.0667 24.3632 15.2383C24.6565 15.0002 25.0641 14.9615 25.3971 15.1401C25.73 15.3187 25.9232 15.6797 25.8871 16.0558C25.3554 21.6015 20.6846 25.9375 15 25.9375C8.95938 25.9375 4.0625 21.0406 4.0625 15Z" fill="#F4F5F7"/>
            </svg>    
          </button>        
        </div>
        <div>
          <button className="cancel" id="calcelButton" onClick={handleHide}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="cancel" d="M11.2859 20.7138L20.714 11.2858" stroke="#082032"  stroke-width="1.5" stroke-linecap="round"/>
              <path id="cancel" d="M11.2859 11.2861L20.7139 20.7142" stroke="#082032" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </nav>
    </div>
    
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/projects'>
              <Pageprojects/>
            </Route>
          </Switch>
    </Fragment>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
    , document.getElementById('root'));