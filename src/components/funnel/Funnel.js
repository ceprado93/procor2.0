import { useLayoutEffect } from "react";
import { Container } from "react-bootstrap";
import "./Funnel.css";
import { Link } from "react-router-dom";

const Funnel = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <section className="funnel" style={{ padding: "5rem 0" }}>
        <h2 className="funnel__title">¿Sabes qué test necesitas?</h2>
        <section className="funnel_options">
          <Link className="reserva__link" to="/reservas" style={{ marginBottom: "2rem", padding: "0.8rem 2rem" }}>
            RESERVA TU CITA
          </Link>
        </section>
        <h2 className="funnel__title">
          En caso contrario, ¿Por qué motivo <br></br> necesitas hacerte un test?
        </h2>
        <section className="funnel_options">
          <Link to="/necesito-test/viaje">TENGO UN VIAJE</Link>
          <Link to="/necesito-test/contactopositivo">CONTACTO CON POSITIVOS</Link>
          <Link to="/necesito-test/otros">OTRO MOTIVO</Link>
        </section>
      </section>
    </Container>
  );
};

export default Funnel;
