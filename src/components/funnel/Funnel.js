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
      <section className="funnel">
        <h2 id="SemiBold">¿Por qué motivo necesitas hacerte un test?</h2>
        <section className="funnel_options">
          <Link className="funnel__link" to="/necesito-test/viaje">
            TENGO UN VIAJE
          </Link>
          <Link className="funnel__link" to="/necesito-test/contactopositivo">
            CONTACTO CON POSITIVOS
          </Link>
          <Link className="funnel__link" to="/necesito-test/otros">
            OTRO MOTIVO
          </Link>
        </section>
      </section>
    </Container>
  );
};

export default Funnel;
