import { useState, useLayoutEffect } from "react";
import "./Pages.css";
import twitter from "../../assets/red1.png";
import linkedin from "../../assets/red2.png";
import instagram from "../../assets/red3.png";
import facebook from "../../assets/red4.png";
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
        <section className="social__section">
          {red === "instagram" ? (
            <img className="mockup__img" src={instagram} alt="red" />
          ) : red === "twitter" ? (
            <img className="mockup__img" src={twitter} alt="red" />
          ) : red === "linkedin" ? (
            <img className="mockup__img" src={linkedin} alt="red" />
          ) : (
            <img className="mockup__img" src={facebook} alt="red" />
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
      </Container>
    </>
  );
};

export default Redes;
