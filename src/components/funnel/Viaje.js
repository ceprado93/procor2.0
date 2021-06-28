import { useState, useEffect, useLayoutEffect } from "react";
import { Container } from "react-bootstrap";
import "./Funnel.css";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import antigenosSaliva from "../../assets/antigenos-saliva3.png";
import pcr from "../../assets/pcr5.png";

const Viaje = () => {
  const [showPlaceModal, setShowPlaceModal] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);
  const [showFinalModal, setShowFinalModal] = useState(false);
  const [showCountrySelect, setShowCountrySelect] = useState(false);
  const [showTypeSelect, setShowTypeSelect] = useState(false);
  const [date, setDate] = useState(undefined);
  const [place, setPlace] = useState(undefined);
  const [type, setType] = useState(undefined);
  const [thanks, setThanks] = useState(false);
  const [secondScreen, setSecondScreen] = useState(undefined);
  const [filled, setFilled] = useState({ place: false, date: false, type: false });

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

  function selectDate(e) {
    setDate(e.target.value);
  }

  function selectType(e) {
    setType(e.target.innerHTML);
  }

  function tooglePlaceModal() {
    showPlaceModal ? setShowPlaceModal(false) : setShowPlaceModal(true);
  }

  function toogleDateModal() {
    showDateModal ? setShowDateModal(false) : setShowDateModal(true);
  }

  const toogleFinalModal = () => {
    showFinalModal ? setThanks(true) : setShowFinalModal(true);
  };

  const changeScreen = () => {
    setSecondScreen(true);
  };

  const toggleCountrySelect = () => {
    showCountrySelect ? setShowCountrySelect(false) : setShowCountrySelect(true);
  };

  const toggleTypeSelect = () => {
    showTypeSelect ? setShowTypeSelect(false) : setShowTypeSelect(true);
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
        <h2 id="SemiBold">PROCOR VIAJES</h2>
        <section className="funnel_options">
          {/* {place ? (
            <button
              className={filled.place ? "funnel__link filled" : "funnel__link"}
              onClick={() => tooglePlaceModal()}
            >
              {place}
            </button>
          ) : (
            <button
              className={filled.place ? "funnel__link filled" : "funnel__link"}
              onClick={() => tooglePlaceModal()}
            >
              PAIS DE DESTINO
            </button>
          )} */}
          {place ? (
            <button
              className={filled.place ? "country__select filled" : "country__select"}
              onClick={() => toggleCountrySelect()}
            >
              {place}
              {showCountrySelect && (
                <div className="country__select-div">
                  <ul>
                    <li onClick={(e) => selectPlace(e)}> PAIS DE DESTINO</li>
                    <li onClick={(e) => selectPlace(e)}>España</li>
                    <li onClick={(e) => selectPlace(e)}>Portugal</li>
                    <li onClick={(e) => selectPlace(e)}>Italia</li>
                    <li onClick={(e) => selectPlace(e)}>Perù</li>
                    <li onClick={(e) => selectPlace(e)}>Luxemburgo</li>
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
              PAIS DE DESTINO
              {showCountrySelect && (
                <div className="country__select-div">
                  <ul>
                    <li onClick={(e) => selectPlace(e)}> PAIS DE DESTINO</li>
                    <li onClick={(e) => selectPlace(e)}>España</li>
                    <li onClick={(e) => selectPlace(e)}>Portugal</li>
                    <li onClick={(e) => selectPlace(e)}>Italia</li>
                    <li onClick={(e) => selectPlace(e)}>Perù</li>
                    <li onClick={(e) => selectPlace(e)}>Luxemburgo</li>
                    <li onClick={(e) => selectPlace(e)}>Otro</li>
                  </ul>
                </div>
              )}
            </button>
          )}
          {date ? (
            <button className={filled.date ? " filled" : ""} onClick={() => toogleDateModal()}>
              {date}
            </button>
          ) : (
            <button className={filled.date ? " filled" : ""} onClick={() => toogleDateModal()}>
              FECHA DEL VUELO
            </button>
          )}
          {type ? (
            <button className={filled.type ? "type__select filled" : "type__select"} onClick={() => toggleTypeSelect()}>
              {type}
              {showTypeSelect && (
                <div className="type__select-div">
                  <ul>
                    <li onClick={(e) => selectType(e)}> ALOJAMIENTO</li>
                    <li onClick={(e) => selectType(e)}>Casa Propia</li>
                    <li onClick={(e) => selectType(e)}>Casa rural</li>
                    <li onClick={(e) => selectType(e)}>Hotel</li>
                    <li onClick={(e) => selectType(e)}>Airbnb</li>
                    <li onClick={(e) => selectType(e)}>Otro</li>
                  </ul>
                </div>
              )}
            </button>
          ) : (
            <button className={filled.type ? "type__select filled" : "type__select"} onClick={() => toggleTypeSelect()}>
              ALOJAMIENTO
              {showTypeSelect && (
                <div className="type__select-div">
                  <ul>
                    <li onClick={(e) => selectType(e)}> ALOJAMIENTO</li>
                    <li onClick={(e) => selectType(e)}>Casa Propia</li>
                    <li onClick={(e) => selectType(e)}>Casa rural</li>
                    <li onClick={(e) => selectType(e)}>Hotel</li>
                    <li onClick={(e) => selectType(e)}>Airbnb</li>
                    <li onClick={(e) => selectType(e)}>Otro</li>
                  </ul>
                </div>
              )}
            </button>
          )}

          {date && place && type ? <button onClick={() => changeScreen()}>CONFIRMAR</button> : null}
        </section>
      </section>

      {showPlaceModal && (
        <section className="funnel__modal">
          <form onSubmit={(e) => tooglePlaceModal(e)}>
            <input type="text" onChange={(e) => selectPlace(e)} placeholder="ESCRIBE TU DESTINO..." />
            <button type="submit">CONFIRMAR</button>
          </form>
        </section>
      )}

      {showDateModal && (
        <section className="funnel__modal">
          <form onSubmit={(e) => toogleDateModal(e)}>
            <input type="text" onChange={(e) => selectDate(e)} placeholder="FECHA DEL VUELO" />
            <button type="submit">CONFIRMAR</button>
          </form>
        </section>
      )}

      <section className={secondScreen ? "funnel" : "hide"}>
        {place === "España" ||
        place === "Portugal" ||
        place === "Italia" ||
        place === "Perù" ||
        place === "Luxemburgo" ? (
          <>
            <div>
              <h2 id="SemiBold">Antigenos de saliva</h2>
              <p>Creemos que este test es perfecto para ti</p>
            </div>
            <img className="test__img" src={antigenosSaliva} alt="test" />
            <section className="funnel_options">
              <button className="funnel__link" onClick={() => toogleFinalModal()}>
                RESERVAR CITA
              </button>
            </section>
          </>
        ) : (
          <>
            <div>
              <h2 id="SemiBold">Pcr saliva</h2>
              <p>Creemos que este test es perfecto para ti</p>
            </div>
            <img className="test__img" src={pcr} alt="test" />
            <section className="funnel_options">
              <button
                className="funnel__link"
                style={{ backgroundColor: "#313131", color: "white", width: "30%" }}
                onClick={() => toogleFinalModal()}
              >
                RESERVAR CITA
              </button>
            </section>
          </>
        )}
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
            <input type="text" name="postal" placeholder="CODIGO POSTAL" />

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
