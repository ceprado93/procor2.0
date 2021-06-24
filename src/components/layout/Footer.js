import { useState } from "react";
import "./Layout.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showlanguage, setShowLanguage] = useState(false);

  function toogleLanguage() {
    showlanguage ? setShowLanguage(false) : setShowLanguage(true);
  }
  return (
    <>
      <footer>
        <button id="SemiBold" onClick={() => toogleLanguage()}>
          IDIOMA
        </button>
        <Link id="SemiBold" to="/faqs">
          FAQ
        </Link>
        <Link id="SemiBold" to="/contacto">
          CONTACTO
        </Link>
      </footer>
      {showlanguage && (
        <div className="language__box" onClick={() => toogleLanguage()}>
          <p>Español 🇪🇸</p>
        </div>
      )}
    </>
  );
};

export default Footer;
