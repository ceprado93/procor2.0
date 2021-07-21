import { Link } from "react-router-dom";
import "./Pages.css";

const Politicas = () => {
  return (
    <>
      <div className="politicas__links">
        <Link id="SemiBold" to="/faqs">
          FAQS
        </Link>
        <Link id="SemiBold" to="/privacidad">
          Política de privacidad
        </Link>
        <Link id="SemiBold" to="/envios">
          Política de envios
        </Link>
        <Link id="SemiBold" to="/devoluciones">
          Política de devoluciones
        </Link>
        <Link id="SemiBold" to="/legal">
          Aviso legal
        </Link>
        <Link id="SemiBold" to="/aviso-cookies">
          Aviso de cookies
        </Link>
      </div>
    </>
  );
};

export default Politicas;
