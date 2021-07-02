import { useLayoutEffect } from "react";
import emailjs from "emailjs-com";

import { Carousel, Container, Row, Col } from "react-bootstrap";
import "./Pages.css";
import imagen from "../../assets/pcr5.png";
import imagengolf from "../../assets/golf.jpg";

const Empresa = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  return (
    <>
      <Container>
        <section className="carousel__events">
          <Carousel style={{ height: 700 }}>
            <Carousel.Item>
              <img height={300} className="carousel__img" src={imagengolf} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img height={300} className="carousel__img" src={imagen} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img height={300} className="carousel__img" src={imagen} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
          <Row>
            <Col lg={{ span: 1, offset: 2 }} md={2} sm={3} xs={4}>
              <img
                // style={{ width: "30%", marginTop: 24 }}
                src="https://mediterraneo.golf/cont-mediterraneo/uploads/2017/01/LOGO_DEF_RFEG_BAJA_RGB_jpg.jpg"
                alt="logo"
                className="company__logo"
              />
            </Col>
            <Col lg={1} md={2} sm={3} xs={4}>
              <img
                style={{ marginTop: 16 }}
                src="https://www.dammcorporate.com/sites/default/files/article/highlighted_image/Web%20corpo.jpg"
                alt="logo"
                className="company__logo"
              />
            </Col>
            <Col lg={1} md={2} sm={3} xs={4}>
              <img
                src="https://media-exp3.licdn.com/dms/image/C560BAQFgEdeFwQbLlg/company-logo_200_200/0/1606465200037?e=2159024400&v=beta&t=kxl8HSznmiX_fsFLkSSw4usNtGUEgUU5ZgA0ElnuDQA"
                alt="logo"
                className="company__logo"
              />
            </Col>
            <Col lg={1} md={2} sm={3} xs={4}>
              <img src="http://www.innoaudio.es/imagenes/logo-innoaudio.gif" alt="logo" className="company__logo" />
            </Col>
            <Col lg={1} md={2} sm={3} xs={4}>
              <img
                src="https://xn--espaasemueve-dhb.es/wp-content/uploads/2020/07/FEDERACI%C3%93N-ESPA%C3%91OLA-DE-BOXEO.jpg"
                alt="logo"
                className="company__logo"
              />
            </Col>
            <Col lg={1} md={2} sm={3} xs={4}>
              <img
                src="https://pbs.twimg.com/profile_images/923126162121003008/FLBsy9XK_400x400.jpg"
                alt="logo"
                className="company__logo"
              />
            </Col>
            <Col lg={{ span: 1, offset: 0 }} md={{ span: 2, offset: 4 }} sm={3} xs={4}>
              <img
                src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/xs5ccg7neyeskyk3prgg"
                alt="logo"
                className="company__logo"
              />
            </Col>
            <Col lg={1} md={2} sm={3} xs={4}>
              <img
                src="https://pbs.twimg.com/profile_images/1214492024021409792/njK08MuY_400x400.jpg"
                alt="logo"
                className="company__logo"
              />
            </Col>
          </Row>
        </section>
        <section className="company_phone">
          <a href="tel:+34917364241">
            <button id="SemiBold">LLamar a un comercial</button>
          </a>
        </section>
        <section className="contact__form" style={{ minHeight: "100vh - 262px", textAlign: "center" }}>
          <h1 id="SemiBold">Pedir presupuesto</h1>
          <form id="contact-form" onSubmit={sendEmail}>
            <div className="form-line">
              <input type="text" className="firstInput" placeholder="NOMBRE" name="name" />

              <input
                type="email"
                className="secondInput"
                aria-describedby="emailHelp"
                name="mail"
                placeholder="CORREO"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control contact__textarea"
                rows="7"
                placeholder="CONSULTA"
                name="message"
              ></textarea>
            </div>

            <div className=" botones botones--contacto">
              <p>
                <input type="checkbox" name="terms" required /> Acepto
                <u style={{ marginLeft: 3 }}>la política de privacidad</u>
              </p>

              <p id="pequeño">
                De acuerdo con la legislación vigente sobre Protección de Datos de Carácter Personal, le informamos que
                los datos que nos facilite se incluirán en el sistema de tratamiento de Corporación Auditiva InnoAudio,
                CIF: B88505953, Avenida de la Industria, 4, Edificio 1, Portal 2, Planta 3º, 28108 Alcobendas, Madrid.
                Tlf: 917 36 42 41, Correo electrónico: info@procorlab.es, con el propósito de dar respuesta a su
                solicitud. Los datos que usted proporcione los guardaremos mientras se mantenga la relación comercial o
                durante los años necesarios para cumplir con obligaciones legales. Corporación Auditiva InnoAudio le
                informa que tratará los datos de forma lícita, transparente y actualizada. Es por ello que Corporación
                Auditiva InnoAudio se compromete a adoptar las medidas razonables para que los datos se supriman o
                rectifiquen sin demora cuando sea necesario. Los datos no se cederán bajo ninguna circunstancia a
                terceros, excepto los casos donde exista una obligación legal. Puede ejercer sus derechos de acceso,
                rectificación, limitación, supresión, portabilidad y oposición al tratamiento de sus datos personales
                dirigiéndose por escrito a info@procorlab.es. Puede consultar la información adicional y detallada sobre
                nuestra política de privacidad en www.procorlab.es. Le informamos que puede revocar su consentimiento en
                cualquier momento enviando un correo electrónico a la dirección de correo electrónico:
                info@procorlab.es. Para cualquier reclamación puede dirigirse a www.aepd.es
              </p>

              <button type="submit" className="hero_link" style={{ textAlign: "center" }}>
                CONTACTAR
              </button>
            </div>
          </form>
        </section>
      </Container>
    </>
  );
};

export default Empresa;
