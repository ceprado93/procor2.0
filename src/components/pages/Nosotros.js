import { useLayoutEffect, useState } from "react";
import Separador from "../../assets/Recurso 26.png";

import FB from "../../assets/facebook-blanco.png";
import IG from "../../assets/insta-blanco.png";
import Twitter from "../../assets/twitter-blanco.png";
import Video from "../../assets/video-nosotros.mp4";
import Casa from "../../assets/casa.png";
import Reloj from "../../assets/reloj.png";
import Persona from "../../assets/persona.png";

import "./Pages.css";

const Nosotros = () => {
  const [size, setSize] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    window.innerWidth < 500 && setSize(true);
  }, []);
  return (
    <>
      <div id="about__us" className="page">
        <h1 className="about__title">Sobre nosotros</h1>
        <div className="about__video">{size ? <video src={Video} type="video/mp4" /> : <video loop autostart autoPlay src={Video} type="video/mp4" />}</div>
        <section className="stadistics">
          <div className="block">
            <p id="SemiBold" className="procor__color">
              +20
            </p>
            <p>Años en el sector</p>
          </div>
          <img className="separator" src={Separador} alt="separador" />
          <div className="block">
            <p id="SemiBold" className="procor__color">
              +1M
            </p>
            <p>Pruebas realizadas</p>
          </div>
          <img className="separator" src={Separador} alt="separador" />

          <div className="block">
            <p id="SemiBold" className="procor__color">
              +1.000
            </p>
            <p>Empresas atendidas</p>
          </div>
          <img className="separator" src={Separador} alt="separador" />
          <div className="block">
            <p id="SemiBold" className="procor__color">
              +3.500
            </p>
            <p>Productos donados</p>
          </div>
        </section>
      </div>

      <section className="about__us">
        <div className="team">
          <h3 id="SemiBold">Somos un equipo de trabajo especializado</h3>
          <p>
            Contamos con más de 20 años de experiencia en el sector sanitario, que ha aunado fuerzas por la imperativa necesidad, tanto social como económica, de retomar la normalidad de la que
            siempre hemos disfrutado.
          </p>
        </div>
      </section>

      <section>
        <div className="team__info">
          <article>
            <img src={Casa} alt="mision" />
            <h3 id="SemiBold">Misión</h3>
            <p>Garantizar la protección sanitaria de la población</p>
          </article>
          <article>
            <img src={Reloj} alt="vision" />
            <h3 id="SemiBold">Visión</h3>
            <p>Ser la empresa líder en la gestión de la pandemia</p>
          </article>
          <article>
            <img src={Persona} alt="valores" />
            <h3 id="SemiBold">Valores</h3>
            <p>Nuestros valores se basan en la transparencia y la seguridad </p>
          </article>
        </div>
        {/* <div className="mision">
          <p id="SemiBold">MISIÓN</p>
          <p>GARANTIZAR LA PROTECCIÓN SANITARIA DE LA POBLACIÓN</p>
        </div>
        <div className="vision">
          <p id="SemiBold">VISIÓN</p>
          <p>SER LA EMPRESA LÍDER EN LA GESTIÓN DE LA PANDEMIA</p>
          <ul>
            <li>Suministro sanitario</li>
            <li>Asesoramiento</li>
            <li>Portal informativo</li>
          </ul>
        </div>
        <div className="valores">
          <p id="SemiBold">VALORES</p>
          <p>NUESTROS VALORES SE BASAN EN LA TRANSPARENCIA Y LA SEGURIDAD DE CARA AL CONSUMIDOR.</p>
        </div> */}
      </section>
      <div className="logos_navbar">
        {/* <a href="#about"><img src={Whatsapp}/></a> */}
        <a href="https://www.facebook.com/Procorlab-100801542046256/">
          <img src={FB} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/procorlab/">
          <img src={IG} alt="instagram" />
        </a>
        <a href="https://twitter.com/Procorlab">
          <img src={Twitter} alt="twitter" />
        </a>
      </div>
    </>
  );
};

export default Nosotros;
