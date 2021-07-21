import React from "react";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import FB from "../../assets/facebook-blanco.png";
import IG from "../../assets/insta-blanco.png";
import Twitter from "../../assets/twitter-blanco.png";
import emailjs from "emailjs-com";
import numero1 from "../../assets/numero1.png";
import numero2 from "../../assets/numero2.png";
import numero3 from "../../assets/numero3.png";
import numero4 from "../../assets/numero4.png";
import numero5 from "../../assets/numero5.png";
import numero6 from "../../assets/numero6.png";
import Separador from "../../assets/Recurso 26.png";
import descubreTest from "../../assets/descubre-test.png";
import pideMasInfo from "../../assets/pideMasInfo.png";
import empresas from "../../assets/empresas.png";
import solicitaPruebaLanding from "../../assets/soliInfoLanding.png";
import personalizacion from "../../assets/PersonaVerde.png";
import cobertura from "../../assets/AviónVerde.png";
import fiabilidad from "../../assets/DianaVerde.png";
import asesoramiento from "../../assets/InfoVerde.png";
import necesidad from "../../assets/necesidad.png";

import ReactGA from "react-ga";

const HomePersonas = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_ms36otd", "template_wav4qpj", e.target, "user_29SCJ5tSmyhfUETa03XNu").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }

  function scrollToSection() {
    scroller.scrollTo("formulario", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
  return (
    <div id="home-empresas">
      <section className="home" id="Homempresas">
        <div id="home__landing">
          <div className="ilustracion-emp">
            <img src={empresas} />
          </div>
          <div className="texto_home">
            <p id="SemiBold">
              QUEREMOS <br></br>
              AYUDARTE
            </p>
            <p>
              Espacios de trabajo<br></br>
              Covid free
            </p>
            <div className="botonprimero ">
              <a className="hero_link_home">
                <Link className="solicita_prueba-emp" onClick={scrollToSection}>
                  <img src={solicitaPruebaLanding} />
                </Link>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="personas">
        <p id="SemiBold">
          ProcorLab<br></br>Empresas
        </p>
        <p>
          El servicio integral de prevención y diagnóstico de Covid-19 de ProcorLab te ayudará a generar confianza entre tus clientes y trabajadores a través de la creación de espacios COVID free.  
          <br></br>
        </p>
        <p>
          Te ofrecemos la oportunidad de cuidar de lo más importante; las personas. Nos ajustamos a tus necesidades; tamaño de la empresa, ubicación, presupuesto, etc. y ponemos a tu disposición un
          equipo de profesionales para la prevención y detección temprana de la enfermedad.
        </p>
      </section>
      <section id="test_cada_persona">
        <div>
          <p id="SemiBold" className="bs" style={{ marginTop: 16 }}>
            Tenemos un test para cada evento.<br></br>
            Nos adaptamos a las necesidades de tu empresa.
          </p>
          <p id="SemiBold" className="ss">
            Tenemos un test<br></br> para cada persona.<br></br>
            Nos adaptamos a tus necesidades
          </p>
        </div>
        <div className="ilustraciones">
          <div className="columna">
            <img src={necesidad} />
          </div>
        </div>
        <div>
          <div className="boton--producto " style={{ marginBottom: 0 }}>
            <a className="hero_link_home">
              <Link className="descubre" onClick={scrollToSection}>
                <img src={pideMasInfo} />
              </Link>
            </a>
          </div>
        </div>
      </section>

      <section id="en_que_momento">
        <div>
          <p id="SemiBold" style={{ marginTop: 0 }}>
            Te escuchamos y te damos soluciones
          </p>
          <div className="ayudarte">
            <div id="filas">
              <div className="izquierda">
                <img src={asesoramiento} />
                <p id="SemiBold">Asesoramiento</p>
                <p>
                  Un grupo de especialistas <br></br>
                  atenderá tus dudas. Conocemos lo <br></br>que realmente te importa.
                </p>
              </div>
              <div className="derecha">
                <img src={cobertura} />
                <p id="SemiBold">Cobertura</p>
                <p>
                  Llegamos hasta donde tu <br></br>
                  empresa lo necesite; <br></br>
                  nos desplazamos contigo.
                </p>
              </div>
            </div>
            <div id="filas">
              <div className="izquierda">
                <img src={fiabilidad} />
                <p id="SemiBold">Fiabilidad</p>
                <p>
                  Trabajamos con el <br></br>
                  laboratorio de la Universidad <br></br>Carlos III de
                  <strong> Madrid</strong>.
                </p>
              </div>
              <div className="derecha">
                <img src={personalizacion} />
                <p id="SemiBold">Personalización</p>
                <p>
                  Cada empresa tiene sus <br></br>
                  propias necesidades.<br></br>
                  Solicita tu plan personalizado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ayudarte">
        <div>
          <p id="SemiBold" style={{ marginTop: 32 }}>
            Crea tus espacios Covid free
          </p>
        </div>
        <div id="filas" className="bs" style={{ marginTop: 0 }}>
          <div className="izquierda">
            <img src={numero1} />
            <p>
              No dejes de celebrar un evento o <br></br>
              de realizar jornadas de networking<br></br> por razones sanitarias.
            </p>
          </div>
          <div className="derecha">
            <img src={numero4} />
            <p>
              Realizamos los test precisos y <br></br>
              ofrecemos los resultados en el <br></br> mismo momento.
            </p>
          </div>
        </div>
        <div id="filas" className="bs">
          <div className="izquierda">
            <img src={numero2} />
            <p>
              ProcorLab te ofrece un servicio<br></br>
              de prevención totalmente ajustados
              <br></br> a tus necesidades.
            </p>
          </div>
          <div className="derecha">
            <img src={numero5} />
            <p>
              Posteriormente lanzamos un<br></br>informe personalizado a cada uno<br></br> de los asistentes.
            </p>
          </div>
        </div>
        <div id="filas" className="bs">
          <div className="izquierda">
            <img src={numero3} />
            <p>
              Nos trasladamos el día del evento <br></br>o jornada de trabajo hasta el lugar<br></br> de celebración.
            </p>
          </div>
          <div className="derecha">
            <img src={numero6} />
            <p>
              En caso de haber algún positivo<br></br>realizaremos un seguimiento del<br></br> caso y posibles contactos previos.
            </p>
          </div>
        </div>

        <div className="boton--producto ">
          <a className="hero_link_home">
            <Link className="descubretest" style={{ textAlign: "center" }} onClick={scrollToSection}>
              <img src={descubreTest} />
            </Link>
          </a>
        </div>
      </section>

      <div id="contacto">
        <div className="page__details">
          <div className="page_info">
            <div className="about__title">
              <p id="SemiBold" style={{ marginTop: 0 }}>
                Nuestros clientes
              </p>
            </div>
            <section>
              <div className="stadistics">
                <div className="block">
                  <p id="SemiBold">+20</p>
                  <p>Años en el sector</p>
                </div>
                <img className="separator" src={Separador} />
                <div className="block">
                  <p id="SemiBold">+1M</p>
                  <p>Pruebas realizadas</p>
                </div>
                <img className="separator" src={Separador} />

                <div className="block">
                  <p id="SemiBold">+1.000</p>
                  <p>Empresas atendidas</p>
                </div>
                <img className="separator" src={Separador} />
                <div className="block">
                  <p id="SemiBold">+3.500</p>
                  <p>Productos donados</p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className="map donde_estamos" style={{ paddingTop: 32 }}>
          <p id="SemiBold">¿Dónde estamos?</p>
        </section>
        <section className="map">
          <iframe
            className="mapa"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12129.000102770855!2d-3.6422426!3d40.536065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x876f6b02077b36a2!2sPROCOR!5e0!3m2!1ses!2ses!4v1613071657411!5m2!1ses!2ses"
          ></iframe>
        </section>
        <section className="contacto-text">
          <div className="office__contacto">
            <p id="SemiBold"> TELÉFONO DE CONTACTO</p>
            <p>
              <a href="tel:+34913 436 516">(+34) 913 436 516</a>
            </p>
            <p id="SemiBold">HORARIO</p>
            <p>09:00h a 14:30h - 16:00h a 19:30h</p>
          </div>
          <div className="office__place">
            <p id="SemiBold">NUESTRAS OFICINAS</p>
            <div id="close">
              <p>Dirección: Avda de la industria, 4.</p>
              <p>Edificio 1, Portal 2, Planta 2</p>
              <p>28108 - Alcobendas</p>
            </div>

            <p>
              <strong>Madrid</strong>
            </p>
          </div>
        </section>
      </div>
      <section id="contacta-con-nosotros">
        <p id="SemiBold" style={{ marginTop: 32 }}>
          Contacta con nosotros
        </p>
        <div id="num">
          <a href="tel:+34913 436 516">(+34) 913 436 516</a>
        </div>

        <div className="logos_navbar">
          {/* <a href="#about"><img src={Whatsapp} /></a> */}
          <a href="https://www.facebook.com/Procorlab-100801542046256/" target="_blank">
            <img src={FB} />
          </a>
          <a href="https://instagram.com/procorlab?igshid=15t963ppv1gvc" target="_blank">
            <img src={IG} />
          </a>
          <a href="https://twitter.com/Procorlab" target="_blank">
            <img src={Twitter} />
          </a>
        </div>
      </section>
      <div className="formulario"></div>
      <div id="contacto">
        <div className="contact__text">
          <p>O MÁNDANOS UN CORREO</p>
        </div>
        <section className="contact__form">
          <form id="contact-form" onSubmit={sendEmail}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="NOMBRE" name="name" style={{ width: "100%" }} />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" aria-describedby="emailHelp" name="mail" placeholder="CORREO" style={{ width: "100%" }} />
            </div>
            <div className="form-group">
              <textarea className="form-control" rows="5" placeholder="CONSULTA" name="message"></textarea>
            </div>
            <div className=" botones botones--contacto">
              <p>
                <input type="checkbox" name="terms" requiered /> Acepto
                <u style={{ marginLeft: 3 }}>la política de privacidad</u>
              </p>

              <p id="pequeño">
                De acuerdo con la legislación vigente sobre Protección de Datos de Carácter Personal, le informamos que los datos que nos facilite se incluirán en el sistema de tratamiento de
                Corporación Auditiva InnoAudio, CIF: B88505953, Avenida de la Industria, 4, Edificio 1, Portal 2, Planta 3º, 28108 Alcobendas, Madrid. Tlf: 917 36 42 41, Correo electrónico:
                info@procorlab.es, con el propósito de dar respuesta a su solicitud. Los datos que usted proporcione los guardaremos mientras se mantenga la relación comercial o durante los años
                necesarios para cumplir con obligaciones legales. Corporación Auditiva InnoAudio le informa que tratará los datos de forma lícita, transparente y actualizada. Es por ello que
                Corporación Auditiva InnoAudio se compromete a adoptar las medidas razonables para que los datos se supriman o rectifiquen sin demora cuando sea necesario. Los datos no se cederán bajo
                ninguna circunstancia a terceros, excepto los casos donde exista una obligación legal. Puede ejercer sus derechos de acceso, rectificación, limitación, supresión, portabilidad y
                oposición al tratamiento de sus datos personales dirigiéndose por escrito a info@procorlab.es. Puede consultar la información adicional y detallada sobre nuestra política de privacidad
                en www.procorlab.es. Le informamos que puede revocar su consentimiento en cualquier momento enviando un correo electrónico a la dirección de correo electrónico: info@procorlab.es. Para
                cualquier reclamación puede dirigirse a www.aepd.es
              </p>

              <button type="submit" className="hero_link">
                CONTACTAR
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default HomePersonas;

// import { useLayoutEffect } from "react";
// import emailjs from "emailjs-com";

// import { Carousel, Container, Row, Col } from "react-bootstrap";
// import "./Pages.css";
// import imagen from "../../assets/pcr5.png";
// import imagengolf from "../../assets/golf.jpg";
// import nemeson from "../../assets/logoo.png";
// import diadelpadre from "../../assets/landing.png";
// import diadelpadre1 from "../../assets/diadelpadre1.png";
// import empresa from "../../assets/empresas.png";

// const Empresa = () => {
//   useLayoutEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm("service_ms36otd", "template_wav4qpj", e.target, "user_29SCJ5tSmyhfUETa03XNu").then(
//       (result) => {
//         console.log(result.text);
//       },
//       (error) => {
//         console.log(error.text);
//       }
//     );
//     e.target.reset();
//   }
//   return (
//     <>
//       <Container>
//         <section className="firstSection__events">
//           <img height={500} className="firstSection__img" src={diadelpadre} alt="First slide" />
//           <div className="firstSection__text">
//             <h2 id="SemiBold">Procor Empresas</h2>
//             <p>
//               El servicio integral de prevención y diagnóstico de Covid-19 de ProcorLab te ayudará a generar confianza
//               entre tus clientes y trabajadores a través de la creación de espacios COVID free.  <br></br>
//             </p>
//             <p>
//               Te ofrecemos la oportunidad de cuidar de lo más importante; las personas. Nos ajustamos a tus necesidades;
//               tamaño de la empresa, ubicación, presupuesto, etc. y ponemos a tu disposición un equipo de profesionales
//               para la prevención y detección temprana de la enfermedad.
//             </p>
//           </div>
//           {/* <Carousel style={{ height: "calc(100vh - 208px" }}>
//             <Carousel.Item></Carousel.Item>
//             {/* <Carousel.Item>
//               <img height={500} className="carousel__img" src={empresa} alt="Second slide" />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img height={500} className="carousel__img" src={diadelpadre1} alt="Third slide" />
//             </Carousel.Item> */}
//           {/* </Carousel> */}
//         </section>
//       </Container>
//       <section className="company__section">
//         <p id="SemiBold" className="company__title">
//           Han confiado en nosotros:
//         </p>
//         <Row>
//           <Col lg={{ span: 1, offset: 2 }} md={2} sm={4} xs={6}>
//             <img
//               // style={{ width: "30%", marginTop: 24 }}
//               src="https://mediterraneo.golf/cont-mediterraneo/uploads/2017/01/LOGO_DEF_RFEG_BAJA_RGB_jpg.jpg"
//               alt="logo"
//               className="company__logo"
//             />
//           </Col>
//           <Col lg={1} md={2} sm={4} xs={6}>
//             <img
//               style={{ marginTop: 16 }}
//               src="https://www.dammcorporate.com/sites/default/files/article/highlighted_image/Web%20corpo.jpg"
//               alt="logo"
//               className="company__logo"
//             />
//           </Col>
//           <Col lg={1} md={2} sm={4} xs={6}>
//             <img
//               src="https://media-exp3.licdn.com/dms/image/C560BAQFgEdeFwQbLlg/company-logo_200_200/0/1606465200037?e=2159024400&v=beta&t=kxl8HSznmiX_fsFLkSSw4usNtGUEgUU5ZgA0ElnuDQA"
//               alt="logo"
//               className="company__logo"
//             />
//           </Col>
//           <Col lg={1} md={2} sm={4} xs={6}>
//             <img src="http://www.innoaudio.es/imagenes/logo-innoaudio.gif" alt="logo" className="company__logo" />
//           </Col>
//           <Col lg={1} md={2} sm={4} xs={6}>
//             <img
//               src="https://xn--espaasemueve-dhb.es/wp-content/uploads/2020/07/FEDERACI%C3%93N-ESPA%C3%91OLA-DE-BOXEO.jpg"
//               alt="logo"
//               className="company__logo"
//             />
//           </Col>
//           <Col lg={1} md={2} sm={4} xs={6}>
//             <img
//               src="https://pbs.twimg.com/profile_images/923126162121003008/FLBsy9XK_400x400.jpg"
//               alt="logo"
//               className="company__logo"
//             />
//           </Col>
//           <Col lg={{ span: 1, offset: 0 }} md={{ span: 2, offset: 4 }} sm={4} xs={6}>
//             <img
//               src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/xs5ccg7neyeskyk3prgg"
//               alt="logo"
//               className="company__logo"
//             />
//           </Col>
//           <Col lg={1} md={2} sm={4} xs={6}>
//             <img
//               src="https://pbs.twimg.com/profile_images/1214492024021409792/njK08MuY_400x400.jpg"
//               alt="logo"
//               className="company__logo"
//             />
//           </Col>
//         </Row>
//         <Row style={{ marginBottom: 46 }}>
//           <Col lg={{ span: 1, offset: 2 }} md={2} sm={4} xs={6}>
//             <img
//               // style={{ width: "30%", marginTop: 24 }}
//               src="https://esp.sika.com/content/dam/media/sika-global/logo/Sika_NoClaim_pos_rgb_mobile.png"
//               alt="logo"
//               className="company__logo"
//             />
//           </Col>
//           <Col lg={1} md={2} sm={4} xs={6}>
//             <img
//               src="https://www.preferente.com/wp-content/uploads/2020/12/LOGO-VS-NEGRO.jpg"
//               alt="logo"
//               className="company__logo"
//             />
//           </Col>
//           <Col lg={1} md={2} sm={4} xs={6}>
//             <img
//               src="https://media-exp3.licdn.com/dms/image/C4E0BAQG3Zk1zx0JWYg/company-logo_200_200/0/1519889108050?e=2159024400&v=beta&t=dMQ8n-Fcc4ronzBLaEPdWl8AnkqfiI6OS0RSt3YGXv0"
//               alt="logo"
//               className="company__logo"
//             />
//           </Col>
//           <Col lg={1} md={2} sm={4} xs={6}>
//             <img
//               style={{ marginTop: 10 }}
//               src="https://www.mediadoresdesegurosdemadrid.com/wp-content/uploads/2014/09/logo-generali.jpg"
//               alt="logo"
//               className="company__logo"
//             />
//           </Col>
//           <Col lg={1} md={2} sm={4} xs={6}>
//             <img src="https://www.rotulowcost.es/idb/ESTANCO%2050x50.jpg" alt="logo" className="company__logo" />
//           </Col>
//           <Col lg={1} md={2} sm={4} xs={6}>
//             <img
//               src="https://media-exp1.licdn.com/dms/image/C4D0BAQF7wysD16NtBg/company-logo_200_200/0/1623233501157?e=2159024400&v=beta&t=jFipr3VepKcsk8OVz7FLQ4sf8dbn9Oh1U8qNgojHlWI"
//               alt="logo"
//               className="company__logo"
//             />
//           </Col>
//           <Col lg={{ span: 1, offset: 0 }} md={{ span: 2, offset: 4 }} sm={3} xs={6}>
//             <img style={{ width: "45%", marginTop: 10 }} src={nemeson} alt="logo" className="company__logo" />
//           </Col>
//           <Col lg={1} md={2} sm={3} xs={6}>
//             <img
//               style={{ marginTop: 10 }}
//               src="https://play-lh.googleusercontent.com/2hyC5L1CphvMJFyfd89s1issBPINgC69aiwm_sok4yQMpasfQaS1rYZXDRPFQ6fEsm1w"
//               alt="logo"
//               className="company__logo"
//             />
//           </Col>
//         </Row>
//         <section className="company_phone">
//           <a href="tel:+34917364241">
//             <button id="SemiBold">LLamar a un comercial</button>
//           </a>
//         </section>
//       </section>
//       <section id="company__form" className="contact__form" style={{ minHeight: "100vh - 262px", textAlign: "center" }}>
//         <Container>
//           <h1 id="SemiBold">Pedir presupuesto</h1>
//           <form id="contact-form" onSubmit={sendEmail}>
//             <div className="form-line">
//               <input type="text" className="firstInput" placeholder="NOMBRE" name="name" />

//               <input
//                 type="email"
//                 className="secondInput"
//                 aria-describedby="emailHelp"
//                 name="mail"
//                 placeholder="CORREO"
//               />
//             </div>
//             <div className="form-group">
//               <textarea
//                 className="form-control contact__textarea"
//                 rows="7"
//                 placeholder="CONSULTA"
//                 name="message"
//               ></textarea>
//             </div>

//             <div className=" botones botones--contacto">
//               <p>
//                 <input type="checkbox" name="terms" required /> Acepto
//                 <u style={{ marginLeft: 3 }}>la política de privacidad</u>
//               </p>

//               <p id="pequeño">
//                 De acuerdo con la legislación vigente sobre Protección de Datos de Carácter Personal, le informamos que
//                 los datos que nos facilite se incluirán en el sistema de tratamiento de Corporación Auditiva InnoAudio,
//                 CIF: B88505953, Avenida de la Industria, 4, Edificio 1, Portal 2, Planta 3º, 28108 Alcobendas, Madrid.
//                 Tlf: 917 36 42 41, Correo electrónico: info@procorlab.es, con el propósito de dar respuesta a su
//                 solicitud. Los datos que usted proporcione los guardaremos mientras se mantenga la relación comercial o
//                 durante los años necesarios para cumplir con obligaciones legales. Corporación Auditiva InnoAudio le
//                 informa que tratará los datos de forma lícita, transparente y actualizada. Es por ello que Corporación
//                 Auditiva InnoAudio se compromete a adoptar las medidas razonables para que los datos se supriman o
//                 rectifiquen sin demora cuando sea necesario. Los datos no se cederán bajo ninguna circunstancia a
//                 terceros, excepto los casos donde exista una obligación legal. Puede ejercer sus derechos de acceso,
//                 rectificación, limitación, supresión, portabilidad y oposición al tratamiento de sus datos personales
//                 dirigiéndose por escrito a info@procorlab.es. Puede consultar la información adicional y detallada sobre
//                 nuestra política de privacidad en www.procorlab.es. Le informamos que puede revocar su consentimiento en
//                 cualquier momento enviando un correo electrónico a la dirección de correo electrónico:
//                 info@procorlab.es. Para cualquier reclamación puede dirigirse a www.aepd.es
//               </p>

//               <button type="submit" className="hero_link" style={{ textAlign: "center" }}>
//                 CONTACTAR
//               </button>
//             </div>
//           </form>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default Empresa;
