import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./Pages.css";

import antigenosSaliva from "../../assets/antigenos-saliva3.png";
import antigenos from "../../assets/antigenos3.png";
import pcr from "../../assets/pcr3.png";
import saliva from "../../assets/anticuerpos-saliva3.png";
import serologico from "../../assets/serologico3.png";

const Tienda = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container>
        <section className="articleSection">
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Link to="/antigenos-saliva">
                <div style={{ position: "relative", textalign: "center", height: "100%" }} id="article__destacadas">
                  <article className="articleCard" style={{ backgroundImage: `url(${antigenosSaliva})` }}></article>
                  <h1 id="SemiBold">
                    Antigenos<br></br> saliva
                  </h1>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Link to="/pcr-saliva">
                <div style={{ position: "relative", textalign: "center", height: "100%" }} id="article__destacadas">
                  <article className="articleCard" style={{ backgroundImage: `url(${pcr})` }}></article>
                  <h1 id="SemiBold">
                    PCR<br></br> saliva
                  </h1>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Link to="/anticuerpos-saliva">
                <div style={{ position: "relative", textalign: "center", height: "100%" }} id="article__destacadas">
                  <article className="articleCard" style={{ backgroundImage: `url(${serologico})` }}></article>
                  <h1 id="SemiBold">
                    Anticuerpos <br></br> saliva
                  </h1>
                </div>
              </Link>
            </Col>

            <Col xs={12} sm={6} md={4}>
              <Link to="/antigenos-25">
                <div style={{ position: "relative", textalign: "center", height: "100%" }} id="article__destacadas">
                  <article className="articleCard" style={{ backgroundImage: `url(${antigenos})` }}></article>
                  <h1 id="SemiBold">
                    Pack 25<br></br> [Antigenos]
                  </h1>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Link to="/igm-igg">
                <div style={{ position: "relative", textalign: "center", height: "100%" }} id="article__destacadas">
                  <article className="articleCard" style={{ backgroundImage: `url(${saliva})` }}></article>
                  <h1 id="SemiBold">
                    IGM / <br></br> IGG
                  </h1>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Link to="/necesito-test">
                <div style={{ position: "relative", textalign: "center", height: "100%" }} id="article__destacadas">
                  <article className="articleCard" style={{ backgroundImage: `url(${serologico})` }}></article>
                  <h1 id="SemiBold">
                    NO SE <br></br>CUAL NECESITO
                  </h1>
                </div>
              </Link>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Tienda;
