import { useLayoutEffect } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "./Pages.css";
import imagen from "../../assets/pcr5.png";

const Empresa = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container>
        <section className="carousel__events">
          <Carousel style={{ height: 400 }}>
            <Carousel.Item>
              <img height={300} className="carousel__img" src={imagen} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img height={300} className="carousel__img" src={imagen} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img height={300} className="carousel__img" src={imagen} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
          <Row>
            <Col lg={{ span: 1, offset: 2 }} md={2} sm={3} xs={4}>
              <img
                // style={{ width: "30%", marginTop: 24 }}
                src="http://www.rfegolf.es/Fotografa/ESCUDOS%20Y%20LOGOTIPOS/Logo%20RFEG/_w/LOGO_DEF_RFEG_BAJA_RGB_jpg.jpg"
                alt="logo"
                className="company__logo"
              />
            </Col>
            <Col lg={1} md={2} sm={3} xs={4}>
              <img
                style={{ marginTop: 16 }}
                src="https://www.dammcorporate.com/sites/default/files/article/highlighted_image/Web%20corpo.jpg"
                alt="logo"
                className="company__logo"
              />
            </Col>
            <Col lg={1} md={2} sm={3} xs={4}>
              <img
                src="https://media-exp3.licdn.com/dms/image/C560BAQFgEdeFwQbLlg/company-logo_200_200/0/1606465200037?e=2159024400&v=beta&t=kxl8HSznmiX_fsFLkSSw4usNtGUEgUU5ZgA0ElnuDQA"
                alt="logo"
                className="company__logo"
              />
            </Col>
            <Col lg={1} md={2} sm={3} xs={4}>
              <img src="http://www.innoaudio.es/imagenes/logo-innoaudio.gif" alt="logo" className="company__logo" />
            </Col>
            <Col lg={1} md={2} sm={3} xs={4}>
              <img
                src="https://xn--espaasemueve-dhb.es/wp-content/uploads/2020/07/FEDERACI%C3%93N-ESPA%C3%91OLA-DE-BOXEO.jpg"
                alt="logo"
                className="company__logo"
              />
            </Col>
            <Col lg={1} md={2} sm={3} xs={4}>
              <img
                src="https://pbs.twimg.com/profile_images/923126162121003008/FLBsy9XK_400x400.jpg"
                alt="logo"
                className="company__logo"
              />
            </Col>
            <Col lg={{ span: 1, offset: 0 }} md={{ span: 2, offset: 4 }} sm={3} xs={4}>
              <img
                src="https://media-exp3.licdn.com/dms/image/C560BAQFgEdeFwQbLlg/company-logo_200_200/0/1606465200037?e=2159024400&v=beta&t=kxl8HSznmiX_fsFLkSSw4usNtGUEgUU5ZgA0ElnuDQA"
                alt="logo"
                className="company__logo"
              />
            </Col>
            <Col lg={1} md={2} sm={3} xs={4}>
              <img src="http://www.innoaudio.es/imagenes/logo-innoaudio.gif" alt="logo" className="company__logo" />
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Empresa;
