(this.webpackJsonpportafolio=this.webpackJsonpportafolio||[]).push([[0],{21:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var s=c(9),n=c(1),r=c(16),i=c.n(r),o=(c(21),c(4)),a=c(11),l=c(2),d=c(0),C=function(e){var t=e.text,c=e.id;return Object(d.jsx)("h1",{id:c,children:t})},j=function(e){var t=e.text,c=e.c,s=e.id;return Object(d.jsx)("p",{id:s,className:c,children:t})},h=function(e){var t=e.text,c=e.id;return Object(d.jsx)("h2",{id:c,children:t})},x=function(e){var t=e.src,c=e.c;return Object(d.jsx)("img",{className:c,src:t,alt:"hola"})},m=function(e){var t=e.text,c=e.c,s=e.id;return Object(d.jsx)("p",{id:s,className:c,children:t})},b=function(e){var t=e.text,c=e.c,s=e.onClick;return Object(d.jsx)("button",{className:c,onClick:s,children:Object(d.jsx)("a",{href:"./projects",children:t})})},u=function(){return Object(d.jsxs)(o.Fragment,{children:[Object(d.jsxs)("div",{className:"main-face--img-container",children:[Object(d.jsx)(x,{c:"main-face--img",src:"/portfolio/assets/img/imgPrincipal.png"}),Object(d.jsx)("div",{className:"deg"})]}),Object(d.jsxs)("div",{className:"hero",children:[Object(d.jsx)(h,{id:"dark",text:"Liderando el dise\xf1o y desarrollo web"}),Object(d.jsx)(m,{id:"dark",text:"Hola, soy desarrollador frontend, especializado en dise\xf1o de interfaces. Busco una oportunidad laboral en el campo frontend."}),Object(d.jsx)(b,{id:"dark",text:"Ver Proyectos",c:"button"})]})]})},p=function(e){var t=e.text,c=e.id;return Object(d.jsx)("h2",{id:c,children:t})},O=function(e){var t=e.src,c=e.c;return Object(d.jsx)("img",{className:c,src:t,alt:"hola"})},f=function(e){var t=e.text,c=e.c,s=e.onClick;return Object(d.jsx)("button",{className:c,onClick:s,children:Object(d.jsx)("a",{href:"./projects",children:t})})},v=function(){return Object(d.jsxs)("div",{className:"projects",children:[Object(d.jsx)(p,{id:"dark",text:"Proyectos destacados"}),Object(d.jsxs)("div",{className:"projects-image-container",children:[Object(d.jsx)(O,{c:"project-image-p1",src:"/portfolio/assets/img/ex1.png"}),Object(d.jsx)(O,{c:"project-image-p2",src:"/portfolio/assets/img/portfolio.png"}),Object(d.jsx)(O,{c:"project-image-p3",src:"/portfolio/assets/img/ex2.jpg"})]}),Object(d.jsx)(f,{text:"Ver todos",c:"button more"})]})},g=function(e){var t=e.text,c=e.id;return Object(d.jsx)("h2",{id:c,children:t})},w=function(e){var t=e.src,c=e.c;return Object(d.jsx)("img",{className:c,src:t,alt:"hola"})},L=function(e){var t=e.text,c=e.c,s=e.id;return Object(d.jsx)("p",{id:s,className:c,children:t})},M=function(e){var t=e.text,c=e.c,s=e.onClick,n=e.id;return Object(d.jsx)("button",{id:n,className:c,onClick:s,children:t})},N=function(){var e=Object(n.useState)("Ver m\xe1s"),t=Object(s.a)(e,2),c=t[0],r=t[1];return Object(d.jsxs)(o.Fragment,{children:[Object(d.jsx)(g,{text:"Tecnolog\xedas"}),Object(d.jsxs)("div",{className:"tech-image-container",children:[Object(d.jsx)(w,{c:"tech-image-1",src:"/portfolio/assets/icons/html.svg"}),Object(d.jsx)(w,{c:"tech-image-2",src:"/portfolio/assets/icons/css.svg"}),Object(d.jsx)(w,{c:"tech-image-3",src:"/portfolio/assets/icons/js.svg"}),Object(d.jsx)(w,{c:"tech-image-4",src:"/portfolio/assets/icons/react.svg"})]}),Object(d.jsx)(L,{id:"dark",c:"pOct none",text:"Por el momento estas son mis \xfanicas tecnolog\xedas :("}),Object(d.jsx)(M,{id:"dark",text:c,c:"button more",onClick:function(){document.querySelector(".pOct").classList.toggle("none");var e=c;r(e="Ver m\xe1s"===e?"Ver menos":"Ver m\xe1s")}})]})},H=function(e){var t=e.text,c=e.id;return Object(d.jsx)("h2",{id:c,children:t})},F=function(e){var t=e.text,c=e.c,s=e.id;return Object(d.jsx)("p",{id:s,className:c,children:t})},k=function(){return document.addEventListener("DOMContentLoaded",(function(e){document.querySelectorAll(".contact-form [required]").forEach((function(e){var t=document.createElement("span");t.id=e.name,t.textContent=e.title,t.classList.add("contact-form-error","none"),e.insertAdjacentElement("afterend",t),document.addEventListener("keyup",(function(e){if(e.target.matches(".contact-form [required]")){var t=e.target,c=t.pattern||t.dataset.pattern;if(c&&""!==t.value)return new RegExp(c).exec(t.value)?document.getElementById(t.name).classList.add("none"):document.getElementById(t.name).classList.remove("none");if(!c)return""===t.value?document.getElementById(t.name).classList.remove("none"):document.getElementById(t.name).classList.add("none")}}))}))})),Object(d.jsxs)(o.Fragment,{children:[Object(d.jsxs)("div",{className:"container-footer",children:[Object(d.jsxs)("div",{className:"footer-contact",children:[Object(d.jsx)(H,{text:"Contacto"}),Object(d.jsxs)("form",{className:"contact-form",action:"https://formsubmit.co/jared.romeroalvirde@gmail.com",target:"_blank",method:"POST",children:[Object(d.jsx)("input",{type:"text",placeholder:"Nombre",className:"normal contact-form",required:!0,name:"nombre",title:"Solo acepta letras y espacios en blanco",pattern:"^[A-Za-z\xd1\xf1\xc1\xe1\xc9\xe9\xcd\xed\xd3\xf3\xda\xfa\xdc\xfc ]+$"}),Object(d.jsx)("input",{type:"email",placeholder:"Correo",className:"normal contact-form",required:!0,name:"correo",title:"Correo incorrecto",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"}),Object(d.jsx)("textarea",{className:"large",placeholder:"Mensaje",cols:"50",rows:"5",required:!0,name:"mensaje",title:"Tu comentario no debe exceder los 255 caracteres","data-pattern":"^.{1,255}$"}),Object(d.jsx)("input",{type:"submit",value:"Enviar",placeholder:"Enviar",className:"submit"}),Object(d.jsx)("div",{className:"contact-form-response none",children:Object(d.jsx)(F,{id:"enviado",text:"Los datos se han enviado"})})]})]}),Object(d.jsxs)("div",{className:"footer-social",children:[Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/jaredromeroa/",children:Object(d.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M16 7.00005C16 6.44776 16.4477 6.00005 17 6.00005C17.5523 6.00005 18 6.44776 18 7.00005C18 7.55233 17.5523 8.00005 17 8.00005C16.4477 8.00005 16 7.55233 16 7.00005Z",fill:"#082032"}),Object(d.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 7.25005C9.37665 7.25005 7.25 9.37669 7.25 12C7.25 14.6234 9.37665 16.75 12 16.75C14.6234 16.75 16.75 14.6234 16.75 12C16.75 9.37669 14.6234 7.25005 12 7.25005ZM8.75 12C8.75 10.2051 10.2051 8.75005 12 8.75005C13.7949 8.75005 15.25 10.2051 15.25 12C15.25 13.795 13.7949 15.25 12 15.25C10.2051 15.25 8.75 13.795 8.75 12Z",fill:"#082032"}),Object(d.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.2583 2.83306C13.7917 2.44562 10.2083 2.44562 6.74177 2.83306C4.72971 3.05794 3.10538 4.64295 2.86883 6.66548C2.45429 10.2098 2.45429 13.7903 2.86883 17.3346C3.10538 19.3571 4.72971 20.9422 6.74177 21.167C10.2083 21.5545 13.7917 21.5545 17.2583 21.167C19.2703 20.9422 20.8946 19.3571 21.1312 17.3346C21.5457 13.7903 21.5457 10.2098 21.1312 6.66548C20.8946 4.64295 19.2703 3.05794 17.2583 2.83306ZM6.90838 4.32378C10.2642 3.94871 13.7358 3.94871 17.0916 4.32378C18.4218 4.47244 19.4872 5.52205 19.6414 6.83973C20.0424 10.2683 20.0424 13.7318 19.6414 17.1604C19.4872 18.478 18.4218 19.5277 17.0916 19.6763C13.7358 20.0514 10.2642 20.0514 6.90838 19.6763C5.57827 19.5277 4.51278 18.478 4.35867 17.1604C3.95767 13.7318 3.95767 10.2683 4.35867 6.83973C4.51278 5.52205 5.57827 4.47244 6.90838 4.32378Z",fill:"#082032"})]})}),Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/jared-jair-romero-449696223/",children:Object(d.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5 1.25C3.48122 1.25 2.25 2.48122 2.25 4C2.25 5.51878 3.48122 6.75 5 6.75C6.51878 6.75 7.75 5.51878 7.75 4C7.75 2.48122 6.51878 1.25 5 1.25ZM3.75 4C3.75 3.30964 4.30964 2.75 5 2.75C5.69036 2.75 6.25 3.30964 6.25 4C6.25 4.69036 5.69036 5.25 5 5.25C4.30964 5.25 3.75 4.69036 3.75 4Z",fill:"#082032"}),Object(d.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.25 8C2.25 7.58579 2.58579 7.25 3 7.25H7C7.41421 7.25 7.75 7.58579 7.75 8V21C7.75 21.4142 7.41421 21.75 7 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V8ZM3.75 8.75V20.25H6.25V8.75H3.75Z",fill:"#082032"}),Object(d.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.25 8C9.25 7.58579 9.58579 7.25 10 7.25H14C14.4142 7.25 14.75 7.58579 14.75 8V8.43402L15.1853 8.24748C15.9336 7.92676 16.7339 7.72565 17.5433 7.65207C20.3182 7.3998 22.75 9.58038 22.75 12.3802V21C22.75 21.4142 22.4142 21.75 22 21.75H18C17.5858 21.75 17.25 21.4142 17.25 21V14C17.25 13.6685 17.1183 13.3505 16.8839 13.1161C16.6495 12.8817 16.3315 12.75 16 12.75C15.6685 12.75 15.3505 12.8817 15.1161 13.1161C14.8817 13.3505 14.75 13.6685 14.75 14V21C14.75 21.4142 14.4142 21.75 14 21.75H10C9.58579 21.75 9.25 21.4142 9.25 21V8ZM10.75 8.75V20.25H13.25V14C13.25 13.2707 13.5397 12.5712 14.0555 12.0555C14.5712 11.5397 15.2707 11.25 16 11.25C16.7293 11.25 17.4288 11.5397 17.9445 12.0555C18.4603 12.5712 18.75 13.2707 18.75 14V20.25H21.25V12.3802C21.25 10.4759 19.589 8.97227 17.6791 9.14591C17.025 9.20536 16.3784 9.36807 15.7762 9.6262L14.2954 10.2608C14.0637 10.3601 13.7976 10.3363 13.5871 10.1976C13.3767 10.0588 13.25 9.82354 13.25 9.57143V8.75H10.75Z",fill:"#082032"})]})}),Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.behance.net/Jared_Romero",children:Object(d.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M4.76226 8.38947C4.6518 8.38947 4.56226 8.47901 4.56226 8.58947V10.9653C4.56226 11.0757 4.6518 11.1653 4.76226 11.1653H7.51599C8.28251 11.1653 8.90389 10.5439 8.90389 9.77737C8.90389 9.01085 8.28251 8.38947 7.51599 8.38947H4.76226Z",fill:"#082032"}),Object(d.jsx)("path",{d:"M4.76226 12.9446C4.6518 12.9446 4.56226 13.0342 4.56226 13.1446V16.0187C4.56226 16.1291 4.6518 16.2187 4.76226 16.2187H7.69393C8.59802 16.2187 9.33094 15.4857 9.33094 14.5817C9.33094 13.6776 8.59802 12.9446 7.69393 12.9446H4.76226Z",fill:"#082032"}),Object(d.jsx)("path",{d:"M16.1369 13.087C16.0882 13.087 16.0488 13.0475 16.0488 12.9989C16.0488 12.0255 16.8378 11.2364 17.8112 11.2364H18.2009C19.1743 11.2364 19.9634 12.0255 19.9634 12.9989C19.9634 13.0475 19.9239 13.087 19.8752 13.087H16.1369Z",fill:"#082032"}),Object(d.jsx)("path",{fillRule:"evenodd","clip-rule":"evenodd",d:"M12.5704 11.9933C12.5065 11.9126 12.4398 11.8345 12.3707 11.7589C12.8031 11.0756 13.0228 10.2795 13.0023 9.47155C13.0203 8.7769 12.8812 8.08694 12.5952 7.45318C12.3164 6.82308 11.8706 6.28115 11.3062 5.8859L11.2949 5.87806C10.7624 5.51248 10.1588 5.26365 9.52366 5.14772C8.91381 5.02154 8.29211 4.96138 7.66934 4.96831H2C1.17157 4.96831 0.5 5.63988 0.5 6.46831V18.4251C0.5 19.2535 1.17157 19.9251 2 19.9251H7.80064C8.45751 19.9255 9.11176 19.8423 9.74759 19.6774C10.4012 19.5083 11.0205 19.227 11.5778 18.8459L11.5852 18.8408C12.1414 18.4556 12.6024 17.9497 12.9343 17.3619C13.1477 17.7708 13.4102 18.1534 13.7168 18.501C13.7254 18.5108 13.7341 18.5204 13.743 18.53C14.2815 19.1093 14.943 19.5608 15.6787 19.8515L15.6975 19.8588C16.4532 20.1458 17.2561 20.2882 18.0643 20.279C19.2269 20.3082 20.3738 20.0017 21.3666 19.3956C21.3957 19.3779 21.4242 19.3591 21.452 19.3394C22.4989 18.5979 23.2537 17.514 23.5843 16.2748C23.6497 16.0295 23.651 15.7752 23.5928 15.5348C23.7051 15.3424 23.776 15.1222 23.7928 14.886C23.8493 14.0935 23.7814 13.297 23.5915 12.5254L23.5901 12.5197C23.3965 11.7461 23.0578 11.0162 22.5921 10.3686L22.5765 10.3472C22.0834 9.6865 21.4469 9.14608 20.715 8.76621C20.7053 8.76114 20.6955 8.75618 20.6856 8.75133C19.8867 8.35874 19.0063 8.16002 18.1163 8.17103C17.3027 8.16732 16.4964 8.32493 15.7442 8.63484L15.7345 8.63885C15.0271 8.93611 14.3857 9.37089 13.8479 9.91808L13.8361 9.93025C13.2964 10.492 12.8781 11.1588 12.6077 11.8892L12.6067 11.892C12.5943 11.9257 12.5822 11.9594 12.5704 11.9933ZM9.82757 11.9239C10.4027 12.0626 10.918 12.3758 11.3046 12.8168C11.371 12.8925 11.4336 12.972 11.492 13.055C11.52 13.0976 11.547 13.1407 11.573 13.1844C11.8903 13.7187 12.0508 14.3327 12.0341 14.9559C12.0504 15.4999 11.9294 16.0392 11.6822 16.5241C11.4589 16.9578 11.1322 17.3299 10.7311 17.6077C10.317 17.8908 9.85681 18.0999 9.37104 18.2255C9.14132 18.285 8.90861 18.3314 8.67407 18.3644C8.38536 18.405 8.09386 18.4253 7.80172 18.4251H2V6.46831H7.67808C8.20201 6.4619 8.72507 6.5129 9.23789 6.62038C9.67122 6.69705 10.0831 6.86558 10.4458 7.11462C10.7879 7.35416 11.0576 7.68292 11.2257 8.06508C11.4257 8.5062 11.5202 8.98782 11.5015 9.47176C11.5207 9.94992 11.4066 10.423 11.1736 10.8387C11.148 10.8843 11.121 10.9293 11.0925 10.9735C10.7798 11.3941 10.3116 11.7225 9.82757 11.9239ZM16.0018 14.9935C15.9985 14.9224 15.9985 14.851 16.0018 14.7793H22.2966C22.3057 14.6525 22.3108 14.5255 22.3119 14.3986C22.3133 14.2355 22.3082 14.0725 22.2966 13.91C22.2816 13.6986 22.2555 13.4881 22.2185 13.2793C22.1951 13.1468 22.1672 13.0149 22.135 12.8839C21.9875 12.2944 21.7294 11.7381 21.3743 11.2443C21.0169 10.7653 20.5552 10.3733 20.024 10.0976C19.433 9.80713 18.7811 9.66094 18.1223 9.67109C17.5026 9.66656 16.8883 9.7858 16.3156 10.0217C15.7912 10.2421 15.316 10.5643 14.9178 10.9695C14.5207 11.3828 14.2132 11.8731 14.0144 12.41C13.8012 12.9896 13.6948 13.6029 13.7006 14.2202C13.6909 14.8462 13.7939 15.469 14.0049 16.0587C14.1842 16.5928 14.4687 17.0858 14.8417 17.5088C15.2277 17.924 15.702 18.2478 16.23 18.4565C16.8187 18.68 17.4448 18.7894 18.0747 18.7787C18.9585 18.8062 19.831 18.5756 20.585 18.1153C20.8788 17.9073 21.1408 17.6623 21.3656 17.3882C21.6376 17.0566 21.8551 16.6823 22.0087 16.2793C22.0573 16.1517 22.0995 16.0211 22.135 15.8882H20.0335C19.9799 16.0301 19.9047 16.1619 19.8115 16.2793C19.7093 16.4081 19.5852 16.5197 19.444 16.6084C19.0783 16.85 18.6464 16.9725 18.2078 16.9591C17.9176 16.9892 17.6242 16.9594 17.346 16.8713C17.0679 16.7832 16.8109 16.6389 16.5913 16.4473C16.5434 16.3932 16.4982 16.3371 16.4558 16.2793C16.1809 15.9046 16.0229 15.4573 16.0018 14.9935Z",fill:"#082032"}),Object(d.jsx)("path",{d:"M20.4466 6.39587C20.4443 6.17656 20.2659 5.99994 20.0466 5.99994H16.0217C15.8008 5.99994 15.6217 6.17903 15.6217 6.39994V7.47122C15.6217 7.69213 15.8008 7.87122 16.0217 7.87122H20.0575C20.28 7.87122 20.4597 7.68965 20.4575 7.46716L20.4466 6.39587Z",fill:"#082032"})]})}),Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://twitter.com/JJairRomero",children:Object(d.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{fillRule:"evenodd","clip-rule":"evenodd",d:"M15.0215 3.34352C15.5299 3.25644 16.0992 3.22736 16.6349 3.31801C17.5918 3.47989 18.4756 3.92462 19.1743 4.59138C19.631 4.60171 20.0798 4.51173 20.4769 4.38347C20.8131 4.27492 21.097 4.14385 21.2959 4.04021C21.3948 3.98868 21.4713 3.94472 21.5209 3.91496C21.5457 3.90011 21.5638 3.88886 21.5745 3.88207L21.584 3.87601C21.8808 3.67828 22.276 3.71677 22.5289 3.96827C22.7818 4.21984 22.8226 4.61476 22.6263 4.91266C22.4186 5.22795 22.1303 5.79002 21.8072 6.41978C21.7564 6.5188 21.7047 6.61949 21.6524 6.72116C21.4671 7.08113 21.2771 7.44494 21.1 7.75707C20.9888 7.95306 20.8699 8.15204 20.75 8.32398V8.59775C20.7576 9.60338 20.6423 10.6038 20.4082 11.577C20.2609 12.1893 20.0667 12.7909 19.8264 13.3763C19.204 14.893 18.2856 16.2704 17.1249 17.4282C15.9641 18.5859 14.5844 19.5008 13.0661 20.1193C11.5492 20.7373 9.92444 21.0471 8.28659 21.0306C5.91228 21.0327 3.58791 20.3486 1.59319 19.0607C1.29939 18.871 1.17569 18.5035 1.29503 18.1747C1.41437 17.846 1.74506 17.6434 2.09213 17.6863C2.39249 17.7235 2.6949 17.7416 2.99756 17.7407C4.08501 17.7376 5.15174 17.4973 6.12561 17.0447C5.81606 16.9038 5.52052 16.73 5.24437 16.5253C4.43265 15.9234 3.82874 15.0834 3.51667 14.1223C3.43558 13.8725 3.49102 13.5985 3.66283 13.3999C3.66591 13.3964 3.66902 13.3929 3.67215 13.3894C3.48862 13.2257 3.3169 13.0475 3.1588 12.8559C2.44748 11.9937 2.05581 10.9123 2.05002 9.79453L2.05 9.79065L2.05001 9.74065C2.05001 9.47478 2.19077 9.22879 2.41997 9.09407C2.47807 9.05992 2.53965 9.03421 2.603 9.01697C2.26467 8.34189 2.08873 7.59644 2.09001 6.84018C2.08961 5.98342 2.31341 5.14145 2.73917 4.39795C2.86208 4.18331 3.08291 4.04307 3.32944 4.0231C3.57597 4.00312 3.8165 4.10598 3.97236 4.29802C4.93491 5.48403 6.1362 6.45429 7.49819 7.14576C8.19833 7.50121 8.93288 7.77891 9.68867 7.97534C10.1124 8.08547 10.5428 8.17006 10.9776 8.22849C10.9584 7.50523 11.1013 6.78236 11.401 6.11443C11.8407 5.1346 12.5931 4.32843 13.5404 3.82233C13.9415 3.60801 14.474 3.43729 15.0215 3.34352ZM3.74329 10.891C3.87294 11.2559 4.0658 11.5982 4.31586 11.9013C4.80718 12.4969 5.48913 12.9044 6.24635 13.0551C6.58363 13.1222 6.83207 13.41 6.84909 13.7535C6.86612 14.097 6.64737 14.408 6.31837 14.5082C6.04588 14.5911 5.7667 14.6489 5.48434 14.681C5.67093 14.9215 5.8904 15.1369 6.13781 15.3204C6.699 15.7365 7.37594 15.9673 8.07445 15.9808C8.39137 15.9869 8.67023 16.1916 8.77106 16.4921C8.87189 16.7926 8.7729 17.124 8.5238 17.3201C7.47463 18.1456 6.26143 18.7213 4.97588 19.0151C6.04136 19.3564 7.15881 19.532 8.2891 19.5306L8.2978 19.5306C9.73786 19.5456 11.1665 19.2735 12.5002 18.7302C13.8339 18.1868 15.0459 17.3832 16.0656 16.3661C17.0852 15.3491 17.892 14.1391 18.4387 12.8068C18.6498 12.2926 18.8204 11.7641 18.9498 11.2262C19.1556 10.3704 19.257 9.49078 19.25 8.60651L19.25 8.60065V8.07065C19.25 7.88879 19.3161 7.71314 19.4359 7.57636C19.5052 7.49732 19.6264 7.31476 19.7954 7.01686C19.956 6.73374 20.1338 6.39383 20.3187 6.03465C20.3299 6.01293 20.3411 5.99109 20.3524 5.96915C19.8728 6.0733 19.3293 6.12789 18.7594 6.06631C18.579 6.0468 18.4117 5.96252 18.2887 5.82908C17.7858 5.28374 17.1161 4.92073 16.3847 4.79699C16.0602 4.74209 15.6678 4.75465 15.2747 4.82199C14.8476 4.89515 14.4759 5.02317 14.2472 5.14534C13.593 5.49491 13.0732 6.05175 12.7695 6.72854C12.4658 7.40533 12.3953 8.16377 12.5691 8.88493C12.6245 9.11484 12.5683 9.35742 12.4173 9.53945C12.2663 9.72148 12.0383 9.82164 11.8021 9.80969C10.9587 9.76703 10.1242 9.63838 9.31135 9.42711C8.45146 9.20362 7.61572 8.88767 6.81915 8.48326C5.64637 7.88785 4.57832 7.11075 3.65348 6.18306C3.61129 6.39868 3.58987 6.6187 3.59001 6.84015L3.59001 6.84207C3.58897 7.39279 3.72412 7.93522 3.98343 8.42107C4.24274 8.90692 4.61816 9.32111 5.07627 9.62676C5.35429 9.81226 5.47602 10.1593 5.37477 10.4779C5.27351 10.7964 4.97372 11.0095 4.63962 11.0004C4.33702 10.9921 4.03696 10.9553 3.74329 10.891Z",fill:"#082032"})})})]})]}),Object(d.jsxs)("div",{className:"footer-atr",children:[Object(d.jsx)(F,{text:"Jared Romero"}),Object(d.jsx)(F,{text:"\xa9 2021. Jared Romero"})]})]})},Z=function(){return Object(d.jsxs)(o.Fragment,{children:[Object(d.jsx)("div",{className:"decoration-container-top",children:Object(d.jsx)("svg",{className:"decoration-top",width:"768",height:"208",viewBox:"0 0 768 208",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 207.36L21.12 184.32C42.88 161.28 85.12 115.2 128 96C170.88 76.8 213.12 84.48 256 103.68C298.88 122.88 341.12 153.6 384 149.76C426.88 145.92 469.12 107.52 512 92.16C554.88 76.8 597.12 84.48 640 72.96C682.88 61.44 725.12 30.72 746.88 15.36L768 0H746.88C725.12 0 682.88 0 640 0C597.12 0 554.88 0 512 0C469.12 0 426.88 0 384 0C341.12 0 298.88 0 256 0C213.12 0 170.88 0 128 0C85.12 0 42.88 0 21.12 0H0V207.36Z",fill:"#FAB631"})})}),Object(d.jsx)("section",{id:"hero",children:Object(d.jsx)(u,{})}),Object(d.jsx)("section",{id:"projects",children:Object(d.jsx)(v,{})}),Object(d.jsx)("section",{id:"tech",children:Object(d.jsx)(N,{})}),Object(d.jsxs)("footer",{id:"footer",children:[Object(d.jsx)(k,{}),Object(d.jsx)("div",{className:"decoration-container-bottom",children:Object(d.jsx)("svg",{className:"decoration-bottom",width:"768",height:"173",viewBox:"0 0 768 173",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M768 0.199997L746.88 19.4C725.12 38.6 682.88 77 640 93C597.12 109 554.88 102.6 512 86.6C469.12 70.6 426.88 45 384 48.2C341.12 51.4 298.88 83.4 256 96.2C213.12 109 170.88 102.6 128 112.2C85.12 121.8 42.88 147.4 21.12 160.2L0 173H21.12C42.88 173 85.12 173 128 173C170.88 173 213.12 173 256 173C298.88 173 341.12 173 384 173C426.88 173 469.12 173 512 173C554.88 173 597.12 173 640 173C682.88 173 725.12 173 746.88 173H768V0.199997Z",fill:"#FAB631"})})})]})]})},V=function(e){var t=e.text,c=e.id;return Object(d.jsx)("h2",{id:c,children:t})},y=function(e){var t=e.text,c=e.id;return Object(d.jsx)("h3",{id:c,children:t})},B=function(e){var t=e.text;return Object(d.jsx)("p",{children:t})},S=function(e){var t=e.text,c=e.c,s=e.onClick,n=e.id;return Object(d.jsx)("button",{id:n,className:c,onClick:s,children:t})},E=function(e){var t=e.proj,c=Object(n.useState)("Ver m\xe1s"),r=Object(s.a)(c,2),i=r[0],a=r[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(V,{text:"Estos son los proyectos que he realizado."}),t.map((function(e){return Object(d.jsxs)(o.Fragment,{children:[Object(d.jsxs)("div",{className:"project-container",children:[Object(d.jsxs)("div",{className:"description-container",children:[Object(d.jsx)(y,{text:e.name}),Object(d.jsx)(B,{text:e.smallText}),Object(d.jsx)(B,{text:e.explanation})]}),Object(d.jsx)("div",{className:"img-project-container",children:Object(d.jsx)("img",{className:"project-image",src:e.img,alt:e.name})}),Object(d.jsxs)("div",{id:e.id,className:"project-container-hide none",children:[Object(d.jsx)(B,{text:e.explanationTwo}),Object(d.jsx)(B,{text:e.explanation}),Object(d.jsx)("div",{className:"tech-used-container",children:e.technologies.map((function(e){return Object(d.jsx)("div",{className:"tech-container",children:e},e)}))}),Object(d.jsxs)("div",{className:"anchor-container",children:[Object(d.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(d.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.46014 16.8191C2.23856 16.5893 2.1867 16.2444 2.33091 15.9596L3.03241 14.5743C4.69268 11.2954 8.05563 9.2288 11.7308 9.2288H12.0757C12.1009 8.68242 12.1334 8.1363 12.1731 7.59057L12.241 6.65993C12.2961 5.90311 13.14 5.48004 13.7795 5.88863C15.8771 7.22899 17.7007 8.95608 19.153 10.9778L19.6091 11.6128C19.797 11.8742 19.797 12.2264 19.6091 12.4879L19.153 13.1228C17.7007 15.1446 15.8771 16.8717 13.7795 18.212C13.14 18.6206 12.2961 18.1976 12.241 17.4407L12.1731 16.5101C12.1256 15.8584 12.0886 15.2061 12.0619 14.5535C9.91207 14.4914 7.76486 14.9253 5.7915 15.8361L3.31431 16.9794C3.02447 17.1132 2.68173 17.0488 2.46014 16.8191ZM4.67839 14.6978L5.16291 14.4742C7.57405 13.3613 10.2196 12.8915 12.8447 13.0932C13.227 13.1225 13.5256 13.4355 13.5369 13.8188C13.5624 14.6802 13.6065 15.5411 13.6692 16.401L13.6746 16.4755C15.3181 15.3138 16.7583 13.8855 17.9348 12.2477L18.0766 12.0503L17.9348 11.853C16.7583 10.2152 15.3181 8.78683 13.6746 7.62517L13.6692 7.69962C13.6132 8.46723 13.5721 9.23565 13.5458 10.0044C13.532 10.4084 13.2005 10.7288 12.7962 10.7288L11.7308 10.7288C8.83352 10.7288 6.16555 12.2467 4.67839 14.6978Z",fill:"black"})})}),Object(d.jsx)("a",{href:e.github,target:"_blank",rel:"noreferrer",children:Object(d.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 0.75C5.64625 0.75 0.5 5.89625 0.5 12.25C0.5 17.3387 3.79187 21.6369 8.36312 23.1606C8.93812 23.2612 9.15375 22.9162 9.15375 22.6144C9.15375 22.3412 9.13938 21.4356 9.13938 20.4725C6.25 21.0044 5.5025 19.7681 5.2725 19.1212C5.14313 18.7906 4.5825 17.77 4.09375 17.4969C3.69125 17.2812 3.11625 16.7494 4.07938 16.735C4.985 16.7206 5.63187 17.5687 5.8475 17.9137C6.8825 19.6531 8.53563 19.1644 9.19688 18.8625C9.2975 18.115 9.59938 17.6119 9.93 17.3244C7.37125 17.0369 4.6975 16.045 4.6975 11.6462C4.6975 10.3956 5.14312 9.36062 5.87625 8.55562C5.76125 8.26812 5.35875 7.08937 5.99125 5.50812C5.99125 5.50812 6.95438 5.20625 9.15375 6.68687C10.0738 6.42812 11.0513 6.29875 12.0288 6.29875C13.0063 6.29875 13.9838 6.42812 14.9038 6.68687C17.1031 5.19188 18.0662 5.50812 18.0662 5.50812C18.6987 7.08937 18.2962 8.26812 18.1812 8.55562C18.9144 9.36062 19.36 10.3812 19.36 11.6462C19.36 16.0594 16.6719 17.0369 14.1131 17.3244C14.53 17.6837 14.8894 18.3737 14.8894 19.4519C14.8894 20.99 14.875 22.2262 14.875 22.6144C14.875 22.9162 15.0906 23.2756 15.6656 23.1606C20.2081 21.6369 23.5 17.3244 23.5 12.25C23.5 5.89625 18.3538 0.75 12 0.75V0.75Z",fill:"#F4F5F7"})})})]})]},e.id+".1")]},e.id),Object(d.jsx)(S,{id:e.id,text:i,c:"button more",onClick:function(e){var t=e.target.id;document.getElementById(t).classList.toggle("none");var c=i;a(c="Ver m\xe1s"===c?"Ver menos":"Ver m\xe1s")}})]},e.id)})),Object(d.jsx)(V,{id:"view-design",text:"Puedes ver los dise\xf1os completos en mi Instagram o en mi perfil de Behance."})]})},q=function(){return Object(d.jsxs)(o.Fragment,{children:[Object(d.jsx)("div",{className:"decoration-container-top",children:Object(d.jsx)("svg",{className:"decoration-top",width:"768",height:"208",viewBox:"0 0 768 208",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 207.36L21.12 184.32C42.88 161.28 85.12 115.2 128 96C170.88 76.8 213.12 84.48 256 103.68C298.88 122.88 341.12 153.6 384 149.76C426.88 145.92 469.12 107.52 512 92.16C554.88 76.8 597.12 84.48 640 72.96C682.88 61.44 725.12 30.72 746.88 15.36L768 0H746.88C725.12 0 682.88 0 640 0C597.12 0 554.88 0 512 0C469.12 0 426.88 0 384 0C341.12 0 298.88 0 256 0C213.12 0 170.88 0 128 0C85.12 0 42.88 0 21.12 0H0V207.36Z",fill:"#FAB631"})})}),Object(d.jsx)("section",{className:"main",children:Object(d.jsx)(E,{proj:[{name:"Mi portafolio.",id:1,smallText:"Este proyecto esta hecho para mostrar mis proyectos y habilidades",explanation:"Al ser este mi primer proyecto serio, cre\xed necesario adoptar un dise\xf1o b\xe1sico pero bonito, utilizando colores claros y oscuros para hacer el cambio de tema, adem\xe1s del color amarillo para representar mi gusto a Javascript.",explanationTwo:"Planeo empezar a desarrollar en React, por lo que este es el proyecto elegido para empezar a pr\xe1cticar. Las posibles nuevas actualizaciones a este proyecto son integrar un sistema de blog dentro de la p\xe1gina, adem\xe1s de mejorar y elevar la calidad del dise\xf1o.",technologies:["HTML5","CSS3","ReactJS","Figma"],img:"/portfolio/assets/img/portfolio.png",url:"/index.html",github:"https://github.com/Jared2002/portfolio"},{name:"All- M",id:2,smallText:"Este proyecto fue hecho utilizando la API p\xfablica de Marvel, creando una SPA con scroll infinito.",explanation:"La paleta de colores de este proyecto fue elegida por el logo de Marvel, ademas de la eleccion de poner los enlaces a mis redes sociales en la parte superior de la pantalla, pues al tener un scroll infinito, si se ponian al final nunca iban a poder clikearse. Adem\xe1s cuenta con un dise\xf1o responsivo",explanationTwo:"Las posibles nuevas actualizaciones a este proyecto contendran un espacio para la busqueda de personajes individuales, adem\xe1s de al hacer click en cada persona que te redirija a una pagina especial por personaje con la misma l\xednea de dise\xf1o.",technologies:["HTML5","CSS3","Javascript","Figma"],img:"/portfolio/assets/img/ex1.png",url:"https://jared2002.github.io/All-M/",github:"https://github.com/Jared2002/All-M/tree/master"}]})}),Object(d.jsxs)("footer",{id:"footer",children:[Object(d.jsx)(k,{}),Object(d.jsx)("div",{className:"decoration-container-bottom",children:Object(d.jsx)("svg",{className:"decoration-bottom",width:"768",height:"173",viewBox:"0 0 768 173",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M768 0.199997L746.88 19.4C725.12 38.6 682.88 77 640 93C597.12 109 554.88 102.6 512 86.6C469.12 70.6 426.88 45 384 48.2C341.12 51.4 298.88 83.4 256 96.2C213.12 109 170.88 102.6 128 112.2C85.12 121.8 42.88 147.4 21.12 160.2L0 173H21.12C42.88 173 85.12 173 128 173C170.88 173 213.12 173 256 173C298.88 173 341.12 173 384 173C426.88 173 469.12 173 512 173C554.88 173 597.12 173 640 173C682.88 173 725.12 173 746.88 173H768V0.199997Z",fill:"#FAB631"})})})]})]})},A=function(e){var t=e.def,c=Object(n.useState)("dark"===localStorage.getItem("theme")),r=Object(s.a)(c,2),i=r[0],h=r[1];Object(n.useEffect)((function(){document.getElementsByTagName("HTML")[0].setAttribute("data-theme",localStorage.getItem("theme"))}),[i]);return Object(d.jsxs)(o.Fragment,{children:[Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)(a.b,{to:"/",children:Object(d.jsx)(C,{id:"dark",text:"Jared Romero"})}),Object(d.jsx)("button",{className:"menuButton",onClick:function(){document.querySelector(".menu-hidden").classList.toggle("none")},children:Object(d.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M26.3334 15.9999C26.3334 15.4476 25.8856 14.9999 25.3334 14.9999H6.66669C6.1144 14.9999 5.66669 15.4476 5.66669 15.9999C5.66669 16.5522 6.1144 16.9999 6.66669 16.9999H25.3334C25.8856 16.9999 26.3334 16.5522 26.3334 15.9999Z",fill:"#082032"}),Object(d.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M26.3334 9.33325C26.3334 8.78097 25.8856 8.33325 25.3334 8.33325H6.66669C6.1144 8.33325 5.66669 8.78097 5.66669 9.33325C5.66669 9.88554 6.1144 10.3333 6.66669 10.3333H25.3334C25.8856 10.3333 26.3334 9.88554 26.3334 9.33325Z",fill:"#082032"}),Object(d.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M26.3334 22.6666C26.3334 22.1143 25.8856 21.6666 25.3334 21.6666H6.66669C6.1144 21.6666 5.66669 22.1143 5.66669 22.6666C5.66669 23.2189 6.1144 23.6666 6.66669 23.6666H25.3334C25.8856 23.6666 26.3334 23.2189 26.3334 22.6666Z",fill:"#082032"})]})}),Object(d.jsxs)("nav",{className:"menu-hidden none",id:"menuButton",children:[Object(d.jsx)(a.b,{to:"./",children:Object(d.jsx)(j,{text:"Home"})}),Object(d.jsx)("a",{href:"https://www.youtube.com",target:"_blank",rel:"noreferrer",children:Object(d.jsx)(j,{id:"dark",text:"Blog"})}),Object(d.jsx)(a.b,{to:"/projects",children:Object(d.jsx)(j,{text:"Proyectos"})}),Object(d.jsx)("div",{className:"check-container",children:Object(d.jsxs)("button",{defaultValue:t,onClick:function(){!1===i?(document.querySelector("#theme").classList.add("active"),localStorage.setItem("theme","dark"),h(!0)):(document.querySelector("#theme").classList.remove("active"),localStorage.setItem("theme","light"),h(!1))},className:"theme",id:"theme",children:[Object(d.jsxs)("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M15 1.5625C15.5178 1.5625 15.9375 1.98223 15.9375 2.5V3.75C15.9375 4.26777 15.5178 4.6875 15 4.6875C14.4822 4.6875 14.0625 4.26777 14.0625 3.75V2.5C14.0625 1.98223 14.4822 1.5625 15 1.5625Z",fill:"#F4F5F7"}),Object(d.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.8125 15C7.8125 11.0305 11.0305 7.8125 15 7.8125C18.9695 7.8125 22.1875 11.0305 22.1875 15C22.1875 18.9695 18.9695 22.1875 15 22.1875C11.0305 22.1875 7.8125 18.9695 7.8125 15ZM15 9.6875C12.066 9.6875 9.6875 12.066 9.6875 15C9.6875 17.934 12.066 20.3125 15 20.3125C17.934 20.3125 20.3125 17.934 20.3125 15C20.3125 12.066 17.934 9.6875 15 9.6875Z",fill:"#F4F5F7"}),Object(d.jsx)("path",{d:"M6.8241 5.49828C6.45798 5.13216 5.86439 5.13216 5.49827 5.49828C5.13215 5.8644 5.13215 6.45799 5.49827 6.82411L6.38215 7.70799C6.74827 8.07411 7.34186 8.07411 7.70798 7.70799C8.0741 7.34187 8.0741 6.74828 7.70798 6.38216L6.8241 5.49828Z",fill:"#F4F5F7"}),Object(d.jsx)("path",{d:"M28.4375 15C28.4375 15.5178 28.0178 15.9375 27.5 15.9375H26.25C25.7322 15.9375 25.3125 15.5178 25.3125 15C25.3125 14.4822 25.7322 14.0625 26.25 14.0625H27.5C28.0178 14.0625 28.4375 14.4822 28.4375 15Z",fill:"#F4F5F7"}),Object(d.jsx)("path",{d:"M24.5017 6.8241C24.8678 6.45798 24.8678 5.86439 24.5017 5.49827C24.1356 5.13215 23.542 5.13215 23.1759 5.49827L22.292 6.38215C21.9259 6.74827 21.9259 7.34186 22.292 7.70798C22.6581 8.0741 23.2517 8.0741 23.6178 7.70798L24.5017 6.8241Z",fill:"#F4F5F7"}),Object(d.jsx)("path",{d:"M15 25.3125C15.5178 25.3125 15.9375 25.7322 15.9375 26.25V27.5C15.9375 28.0178 15.5178 28.4375 15 28.4375C14.4822 28.4375 14.0625 28.0178 14.0625 27.5V26.25C14.0625 25.7322 14.4822 25.3125 15 25.3125Z",fill:"#F4F5F7"}),Object(d.jsx)("path",{d:"M23.6179 22.292C23.2518 21.9259 22.6582 21.9259 22.2921 22.292C21.926 22.6581 21.926 23.2517 22.2921 23.6179L23.176 24.5017C23.5421 24.8679 24.1357 24.8679 24.5018 24.5017C24.8679 24.1356 24.8679 23.542 24.5018 23.1759L23.6179 22.292Z",fill:"#F4F5F7"}),Object(d.jsx)("path",{d:"M4.6875 15C4.6875 15.5178 4.26777 15.9375 3.75 15.9375H2.5C1.98223 15.9375 1.5625 15.5178 1.5625 15C1.5625 14.4822 1.98223 14.0625 2.5 14.0625H3.75C4.26777 14.0625 4.6875 14.4822 4.6875 15Z",fill:"#F4F5F7"}),Object(d.jsx)("path",{d:"M7.7079 23.6178C8.07401 23.2517 8.07401 22.6581 7.7079 22.292C7.34178 21.9259 6.74819 21.9259 6.38207 22.292L5.49819 23.1759C5.13207 23.542 5.13207 24.1356 5.49819 24.5017C5.8643 24.8678 6.4579 24.8678 6.82401 24.5017L7.7079 23.6178Z",fill:"#F4F5F7"})]}),Object(d.jsx)("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M14.3578 5.9599C9.65243 6.2893 5.9375 10.2108 5.9375 15C5.9375 20.0051 9.99492 24.0625 15 24.0625C19.0098 24.0625 22.4121 21.4577 23.606 17.8483C22.6872 18.2279 21.6801 18.4375 20.625 18.4375C16.3103 18.4375 12.8125 14.9397 12.8125 10.625C12.8125 8.87607 13.3876 7.26136 14.3578 5.9599ZM4.0625 15C4.0625 8.95938 8.95938 4.0625 15 4.0625C15.562 4.0625 16.1147 4.10497 16.6549 4.18702C17.0286 4.24379 17.3317 4.51942 17.4236 4.88608C17.5154 5.25274 17.3781 5.63869 17.0753 5.86493C15.624 6.94919 14.6875 8.6776 14.6875 10.625C14.6875 13.9042 17.3458 16.5625 20.625 16.5625C22.0428 16.5625 23.3423 16.0667 24.3632 15.2383C24.6565 15.0002 25.0641 14.9615 25.3971 15.1401C25.73 15.3187 25.9232 15.6797 25.8871 16.0558C25.3554 21.6015 20.6846 25.9375 15 25.9375C8.95938 25.9375 4.0625 21.0406 4.0625 15Z",fill:"#F4F5F7"})})]})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"cancel",id:"calcelButton",onClick:function(){document.querySelector(".menu-hidden").classList.toggle("none")},children:Object(d.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{id:"cancel",d:"M11.2859 20.7138L20.714 11.2858",stroke:"#082032","stroke-width":"1.5","stroke-linecap":"round"}),Object(d.jsx)("path",{id:"cancel",d:"M11.2859 11.2861L20.7139 20.7142",stroke:"#082032","stroke-width":"1.5","stroke-linecap":"round"})]})})})]})]}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/projects",children:Object(d.jsx)(q,{})}),Object(d.jsx)(l.a,{path:"/",children:Object(d.jsx)(Z,{})})]})]})};i.a.render(Object(d.jsx)(a.a,{children:Object(d.jsx)(A,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.b6dfcc68.chunk.js.map