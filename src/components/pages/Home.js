import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import antigenosSaliva from "../../assets/antigenos-saliva3.png";
import antigenos from "../../assets/antigenos3.png";
import pcr from "../../assets/pcr3.png";
import instagram from "../../assets/red3.png";
import aboutImage from "../../assets/aboutImage.png";
import shopImage from "../../assets/shopImage.png";

import tienda from "../../assets/Tienda.jpg";
import redes from "../../assets/Redes.jpg";
import nosotros from "../../assets/SobreNosotros.jpg";
import noticias from "../../assets/Noticias.jpg";
import necesito from "../../assets/NecesitoTest.jpg";
import evento from "../../assets/EmpresaEvento.jpg";

import socialImage from "../../assets/Group112.png";
import conference from "../../assets/conferenceroom.jpeg";
import BookingService from "../../service/booking.service";

import news from "../../assets/news.svg";
import "./Pages.css";

const Home = () => {
  const bookingService = new BookingService();
  const [size, setSize] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    window.innerWidth < 576 && setSize(true);
  }, []);

  function getBookings(e) {
    bookingService
      .getBookings()
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }

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
                  <article className="articleCard" style={{ backgroundImage: `url(${necesito})` }}></article>
                  {size ? (
                    <h1 id="SemiBold">
                      Necesito un<br></br> test / cita
                    </h1>
                  ) : (
                    <h1 id="SemiBold">
                      Necesito<br></br> un<br></br> test / cita
                    </h1>
                  )}
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <Link to="/tienda">
                <div style={{ position: "relative", textalign: "center", height: "100%" }} id="article__destacadas">
                  <article className="articleCard" style={{ backgroundImage: `url(${tienda})` }}></article>
                  <h1 id="SemiBold">
                    Tienda<br></br> de test
                  </h1>
                </div>
              </Link>
            </Col>

            <Col xs={12} sm={6} lg={4}>
              <Link to="/info-covid">
                <div style={{ position: "relative", textalign: "center", height: "100%" }} id="article__destacadas">
                  <article className="articleCard" style={{ backgroundImage: `url(${noticias})` }}></article>
                  {size ? (
                    <h1 id="SemiBold">Info COVID</h1>
                  ) : (
                    <h1 id="SemiBold">
                      Info <br></br>COVID
                    </h1>
                  )}
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <Link to="/empresa-evento">
                <div style={{ position: "relative", textalign: "center", height: "100%" }} id="article__destacadas">
                  <article
                    className="articleCard"
                    style={{
                      backgroundImage: `url(${evento})`,
                      backgroundPosition: "55% 30%",
                    }}
                  ></article>
                  {size ? (
                    <h1 id="SemiBold">
                      Soy una <br></br> empresa / evento
                    </h1>
                  ) : (
                    <h1 id="SemiBold">
                      Soy una <br></br> empresa / <br></br>evento
                    </h1>
                  )}
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <Link to="/redes">
                <div style={{ position: "relative", textalign: "center", height: "100%" }} id="article__destacadas">
                  <article className="articleCard" style={{ backgroundImage: `url(${redes})` }}></article>

                  {size ? (
                    <h1 id="SemiBold">Redes Procor</h1>
                  ) : (
                    <h1 id="SemiBold">
                      Redes <br></br> Procor
                    </h1>
                  )}
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <Link to="/quienes-somos">
                <div style={{ position: "relative", textalign: "center", height: "100%" }} id="article__destacadas">
                  <article className="articleCard" style={{ backgroundImage: `url(${nosotros})` }}></article>

                  {size ? (
                    <h1 id="SemiBold">Quiénes somos</h1>
                  ) : (
                    <h1 id="SemiBold">
                      Quiénes <br></br> somos
                    </h1>
                  )}
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
