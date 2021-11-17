import React from "react";
import { Fragment } from "react/cjs/react.production.min";

const H2 = ({text,id}) => <h2 id={id}>{text}</h2>
const P = ({text, c, id}) => <p id={id} className={c}>{text}</p>
const Footer = () =>{
  const contactFormValidations = () =>{
    const inputs = document.querySelectorAll(".contact-form [required]")

    inputs.forEach(input =>{
      const span = document.createElement("span")
      span.id = input.name
      span.textContent = input.title
      span.classList.add("contact-form-error", "none")
      input.insertAdjacentElement("afterend", span)

      document.addEventListener("keyup", (e) => {
        if (e.target.matches(".contact-form [required]")){
          let input = e.target
          let pattern = input.pattern || input.dataset.pattern

          if (pattern && input.value !== ""){
            let regex = new RegExp(pattern)
            return !regex.exec(input.value)?document.getElementById(input.name).classList.remove("none"):document.getElementById(input.name).classList.add("none")
          }
          if (!pattern){
            return input.value === ""?document.getElementById(input.name).classList.remove("none"):document.getElementById(input.name).classList.add("none")
          }
        }
      })
    })
  }

  document.addEventListener("DOMContentLoaded", (e) =>{
    contactFormValidations();
  })

    return (
      <Fragment>
        <div className="container-footer">
          <div className="footer-contact">
            <H2 text="Contacto"/>
            <form className="contact-form" action="https://formsubmit.co/jared.romeroalvirde@gmail.com" target="_blank" method="POST">
              <input type="text"  placeholder="Nombre" className="normal contact-form" required name="nombre" title="Solo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]+$"/>
              <input type="email"  placeholder="Correo" className="normal contact-form" required name="correo" title="Correo incorrecto" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
              <textarea className="large" placeholder="Mensaje" cols="50" rows="5" required name="mensaje" title="Tu comentario no debe exceder los 255 caracteres" data-pattern="^.{1,255}$"></textarea>
              <input type="submit" value="Enviar" placeholder="Enviar" className="submit" />
              <div className="contact-form-response none">
                <P id="enviado" text="Los datos se han enviado"/>
              </div>
            </form>
          </div>
          <div className="footer-social">
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/jaredromeroa/">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 7.00005C16 6.44776 16.4477 6.00005 17 6.00005C17.5523 6.00005 18 6.44776 18 7.00005C18 7.55233 17.5523 8.00005 17 8.00005C16.4477 8.00005 16 7.55233 16 7.00005Z" fill="#082032"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.25005C9.37665 7.25005 7.25 9.37669 7.25 12C7.25 14.6234 9.37665 16.75 12 16.75C14.6234 16.75 16.75 14.6234 16.75 12C16.75 9.37669 14.6234 7.25005 12 7.25005ZM8.75 12C8.75 10.2051 10.2051 8.75005 12 8.75005C13.7949 8.75005 15.25 10.2051 15.25 12C15.25 13.795 13.7949 15.25 12 15.25C10.2051 15.25 8.75 13.795 8.75 12Z" fill="#082032"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2583 2.83306C13.7917 2.44562 10.2083 2.44562 6.74177 2.83306C4.72971 3.05794 3.10538 4.64295 2.86883 6.66548C2.45429 10.2098 2.45429 13.7903 2.86883 17.3346C3.10538 19.3571 4.72971 20.9422 6.74177 21.167C10.2083 21.5545 13.7917 21.5545 17.2583 21.167C19.2703 20.9422 20.8946 19.3571 21.1312 17.3346C21.5457 13.7903 21.5457 10.2098 21.1312 6.66548C20.8946 4.64295 19.2703 3.05794 17.2583 2.83306ZM6.90838 4.32378C10.2642 3.94871 13.7358 3.94871 17.0916 4.32378C18.4218 4.47244 19.4872 5.52205 19.6414 6.83973C20.0424 10.2683 20.0424 13.7318 19.6414 17.1604C19.4872 18.478 18.4218 19.5277 17.0916 19.6763C13.7358 20.0514 10.2642 20.0514 6.90838 19.6763C5.57827 19.5277 4.51278 18.478 4.35867 17.1604C3.95767 13.7318 3.95767 10.2683 4.35867 6.83973C4.51278 5.52205 5.57827 4.47244 6.90838 4.32378Z" fill="#082032"/>
              </svg>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jared-jair-romero-449696223/">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 1.25C3.48122 1.25 2.25 2.48122 2.25 4C2.25 5.51878 3.48122 6.75 5 6.75C6.51878 6.75 7.75 5.51878 7.75 4C7.75 2.48122 6.51878 1.25 5 1.25ZM3.75 4C3.75 3.30964 4.30964 2.75 5 2.75C5.69036 2.75 6.25 3.30964 6.25 4C6.25 4.69036 5.69036 5.25 5 5.25C4.30964 5.25 3.75 4.69036 3.75 4Z" fill="#082032"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 8C2.25 7.58579 2.58579 7.25 3 7.25H7C7.41421 7.25 7.75 7.58579 7.75 8V21C7.75 21.4142 7.41421 21.75 7 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V8ZM3.75 8.75V20.25H6.25V8.75H3.75Z" fill="#082032"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 8C9.25 7.58579 9.58579 7.25 10 7.25H14C14.4142 7.25 14.75 7.58579 14.75 8V8.43402L15.1853 8.24748C15.9336 7.92676 16.7339 7.72565 17.5433 7.65207C20.3182 7.3998 22.75 9.58038 22.75 12.3802V21C22.75 21.4142 22.4142 21.75 22 21.75H18C17.5858 21.75 17.25 21.4142 17.25 21V14C17.25 13.6685 17.1183 13.3505 16.8839 13.1161C16.6495 12.8817 16.3315 12.75 16 12.75C15.6685 12.75 15.3505 12.8817 15.1161 13.1161C14.8817 13.3505 14.75 13.6685 14.75 14V21C14.75 21.4142 14.4142 21.75 14 21.75H10C9.58579 21.75 9.25 21.4142 9.25 21V8ZM10.75 8.75V20.25H13.25V14C13.25 13.2707 13.5397 12.5712 14.0555 12.0555C14.5712 11.5397 15.2707 11.25 16 11.25C16.7293 11.25 17.4288 11.5397 17.9445 12.0555C18.4603 12.5712 18.75 13.2707 18.75 14V20.25H21.25V12.3802C21.25 10.4759 19.589 8.97227 17.6791 9.14591C17.025 9.20536 16.3784 9.36807 15.7762 9.6262L14.2954 10.2608C14.0637 10.3601 13.7976 10.3363 13.5871 10.1976C13.3767 10.0588 13.25 9.82354 13.25 9.57143V8.75H10.75Z" fill="#082032"/>
              </svg>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.behance.net/Jared_Romero">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.76226 8.38947C4.6518 8.38947 4.56226 8.47901 4.56226 8.58947V10.9653C4.56226 11.0757 4.6518 11.1653 4.76226 11.1653H7.51599C8.28251 11.1653 8.90389 10.5439 8.90389 9.77737C8.90389 9.01085 8.28251 8.38947 7.51599 8.38947H4.76226Z" fill="#082032"/>
                <path d="M4.76226 12.9446C4.6518 12.9446 4.56226 13.0342 4.56226 13.1446V16.0187C4.56226 16.1291 4.6518 16.2187 4.76226 16.2187H7.69393C8.59802 16.2187 9.33094 15.4857 9.33094 14.5817C9.33094 13.6776 8.59802 12.9446 7.69393 12.9446H4.76226Z" fill="#082032"/>
                <path d="M16.1369 13.087C16.0882 13.087 16.0488 13.0475 16.0488 12.9989C16.0488 12.0255 16.8378 11.2364 17.8112 11.2364H18.2009C19.1743 11.2364 19.9634 12.0255 19.9634 12.9989C19.9634 13.0475 19.9239 13.087 19.8752 13.087H16.1369Z" fill="#082032"/>
                <path fillRule="evenodd" clip-rule="evenodd" d="M12.5704 11.9933C12.5065 11.9126 12.4398 11.8345 12.3707 11.7589C12.8031 11.0756 13.0228 10.2795 13.0023 9.47155C13.0203 8.7769 12.8812 8.08694 12.5952 7.45318C12.3164 6.82308 11.8706 6.28115 11.3062 5.8859L11.2949 5.87806C10.7624 5.51248 10.1588 5.26365 9.52366 5.14772C8.91381 5.02154 8.29211 4.96138 7.66934 4.96831H2C1.17157 4.96831 0.5 5.63988 0.5 6.46831V18.4251C0.5 19.2535 1.17157 19.9251 2 19.9251H7.80064C8.45751 19.9255 9.11176 19.8423 9.74759 19.6774C10.4012 19.5083 11.0205 19.227 11.5778 18.8459L11.5852 18.8408C12.1414 18.4556 12.6024 17.9497 12.9343 17.3619C13.1477 17.7708 13.4102 18.1534 13.7168 18.501C13.7254 18.5108 13.7341 18.5204 13.743 18.53C14.2815 19.1093 14.943 19.5608 15.6787 19.8515L15.6975 19.8588C16.4532 20.1458 17.2561 20.2882 18.0643 20.279C19.2269 20.3082 20.3738 20.0017 21.3666 19.3956C21.3957 19.3779 21.4242 19.3591 21.452 19.3394C22.4989 18.5979 23.2537 17.514 23.5843 16.2748C23.6497 16.0295 23.651 15.7752 23.5928 15.5348C23.7051 15.3424 23.776 15.1222 23.7928 14.886C23.8493 14.0935 23.7814 13.297 23.5915 12.5254L23.5901 12.5197C23.3965 11.7461 23.0578 11.0162 22.5921 10.3686L22.5765 10.3472C22.0834 9.6865 21.4469 9.14608 20.715 8.76621C20.7053 8.76114 20.6955 8.75618 20.6856 8.75133C19.8867 8.35874 19.0063 8.16002 18.1163 8.17103C17.3027 8.16732 16.4964 8.32493 15.7442 8.63484L15.7345 8.63885C15.0271 8.93611 14.3857 9.37089 13.8479 9.91808L13.8361 9.93025C13.2964 10.492 12.8781 11.1588 12.6077 11.8892L12.6067 11.892C12.5943 11.9257 12.5822 11.9594 12.5704 11.9933ZM9.82757 11.9239C10.4027 12.0626 10.918 12.3758 11.3046 12.8168C11.371 12.8925 11.4336 12.972 11.492 13.055C11.52 13.0976 11.547 13.1407 11.573 13.1844C11.8903 13.7187 12.0508 14.3327 12.0341 14.9559C12.0504 15.4999 11.9294 16.0392 11.6822 16.5241C11.4589 16.9578 11.1322 17.3299 10.7311 17.6077C10.317 17.8908 9.85681 18.0999 9.37104 18.2255C9.14132 18.285 8.90861 18.3314 8.67407 18.3644C8.38536 18.405 8.09386 18.4253 7.80172 18.4251H2V6.46831H7.67808C8.20201 6.4619 8.72507 6.5129 9.23789 6.62038C9.67122 6.69705 10.0831 6.86558 10.4458 7.11462C10.7879 7.35416 11.0576 7.68292 11.2257 8.06508C11.4257 8.5062 11.5202 8.98782 11.5015 9.47176C11.5207 9.94992 11.4066 10.423 11.1736 10.8387C11.148 10.8843 11.121 10.9293 11.0925 10.9735C10.7798 11.3941 10.3116 11.7225 9.82757 11.9239ZM16.0018 14.9935C15.9985 14.9224 15.9985 14.851 16.0018 14.7793H22.2966C22.3057 14.6525 22.3108 14.5255 22.3119 14.3986C22.3133 14.2355 22.3082 14.0725 22.2966 13.91C22.2816 13.6986 22.2555 13.4881 22.2185 13.2793C22.1951 13.1468 22.1672 13.0149 22.135 12.8839C21.9875 12.2944 21.7294 11.7381 21.3743 11.2443C21.0169 10.7653 20.5552 10.3733 20.024 10.0976C19.433 9.80713 18.7811 9.66094 18.1223 9.67109C17.5026 9.66656 16.8883 9.7858 16.3156 10.0217C15.7912 10.2421 15.316 10.5643 14.9178 10.9695C14.5207 11.3828 14.2132 11.8731 14.0144 12.41C13.8012 12.9896 13.6948 13.6029 13.7006 14.2202C13.6909 14.8462 13.7939 15.469 14.0049 16.0587C14.1842 16.5928 14.4687 17.0858 14.8417 17.5088C15.2277 17.924 15.702 18.2478 16.23 18.4565C16.8187 18.68 17.4448 18.7894 18.0747 18.7787C18.9585 18.8062 19.831 18.5756 20.585 18.1153C20.8788 17.9073 21.1408 17.6623 21.3656 17.3882C21.6376 17.0566 21.8551 16.6823 22.0087 16.2793C22.0573 16.1517 22.0995 16.0211 22.135 15.8882H20.0335C19.9799 16.0301 19.9047 16.1619 19.8115 16.2793C19.7093 16.4081 19.5852 16.5197 19.444 16.6084C19.0783 16.85 18.6464 16.9725 18.2078 16.9591C17.9176 16.9892 17.6242 16.9594 17.346 16.8713C17.0679 16.7832 16.8109 16.6389 16.5913 16.4473C16.5434 16.3932 16.4982 16.3371 16.4558 16.2793C16.1809 15.9046 16.0229 15.4573 16.0018 14.9935Z" fill="#082032"/>
                <path d="M20.4466 6.39587C20.4443 6.17656 20.2659 5.99994 20.0466 5.99994H16.0217C15.8008 5.99994 15.6217 6.17903 15.6217 6.39994V7.47122C15.6217 7.69213 15.8008 7.87122 16.0217 7.87122H20.0575C20.28 7.87122 20.4597 7.68965 20.4575 7.46716L20.4466 6.39587Z" fill="#082032"/>
              </svg>
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/JJairRomero">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clip-rule="evenodd" d="M15.0215 3.34352C15.5299 3.25644 16.0992 3.22736 16.6349 3.31801C17.5918 3.47989 18.4756 3.92462 19.1743 4.59138C19.631 4.60171 20.0798 4.51173 20.4769 4.38347C20.8131 4.27492 21.097 4.14385 21.2959 4.04021C21.3948 3.98868 21.4713 3.94472 21.5209 3.91496C21.5457 3.90011 21.5638 3.88886 21.5745 3.88207L21.584 3.87601C21.8808 3.67828 22.276 3.71677 22.5289 3.96827C22.7818 4.21984 22.8226 4.61476 22.6263 4.91266C22.4186 5.22795 22.1303 5.79002 21.8072 6.41978C21.7564 6.5188 21.7047 6.61949 21.6524 6.72116C21.4671 7.08113 21.2771 7.44494 21.1 7.75707C20.9888 7.95306 20.8699 8.15204 20.75 8.32398V8.59775C20.7576 9.60338 20.6423 10.6038 20.4082 11.577C20.2609 12.1893 20.0667 12.7909 19.8264 13.3763C19.204 14.893 18.2856 16.2704 17.1249 17.4282C15.9641 18.5859 14.5844 19.5008 13.0661 20.1193C11.5492 20.7373 9.92444 21.0471 8.28659 21.0306C5.91228 21.0327 3.58791 20.3486 1.59319 19.0607C1.29939 18.871 1.17569 18.5035 1.29503 18.1747C1.41437 17.846 1.74506 17.6434 2.09213 17.6863C2.39249 17.7235 2.6949 17.7416 2.99756 17.7407C4.08501 17.7376 5.15174 17.4973 6.12561 17.0447C5.81606 16.9038 5.52052 16.73 5.24437 16.5253C4.43265 15.9234 3.82874 15.0834 3.51667 14.1223C3.43558 13.8725 3.49102 13.5985 3.66283 13.3999C3.66591 13.3964 3.66902 13.3929 3.67215 13.3894C3.48862 13.2257 3.3169 13.0475 3.1588 12.8559C2.44748 11.9937 2.05581 10.9123 2.05002 9.79453L2.05 9.79065L2.05001 9.74065C2.05001 9.47478 2.19077 9.22879 2.41997 9.09407C2.47807 9.05992 2.53965 9.03421 2.603 9.01697C2.26467 8.34189 2.08873 7.59644 2.09001 6.84018C2.08961 5.98342 2.31341 5.14145 2.73917 4.39795C2.86208 4.18331 3.08291 4.04307 3.32944 4.0231C3.57597 4.00312 3.8165 4.10598 3.97236 4.29802C4.93491 5.48403 6.1362 6.45429 7.49819 7.14576C8.19833 7.50121 8.93288 7.77891 9.68867 7.97534C10.1124 8.08547 10.5428 8.17006 10.9776 8.22849C10.9584 7.50523 11.1013 6.78236 11.401 6.11443C11.8407 5.1346 12.5931 4.32843 13.5404 3.82233C13.9415 3.60801 14.474 3.43729 15.0215 3.34352ZM3.74329 10.891C3.87294 11.2559 4.0658 11.5982 4.31586 11.9013C4.80718 12.4969 5.48913 12.9044 6.24635 13.0551C6.58363 13.1222 6.83207 13.41 6.84909 13.7535C6.86612 14.097 6.64737 14.408 6.31837 14.5082C6.04588 14.5911 5.7667 14.6489 5.48434 14.681C5.67093 14.9215 5.8904 15.1369 6.13781 15.3204C6.699 15.7365 7.37594 15.9673 8.07445 15.9808C8.39137 15.9869 8.67023 16.1916 8.77106 16.4921C8.87189 16.7926 8.7729 17.124 8.5238 17.3201C7.47463 18.1456 6.26143 18.7213 4.97588 19.0151C6.04136 19.3564 7.15881 19.532 8.2891 19.5306L8.2978 19.5306C9.73786 19.5456 11.1665 19.2735 12.5002 18.7302C13.8339 18.1868 15.0459 17.3832 16.0656 16.3661C17.0852 15.3491 17.892 14.1391 18.4387 12.8068C18.6498 12.2926 18.8204 11.7641 18.9498 11.2262C19.1556 10.3704 19.257 9.49078 19.25 8.60651L19.25 8.60065V8.07065C19.25 7.88879 19.3161 7.71314 19.4359 7.57636C19.5052 7.49732 19.6264 7.31476 19.7954 7.01686C19.956 6.73374 20.1338 6.39383 20.3187 6.03465C20.3299 6.01293 20.3411 5.99109 20.3524 5.96915C19.8728 6.0733 19.3293 6.12789 18.7594 6.06631C18.579 6.0468 18.4117 5.96252 18.2887 5.82908C17.7858 5.28374 17.1161 4.92073 16.3847 4.79699C16.0602 4.74209 15.6678 4.75465 15.2747 4.82199C14.8476 4.89515 14.4759 5.02317 14.2472 5.14534C13.593 5.49491 13.0732 6.05175 12.7695 6.72854C12.4658 7.40533 12.3953 8.16377 12.5691 8.88493C12.6245 9.11484 12.5683 9.35742 12.4173 9.53945C12.2663 9.72148 12.0383 9.82164 11.8021 9.80969C10.9587 9.76703 10.1242 9.63838 9.31135 9.42711C8.45146 9.20362 7.61572 8.88767 6.81915 8.48326C5.64637 7.88785 4.57832 7.11075 3.65348 6.18306C3.61129 6.39868 3.58987 6.6187 3.59001 6.84015L3.59001 6.84207C3.58897 7.39279 3.72412 7.93522 3.98343 8.42107C4.24274 8.90692 4.61816 9.32111 5.07627 9.62676C5.35429 9.81226 5.47602 10.1593 5.37477 10.4779C5.27351 10.7964 4.97372 11.0095 4.63962 11.0004C4.33702 10.9921 4.03696 10.9553 3.74329 10.891Z" fill="#082032"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-atr">
          <P text="Jared Romero"/>
          <P text="© 2021. Jared Romero"/>
        </div>
      </Fragment>
    )
}

export default Footer