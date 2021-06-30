import { useState, useEffect, useLayoutEffect } from "react";
import { Container } from "react-bootstrap";
import "./Funnel.css";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import antigenosSaliva from "../../assets/antigenos-saliva3.png";
import BookingService from "../../service/booking.service";

const Viaje = () => {
  const [showFinalModal, setShowFinalModal] = useState(false);
  const [date, setDate] = useState(undefined);
  const [showCountrySelect, setShowCountrySelect] = useState(false);
  const [showDateSelect, setShowDateSelect] = useState(false);
  const [showTypeSelect, setShowTypeSelect] = useState(false);
  const [place, setPlace] = useState(undefined);
  const [type, setType] = useState(undefined);
  const [thanks, setThanks] = useState(false);
  const [secondScreen, setSecondScreen] = useState(undefined);

  const [filled, setFilled] = useState({ place: false, date: false, type: false });

  const bookingService = new BookingService();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (type) {
      setFilled((filled) => {
        return {
          ...filled,
          type: true,
        };
      });
    } else if (date) {
      setFilled((filled) => {
        return {
          ...filled,
          date: true,
        };
      });
    } else if (place) {
      setFilled((filled) => {
        return {
          ...filled,
          place: true,
        };
      });
    }
  }, [place, date, type]);

  function selectPlace(e) {
    setPlace(e.target.innerHTML);
  }

  const toggleCountrySelect = () => {
    showCountrySelect ? setShowCountrySelect(false) : setShowCountrySelect(true);
  };

  const toggleTypeSelect = () => {
    showTypeSelect ? setShowTypeSelect(false) : setShowTypeSelect(true);
  };

  const toggleDateSelect = () => {
    showDateSelect ? setShowDateSelect(false) : setShowDateSelect(true);
  };

  function selectDate(e) {
    setDate(e.target.innerHTML);
  }

  function selectType(e) {
    setType(e.target.innerHTML);
  }

  const toogleFinalModal = () => {
    showFinalModal ? setThanks(true) : setShowFinalModal(true);
  };

  const changeScreen = () => {
    setSecondScreen(true);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_bqb77iz", "template_36zqy7d", e.target, "user_fkunRtbDV9NVetYNprjoI").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    setThanks(true);
  }

  return (
    <Container>
      <section className={secondScreen ? "hide" : "funnel"}>
        <h2 id="SemiBold">CONTACTO CON POSITIVO</h2>
        <section className="funnel_options">
          {place ? (
            <button
              className={filled.place ? "country__select filled" : "country__select"}
              onClick={() => toggleCountrySelect()}
            >
              {place}
              {showCountrySelect && (
                <div className="country__select-div">
                  <ul>
                    <li onClick={(e) => selectPlace(e)}> RELACIÓN CON EL POSITIVO</li>
                    <li onClick={(e) => selectPlace(e)}>Pareja</li>
                    <li onClick={(e) => selectPlace(e)}>Familiar</li>
                    <li onClick={(e) => selectPlace(e)}>Amigo</li>
                    <li onClick={(e) => selectPlace(e)}>Compañero</li>
                    <li onClick={(e) => selectPlace(e)}>Otro</li>
                  </ul>
                </div>
              )}
            </button>
          ) : (
            <button
              className={filled.place ? "country__select filled" : "country__select"}
              onClick={() => toggleCountrySelect()}
            >
              RELACIÓN CON EL POSITIVO
              {showCountrySelect && (
                <div className="country__select-div">
                  <ul>
                    <li onClick={(e) => selectPlace(e)}> RELACIÓN CON EL POSITIVO</li>
                    <li onClick={(e) => selectPlace(e)}>Pareja</li>
                    <li onClick={(e) => selectPlace(e)}>Familiar</li>
                    <li onClick={(e) => selectPlace(e)}>Amigo</li>
                    <li onClick={(e) => selectPlace(e)}>Compañero</li>
                    <li onClick={(e) => selectPlace(e)}>Otro</li>
                  </ul>
                </div>
              )}
            </button>
          )}
          {date ? (
            <button className={filled.date ? "date__select filled" : "date__select"} onClick={() => toggleDateSelect()}>
              {date}
              {showDateSelect && (
                <div className="type__select-div">
                  <ul>
                    <li onClick={(e) => selectDate(e)}> DÍAS DESDE EL CONTACTO</li>
                    <li onClick={(e) => selectDate(e)}>1</li>
                    <li onClick={(e) => selectDate(e)}>2</li>
                    <li onClick={(e) => selectDate(e)}>3</li>
                    <li onClick={(e) => selectDate(e)}>4</li>
                    <li onClick={(e) => selectDate(e)}>5</li>
                    <li onClick={(e) => selectDate(e)}>6</li>
                    <li onClick={(e) => selectDate(e)}>7</li>
                    <li onClick={(e) => selectDate(e)}>8</li>
                    <li onClick={(e) => selectDate(e)}>9</li>
                    <li onClick={(e) => selectDate(e)}>10</li>
                  </ul>
                </div>
              )}
            </button>
          ) : (
            <button className={filled.date ? "date__select filled" : "date__select"} onClick={() => toggleDateSelect()}>
              DÍAS DESDE EL CONTACTO
              {showDateSelect && (
                <div className="date__select-div">
                  <ul>
                    <li onClick={(e) => selectDate(e)}> DÍAS DESDE EL CONTACTO</li>
                    <li onClick={(e) => selectDate(e)}>1</li>
                    <li onClick={(e) => selectDate(e)}>2</li>
                    <li onClick={(e) => selectDate(e)}>3</li>
                    <li onClick={(e) => selectDate(e)}>4</li>
                    <li onClick={(e) => selectDate(e)}>5</li>
                    <li onClick={(e) => selectDate(e)}>6</li>
                    <li onClick={(e) => selectDate(e)}>7</li>
                    <li onClick={(e) => selectDate(e)}>8</li>
                    <li onClick={(e) => selectDate(e)}>9</li>
                    <li onClick={(e) => selectDate(e)}>10</li>
                  </ul>
                </div>
              )}
            </button>
          )}
          {type ? (
            <button className={filled.type ? "type__select filled" : "type__select"} onClick={() => toggleTypeSelect()}>
              {type}
              {showTypeSelect && (
                <div className="type__select-div">
                  <ul>
                    <li onClick={(e) => selectType(e)}> SÍNTOMAS</li>

                    <li onClick={(e) => selectType(e)}>Si</li>
                    <li onClick={(e) => selectType(e)}>No</li>
                  </ul>
                </div>
              )}
            </button>
          ) : (
            <button className={filled.type ? "type__select filled" : "type__select"} onClick={() => toggleTypeSelect()}>
              SÍNTOMAS
              {showTypeSelect && (
                <div className="type__select-div">
                  <ul>
                    <li onClick={(e) => selectType(e)}> SÍNTOMAS</li>
                    <li onClick={(e) => selectType(e)}>Si</li>
                    <li onClick={(e) => selectType(e)}>No</li>
                  </ul>
                </div>
              )}
            </button>
          )}

          {date && place && type ? <button onClick={() => changeScreen()}>CONFIRMAR</button> : null}
        </section>
      </section>

      <section className={secondScreen ? "funnel" : "hide"}>
        <div>
          <h2 id="SemiBold">Antigenos de saliva</h2>
          <p>Creemos que este test es perfecto para ti</p>
        </div>
        <img className="test__img" src={antigenosSaliva} alt="test" />
        <section className="funnel_options">
          <button
            className="funnel__link"
            style={{ backgroundColor: "#313131", color: "white", width: "30%" }}
            onClick={() => toogleFinalModal()}
          >
            RESERVAR CITA
          </button>
        </section>
      </section>

      {showFinalModal && (
        <section className="funnel__modal">
          <form className={thanks ? "hide" : ""} onSubmit={(e) => sendEmail(e)}>
            <input
              type="text"
              name="place"
              value={place}
              style={{ visibility: "hidden", padding: 0, marginTop: 0, height: 1 }}
            />
            <input
              type="text"
              name="date"
              value={date}
              style={{ visibility: "hidden", padding: 0, marginTop: 0, height: 1 }}
            />
            <input
              type="text"
              name="type"
              value={type}
              style={{ visibility: "hidden", padding: 0, marginTop: 0, height: 1 }}
            />
            <input type="text" name="name" placeholder="NOMBRE Y APELLIDOS" />
            <input type="text" name="birth" placeholder="FECHA DE NACIMIENTO" />
            <input type="text" name="phone" placeholder="TELEFONO DE CONTACTO" />
            <input type="text" name="mail" placeholder="CORREO ELECTRONICO" />
            <input type="text" name="dni" placeholder="DNI O PASAPORTE" />

            <button type="submit">CONFIRMAR</button>
          </form>
        </section>
      )}

      {thanks && (
        <section className="funnel__modal">
          <div>
            <p>Gracias por tu reserva,</p>
            <p>en breve nos pondremos en</p>
            <p>contacto contigo!</p>
            <Link to="/">Confirmar</Link>
          </div>
        </section>
      )}
    </Container>
  );
};

export default Viaje;
