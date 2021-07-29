import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { selectOption } from "../../redux/store";

import tienda from "../../assets/Tienda.jpg";
import redes from "../../assets/Redes.jpg";
import nosotros from "../../assets/SobreNosotros.jpg";
import noticias from "../../assets/Noticias.jpg";
import necesito from "../../assets/NecesitoTest.jpg";
import evento from "../../assets/EmpresaEvento.jpg";
import calendario from "../../assets/Calendario.jpg";

import Empresa_Evento2 from "../../assets/Empresa_Evento2.jpg";

import BookingService from "../../service/booking.service";

import "./Pages.css";

const Home = () => {
  const bookingService = new BookingService();
  const [size, setSize] = useState(false);
  const [blurImg, setBlurImg] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    window.innerWidth < 576 && setSize(true);
  }, []);

  const toogleOption = useSelector(selectOption);
  const dispatch = useDispatch();

  function sendAction() {
    dispatch({ type: "hide" });
  }

  function getBookings(e) {
    bookingService
      .getBookings()
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }

  const toggleBlurImg = () => {
    !blurImg && setBlurImg(true);
  };

  const keepBlurImg = () => {
    setBlurImg(true);
  };

  const rmvBlurImg = () => {
    setBlurImg(false);
  };

  return (
    <>
      {!toogleOption && (
        <div className="first__window">
          <div className="first__modal">
            <h2>
              ¿Necesitas un test?<br></br> Reserva ya tu cita
            </h2>
            <Link to="/reservas" onClick={() => sendAction()}>
              Pedir cita
            </Link>
            <Link to="/" onClick={() => sendAction()}>
              Continuar navegando
            </Link>
          </div>
        </div>
      )}
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
                  <article className="articleCard" style={{ backgroundImage: `url(${calendario})` }}>
                    <div className="articleCard__midBlur"></div>
                  </article>
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
                  <article className="articleCard" style={{ backgroundImage: `url(${tienda})` }}>
                    <div className="articleCard__midBlur"></div>
                  </article>
                  <h1 id="SemiBold">
                    Tienda<br></br> de test
                  </h1>
                </div>
              </Link>
            </Col>

            <Col xs={12} sm={6} lg={4}>
              <Link to="/info-covid">
                <div style={{ position: "relative", textalign: "center", height: "100%" }} id="article__destacadas">
                  <article className="articleCard" style={{ backgroundImage: `url(${noticias})` }}>
                    <div className="articleCard__midBlur"></div>
                  </article>
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
                <div style={{ position: "relative", textalign: "center", height: "100%" }} id="article__destacadas" onMouseEnter={() => toggleBlurImg()} onMouseLeave={() => rmvBlurImg()}>
                  <article
                    className="articleCard"
                    style={{
                      backgroundImage: blurImg ? `url(${Empresa_Evento2})` : `url(${evento})`,
                      backgroundPosition: "55% 30%",
                    }}
                  >
                    <div className="articleCard__highBlur"></div>
                  </article>
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
                  <article className="articleCard" style={{ backgroundImage: `url(${redes})` }}>
                    <div className="articleCard__midBlur"></div>
                  </article>

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
                  <article className="articleCard" style={{ backgroundImage: `url(${nosotros})` }}>
                    <div className="articleCard__midBlur"></div>
                  </article>

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
