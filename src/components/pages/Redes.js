import { useState, useLayoutEffect } from "react";
import "./Pages.css";
import twitter from "../../assets/red1.png";
import twitterMovil from "../../assets/red1Movil.png";
import linkedin from "../../assets/red2.png";
import linkedinMovil from "../../assets/red2Movil.png";
import instagram from "../../assets/red3.png";
import instagramMovil from "../../assets/red3Movil.png";
import facebook from "../../assets/red4.png";
import facebookMovil from "../../assets/red4Movil.png";
import twitterLogo from "../../assets/twitter.svg";
import linkedinLogo from "../../assets/linkedin.svg";
import instagramLogo from "../../assets/instagram.svg";
import facebookLogo from "../../assets/facebook.svg";
import { Container } from "react-bootstrap";

const Redes = () => {
  const [red, setRed] = useState("instagram");

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toogleMockUp = (e) => {
    setRed(e);
  };
  return (
    <>
      <Container>
        <div className="bs">
          <section className="social__section">
            {red === "instagram" ? (
              <a href="https://www.instagram.com/procorlab/" target="_blank" rel="noopener noreferrer">
                <img className="mockup__img" src={instagram} alt="red" />
              </a>
            ) : red === "twitter" ? (
              <a href="https://twitter.com/Procorlab" target="_blank" rel="noopener noreferrer">
                <img className="mockup__img" src={twitter} alt="red" />
              </a>
            ) : red === "linkedin" ? (
              <a href="https://www.linkedin.com/company/procorlab/" target="_blank" rel="noopener noreferrer">
                <img className="mockup__img" src={linkedin} alt="red" />
              </a>
            ) : (
              <a href="https://www.facebook.com/Procorlab-100801542046256/" target="_blank" rel="noopener noreferrer">
                <img className="mockup__img" src={facebook} alt="red" />
              </a>
            )}
            <div className="social__menu">
              <button onClick={() => toogleMockUp("twitter")}>
                <img className="social__menu-logo" src={twitterLogo} alt="logo-red" />
              </button>
              <button onClick={() => toogleMockUp("linkedin")}>
                <img className="social__menu-logo" src={linkedinLogo} alt="logo-red" />
              </button>
              <button onClick={() => toogleMockUp("instagram")}>
                <img className="social__menu-logo" src={instagramLogo} alt="logo-red" />
              </button>
              <button onClick={() => toogleMockUp("facebook")}>
                <img className="social__menu-logo" src={facebookLogo} alt="logo-red" />
              </button>
            </div>
          </section>
        </div>
        <div className="ss">
          <section className="social__section">
            {red === "instagram" ? (
              <a href="https://www.instagram.com/procorlab/" target="_blank" rel="noopener noreferrer">
                <img className="mockup__img" src={instagramMovil} alt="red" />
              </a>
            ) : red === "twitter" ? (
              <a href="https://twitter.com/Procorlab" target="_blank" rel="noopener noreferrer">
                <img className="mockup__img" src={twitterMovil} alt="red" />
              </a>
            ) : red === "linkedin" ? (
              <a href="https://www.linkedin.com/company/procorlab/" target="_blank" rel="noopener noreferrer">
                <img className="mockup__img" src={linkedinMovil} alt="red" />
              </a>
            ) : (
              <a href="https://www.facebook.com/Procorlab-100801542046256/" target="_blank" rel="noopener noreferrer">
                <img className="mockup__img" src={facebookMovil} alt="red" />
              </a>
            )}
            <div className="social__menu">
              <button onClick={() => toogleMockUp("twitter")}>
                <img className="social__menu-logo" src={twitterLogo} alt="logo-red" />
              </button>
              <button onClick={() => toogleMockUp("linkedin")}>
                <img className="social__menu-logo" src={linkedinLogo} alt="logo-red" />
              </button>
              <button onClick={() => toogleMockUp("instagram")}>
                <img className="social__menu-logo" src={instagramLogo} alt="logo-red" />
              </button>
              <button onClick={() => toogleMockUp("facebook")}>
                <img className="social__menu-logo" src={facebookLogo} alt="logo-red" />
              </button>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
};

export default Redes;
