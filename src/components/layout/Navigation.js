import { useState, useContext } from "react";
import "./Layout.css";
import logo from "../../assets/bolas.svg";
import carrito from "../../assets/Carrito.png";
import burger from "../../assets/burger.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";

const Navigation = () => {
  const { openCart } = useContext(ShopContext);

  const [showMenu, setShowMenu] = useState(false);
  const [showlanguage, setShowLanguage] = useState(false);

  function toogleLanguage() {
    showlanguage ? setShowLanguage(false) : setShowLanguage(true);
  }

  function toogleMenu() {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }

  function click(event) {
    openCart();
  }
  return (
    <>
      {!showMenu && (
        <div className="navigation">
          <img onClick={() => toogleMenu()} className="navigation_icon" src={burger} alt="logo" />
          <Link to="/">
            <img className="navigation_logo" src={logo} alt="logo" />
          </Link>
          <img className="navigation_icon1" onClick={click} src={carrito} alt="logo" />
        </div>
      )}

      {showMenu && (
        <section className="openMenu">
          <button className="menuButton__close" onClick={() => toogleMenu()}>
            X
          </button>
          <div>
            <Link to="/necesito-test" id="SemiBold" onClick={() => toogleMenu()}>
              Necesito un test
            </Link>
            <Link to="/tienda" id="SemiBold" onClick={() => toogleMenu()}>
              Nuestro e-commerce
            </Link>
            <Link to="/empresa-evento" id="SemiBold" onClick={() => toogleMenu()}>
              Soy una empresa / evento
            </Link>
            <Link to="/info-covid" id="SemiBold" onClick={() => toogleMenu()}>
              Info COVID
            </Link>
            <Link to="/redes" id="SemiBold" onClick={() => toogleMenu()}>
              Redes Procor
            </Link>
            <Link to="/quienes-somos" id="SemiBold" onClick={() => toogleMenu()}>
              Quienes somos
            </Link>
          </div>
          <footer>
            <button id="SemiBold" onClick={() => toogleLanguage()}>
              IDIOMA
            </button>
            <Link id="SemiBold" to="/faqs" onClick={() => toogleMenu()}>
              FAQ
            </Link>
            <Link id="SemiBold" to="/contacto" onClick={() => toogleMenu()}>
              CONTACTO
            </Link>
          </footer>
          {showlanguage && (
            <div className="language__box" onClick={() => toogleLanguage()}>
              <p>Español 🇪🇸</p>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default Navigation;
