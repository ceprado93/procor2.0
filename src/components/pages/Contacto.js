import { useLayoutEffect } from "react";
import emailjs from "emailjs-com";
import { Container } from "react-bootstrap";
import "./Pages.css";

const Contact = () => {
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
    <section className="contact__form">
      <Container>
        <form id="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="NOMBRE" name="name" />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              name="mail"
              placeholder="CORREO"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control contact__textarea"
              rows="5"
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
              cualquier momento enviando un correo electrónico a la dirección de correo electrónico: info@procorlab.es.
              Para cualquier reclamación puede dirigirse a www.aepd.es
            </p>

            <button type="submit" className="hero_link">
              CONTACTAR
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Contact;
