import "./Layout.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Idioma</p>
      <Link to="/faqs">FAQ</Link>
      <Link to="/contacto">Contacto</Link>
    </footer>
  );
};

export default Footer;
