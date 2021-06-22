import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import antigenosSaliva from "../../assets/antigenos-saliva3.png";
import antigenos from "../../assets/antigenos3.png";
import pcr from "../../assets/pcr3.png";
import saliva from "../../assets/anticuerpos-saliva3.png";
import news from "../../assets/news.svg";
import "./Pages.css";

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container>
        <section className="articleSection">
          <Row>
            <Col xs={12} sm={6} lg={4}>
              <Link to="/necesito-test">
                <div
                  style={{
                    position: "relative",
                    textalign: "center",
                    height: "100%",
                  }}
                  id="article__destacadas"
                >
                  <article className="articleCard" style={{ backgroundImage: `url(${antigenosSaliva})` }}></article>
                  <h1 id="SemiBold">
                    Necesito<br></br> un<br></br> test
                  </h1>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <Link to="/tienda">
                <div style={{ position: "relative", textalign: "center", height: "100%" }} id="article__destacadas">
                  <article className="articleCard" style={{ backgroundImage: `url(${antigenos})` }}></article>
                  <h1 id="SemiBold">
                    Tienda<br></br> de test
                  </h1>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <Link to="/empresa-evento">
                <div style={{ position: "relative", textalign: "center", height: "100%" }} id="article__destacadas">
                  <article className="articleCard" style={{ backgroundImage: `url(${pcr})` }}></article>
                  <h1 id="SemiBold">
                    Soy una <br></br> empresa / <br></br>evento
                  </h1>
                </div>
              </Link>
            </Col>

            <Col xs={12} sm={6} lg={4}>
              <Link to="/info-covid">
                <div style={{ position: "relative", textalign: "center", height: "100%" }} id="article__destacadas">
                  <article className="articleCard" style={{ backgroundImage: `url(${news})` }}></article>
                  <h1 id="SemiBold">
                    Info <br></br>COVID
                  </h1>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <Link to="/redes">
                <div style={{ position: "relative", textalign: "center", height: "100%" }} id="article__destacadas">
                  <article className="articleCard" style={{ backgroundImage: `url(${saliva})` }}></article>
                  <h1 id="SemiBold">
                    Redes <br></br> Procor
                  </h1>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <Link to="/quienes-somos">
                <div style={{ position: "relative", textalign: "center", height: "100%" }} id="article__destacadas">
                  <article className="articleCard" style={{ backgroundImage: `url(${antigenosSaliva})` }}></article>
                  <h1 id="SemiBold">
                    Quiénes <br></br> somos
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

export default Home;
