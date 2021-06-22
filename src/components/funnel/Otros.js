import { useLayoutEffect } from "react";

import { Container } from "react-bootstrap";
import "./Funnel.css";
import emailjs from "emailjs-com";

const Otros = () => {
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
    <Container>
      <section className="funnel__otros">
        <h2 id="SemiBold">CUÉNTANOS EL MOTIVO</h2>
        <section className="funnel_options">
          <form onSubmit={sendEmail}>
            <div className="form-line">
              <input type="text" className="firstInput" placeholder="NOMBRE" name="name" required />
              <input type="text" className="secondInput" placeholder="APELLIDO" name="lastName" required />
            </div>
            <div className="form-line">
              <input type="text" className="firstInput" placeholder="CORREO" name="mail" required />
              <input type="text" className="secondInput" placeholder="TELEFONO" name="phone" required />
            </div>
            <textarea rows="8" placeholder="CONSULTA" name="message"></textarea>
            <button type="submit" className="hero_link">
              ENVIAR
            </button>
          </form>
        </section>
      </section>
    </Container>
  );
};

export default Otros;
