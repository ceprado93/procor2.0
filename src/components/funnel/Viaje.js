import { useState, useEffect, useLayoutEffect } from "react";
import { Container } from "react-bootstrap";
import "./Funnel.css";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import antigenosSaliva from "../../assets/antigenos-saliva3.png";
import pcr from "../../assets/pcr5.png";
import BookingService from "../../service/booking.service";
import { SequentialIDGenerator } from "styletron-engine-atomic";

const Viaje = () => {
  const [showPlaceModal, setShowPlaceModal] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);
  const [showFinalModal, setShowFinalModal] = useState(false);
  const [showCountrySelect, setShowCountrySelect] = useState(false);
  const [showTypeSelect, setShowTypeSelect] = useState(false);
  const [showDomSelect, setShowDomSelect] = useState(false);
  const [showMetSelect, setShowMetSelect] = useState(false);
  const [showDayDateSelect, setShowDayDateSelect] = useState(false);

  const [showDateSelect, setShowDateSelect] = useState(false);
  const [weekday, setWeekday] = useState(false);
  const [date, setDate] = useState(undefined);
  const [place, setPlace] = useState(undefined);
  const [type, setType] = useState(undefined);
  const [thanks, setThanks] = useState(false);
  const [domicilio, setDomicilio] = useState(undefined);
  const [hour, setHour] = useState(9);
  const [minute, setMinute] = useState(3);
  const [alert, setAlert] = useState(false);

  const [secondScreen, setSecondScreen] = useState(undefined);
  const [thirdScreen, setThirdScreen] = useState(false);

  const [filled, setFilled] = useState({ place: false, date: false, type: false });
  const [newBooking, setNewBooking] = useState({
    name: undefined,
    birth: undefined,
    phone: undefined,
    mail: undefined,
    dni: undefined,
    symptoms: undefined,
    contact: undefined,
    destination: undefined,
    fligthDate: undefined,
    type: undefined,
    test: undefined,
    place: undefined,
    met: undefined,
    postal: undefined,
    testDate: "",
  });
  const [size, setSize] = useState(false);

  const bookingService = new BookingService();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    console.log(window);

    handleNewBooking();
    window.innerWidth < 600 && setSize(true);
  }, []);

  useEffect(() => {
    if (secondScreen === true) return null;
    fillButttons();
  }, [place, date, type]);

  useEffect(() => {
    newBooking.destination === "España" || newBooking.destination === "Portugal" || newBooking.destination === "Italia" || newBooking.destination === "Perù" || newBooking.destination === "Luxemburgo"
      ? setNewBooking((newBooking) => {
          return {
            ...newBooking,
            test: "Antigenos",
          };
        })
      : setNewBooking((newBooking) => {
          return {
            ...newBooking,
            test: "Pcr saliva",
          };
        });
  }, [newBooking.place]);

  useEffect(() => {
    newBooking.place === "CLÍNICA" &&
      setNewBooking((newBooking) => {
        return {
          ...newBooking,
          place2: "Avda. de la Industria, 4. Edificio 1, Portal 2, Plata 2. Alcobendas",
        };
      });
  }, [newBooking.place]);

  useEffect(() => {
    if (newBooking.testDate) {
      var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var date = new Date(newBooking.testDate);
      var day = date.getDay();
      setWeekday(weekdays[day]);
    }
  }, [newBooking.testDate]);

  useEffect(() => {
    let fecha = hour + ":" + minute + `0`;
    setNewBooking((newBooking) => {
      return {
        ...newBooking,
        testHour: fecha,
      };
    });
  }, [hour, minute]);

  const fillButttons = () => {
    if (newBooking.type) {
      setFilled((filled) => {
        return {
          ...filled,
          type: true,
        };
      });
    } else if (newBooking.fligthDate) {
      setFilled((filled) => {
        return {
          ...filled,
          date: true,
        };
      });
    } else if (newBooking.destination) {
      setFilled((filled) => {
        return {
          ...filled,
          place: true,
        };
      });
    }
  };

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

  function toogleDateModal(e) {
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

  const toggleDomSelect = (e) => {
    showDomSelect ? setShowDomSelect(false) : setShowDomSelect(true);
  };

  const toggleDaydateSelect = (e) => {
    setShowDayDateSelect(true);
  };

  const toggleMetSelect = (e) => {
    showMetSelect ? setShowMetSelect(false) : setShowMetSelect(true);
  };

  const toggleDateSelect = (e) => {
    showDateSelect ? setShowDateSelect(false) : setShowDateSelect(true);
  };

  const changeToThird = (e) => {
    e.preventDefault();
    newBooking.place && newBooking.place2 && newBooking.met && newBooking.name && newBooking.birth && newBooking.mail && newBooking.phone && newBooking.dni ? setThirdScreen(true) : setAlert(true);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs.send("service_dha8dni", "template_sh5v44l", newBooking, "user_mooLGAiB6ToYwmGhZNNdc").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    handleNewBooking(e);
    setThanks(true);
  }

  function addHour() {
    let string = weekday;
    if (string === "Saturday" || string === "Sunday") {
      if (hour < 12) {
        const newhour = hour + 1;
        setHour(newhour);
      } else if (hour >= 12) {
        setHour(12);
      }
    } else {
      if (hour < 17) {
        const newhour = hour + 1;
        setHour(newhour);
      } else if (hour === 17) {
        setHour(17);
      }
    }
  }

  function substractHour() {
    let string = weekday;

    if (string === "Saturday" || string === "Sunday") {
      if (hour <= 10) {
        setHour(10);
      } else {
        const newhour = hour - 1;
        setHour(newhour);
      }
    } else {
      if (hour > 9) {
        const newhour = hour - 1;
        setHour(newhour);
      } else if (hour <= 9) {
        setHour(9);
      }
    }
  }

  function addMinute() {
    let string = weekday;

    if (string === "Friday") {
      if (hour === 17 && minute >= 0) {
        setHour(17);
        setMinute(0);
      } else if (minute < 5) {
        const newMinute = minute + 1;
        setMinute(newMinute);
      } else if (minute === 5) {
        const newhour = hour + 1;
        setHour(newhour);
        setMinute(0);
      }
    } else if (string === "Saturday" || string === "Sunday") {
      if (hour > 12 || (hour === 12 && minute > 2)) {
        setHour(12);
        setMinute(3);
      } else if (hour < 10) {
        setHour(10);
      } else if (minute < 5) {
        const newMinute = minute + 1;
        setMinute(newMinute);
      } else if (minute === 5) {
        const newhour = hour + 1;
        setHour(newhour);
        setMinute(0);
      }
    } else {
      if (hour === 17 && minute === 5) {
        setHour(17);
        setMinute(5);
      } else if (minute < 5) {
        const newMinute = minute + 1;

        setMinute(newMinute);
      } else if (minute === 5) {
        const newhour = hour + 1;
        setHour(newhour);
        setMinute(0);
      }
    }
  }

  function substractMinute() {
    let string = weekday;
    if (string === "Saturday" || string === "Sunday") {
      if (hour < 10 || (hour === 10 && minute < 4)) {
        setHour(10);
        setMinute(3);
      } else if (minute > 0) {
        const newMinute = minute - 1;
        setMinute(newMinute);
      } else if (minute === 0) {
        const newhour = hour - 1;
        setHour(newhour);
        setMinute(5);
      }
    } else {
      if (hour === 9 && minute === 3) {
        setHour(9);
        setMinute(3);
      } else if (minute === 0) {
        const newhour = hour - 1;
        setHour(newhour);
        setMinute(5);
      } else if (minute > 0) {
        const newMinute = minute - 1;
        setMinute(newMinute);
      }
    }
  }

  async function handleNewBooking(e) {
    // e.preventDefault();
    // console.log(e.target.value);
    // bookingService
    //   .saveBooking(newBooking)
    //   .then((response) => {
    //     console.log(response.data);
    //     setThanks(true);
    //   })
    //   .catch((err) => console.log(err));
    // Codificar nuestro videojuego como JSON
    const cargaUtil = JSON.stringify(newBooking);

    // ¡Y enviarlo!
    // const respuesta = await fetch(`https://nuevo.procorlab.es/prueba.php`, {
    //   method: "POST",
    //   body: cargaUtil,
    // });

    const respuesta = await fetch(`https://nuevo.procorlab.es/prueba.php`);

    const exitoso = await respuesta.json();
    if (exitoso) {
      console.log(exitoso);

      setThanks(true);
    } else {
      console.log("error");
    }
  }

  return (
    <Container>
      <section className={secondScreen ? "hide" : "funnel"}>
        <h2 id="SemiBold">PROCOR VIAJES</h2>
        <section className={showTypeSelect ? "funnel_options funnel__space" : "funnel_options"}>
          {newBooking.destination ? (
            <button className="country__select filled" onClick={() => toggleCountrySelect()}>
              {newBooking.destination}
              {showCountrySelect && (
                <div className="country__select-div">
                  <ul>
                    <li
                      // onClick={(e) => selectPlace(e)}
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            destination: e.target.innerHTML,
                          };
                        })
                      }
                      id="SemiBold"
                      style={{ fontSize: "1.1rem" }}
                    >
                      PAIS DE DESTINO
                    </li>
                    <li
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            destination: e.target.innerHTML,
                          };
                        })
                      }
                      // onClick={(e) => selectPlace(e)}
                    >
                      España
                    </li>
                    <li
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            destination: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      Portugal
                    </li>
                    <li
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            destination: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      Italia
                    </li>
                    <li
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            destination: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      Perù
                    </li>
                    <li
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            destination: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      Luxemburgo
                    </li>
                    <li
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            destination: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      Otro
                    </li>
                  </ul>
                </div>
              )}
            </button>
          ) : (
            <button className="country__select" onClick={() => toggleCountrySelect()}>
              PAIS DE DESTINO
              {showCountrySelect && (
                <div className="country__select-div">
                  <ul>
                    <li
                      // onClick={(e) => selectPlace(e)}
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            destination: e.target.innerHTML,
                          };
                        })
                      }
                      id="SemiBold"
                      style={{ fontSize: "1.1rem" }}
                    >
                      PAIS DE DESTINO
                    </li>
                    <li
                      // onClick={(e) => selectPlace(e)}
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            destination: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      España
                    </li>
                    <li
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            destination: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      Portugal
                    </li>
                    <li
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            destination: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      Italia
                    </li>
                    <li
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            destination: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      Perù
                    </li>
                    <li
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            destination: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      Luxemburgo
                    </li>
                    <li
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            destination: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      Otro
                    </li>
                  </ul>
                </div>
              )}
            </button>
          )}
          {newBooking.fligthDate ? (
            <button className=" filled" onClick={() => toogleDateModal()}>
              {newBooking.fligthDate}
            </button>
          ) : (
            <button className="" onClick={() => toogleDateModal()}>
              FECHA DEL VUELO
            </button>
          )}
          {newBooking.type ? (
            <button className={newBooking.type ? "type__select filled" : "type__select"} onClick={() => toggleTypeSelect()}>
              {newBooking.type}
              {showTypeSelect && (
                <div className="type__select-div">
                  <ul>
                    <li
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            type: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      ALOJAMIENTO
                    </li>
                    <li
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            type: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      Casa Propia
                    </li>
                    <li
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            type: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      Casa rural
                    </li>
                    <li
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            type: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      Hotel
                    </li>
                    <li
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            type: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      Airbnb
                    </li>
                    <li
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            type: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      Otro
                    </li>
                  </ul>
                </div>
              )}
            </button>
          ) : (
            <button className={newBooking.type ? "type__select filled" : "type__select"} onClick={() => toggleTypeSelect()}>
              ALOJAMIENTO
              {showTypeSelect && (
                <div className="type__select-div">
                  <ul>
                    <li onClick={(e) => selectType(e)} id="SemiBold" style={{ fontSize: "1.1rem" }}>
                      ALOJAMIENTO
                    </li>
                    <li
                      // onClick={(e) => selectType(e)}
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            type: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      Casa Propia
                    </li>
                    <li
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            type: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      Casa rural
                    </li>
                    <li
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            type: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      Hotel
                    </li>
                    <li
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            type: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      Airbnb
                    </li>
                    <li
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            type: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      Otro
                    </li>
                  </ul>
                </div>
              )}
            </button>
          )}

          {newBooking.fligthDate && newBooking.destination && newBooking.type ? <button onClick={() => changeScreen()}>CONFIRMAR</button> : null}
        </section>
      </section>

      {/* {showPlaceModal && (
        <section className="funnel__modal">
          <form onSubmit={(e) => tooglePlaceModal(e)}>
            <input type="text" onChange={(e) => selectPlace(e)} placeholder="ESCRIBE TU DESTINO..." />
            <button type="submit">CONFIRMAR</button>
          </form>
        </section>
      )} */}

      {showDateModal && (
        <section className="funnel__modal safari_only">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toogleDateModal(e);
            }}
          >
            <label>FECHA DEL VUELO (DD/MM/AA)</label>
            <input
              type="date"
              className=" safari_only"
              // onChange={(e) => selectDate(e)}
              onChange={(e) =>
                setNewBooking((newBooking) => {
                  return {
                    ...newBooking,
                    fligthDate: e.target.value,
                  };
                })
              }
              placeholder="FECHA DEL VUELO (DD/MM/AA)"
            />
            <button className="modal__submitButton safari_only" type="submit">
              CONFIRMAR
            </button>
          </form>
        </section>
      )}

      <section className={secondScreen ? "funnel" : "hide"}>
        {newBooking.destination === "España" ||
        newBooking.destination === "Portugal" ||
        newBooking.destination === "Italia" ||
        newBooking.destination === "Perù" ||
        newBooking.destination === "Luxemburgo" ? (
          <>
            <div>
              <h2 id="SemiBold">Antigenos</h2>
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
              <button className="funnel__link" style={{ backgroundColor: "#313131", color: "white", width: "30%" }} onClick={() => toogleFinalModal()}>
                RESERVAR CITA
              </button>
            </section>
          </>
        )}
      </section>

      {showFinalModal && (
        <section className="funnel__modal">
          <button className={showFinalModal ? "closeFinal__btn" : ""} onClick={() => setShowFinalModal(false)}>
            X
          </button>
          <form className={thanks ? "hide" : ""} onSubmit={(e) => sendEmail(e)}>
            {/* <form className={thanks ? "hide" : ""} onSubmit={(e) => handleNewBooking(e)}> */}
            <input type="text" name="place" value={place} style={{ visibility: "hidden", padding: 0, marginTop: 0, height: 1 }} />
            <input type="text" name="date" value={date} style={{ visibility: "hidden", padding: 0, marginTop: 0, height: 1 }} />
            <input type="text" name="type" value={type} style={{ visibility: "hidden", padding: 0, marginTop: 0, height: 1 }} />
            {thirdScreen ? (
              <div>
                <input
                  type="text"
                  style={{ visibility: "hidden", padding: 0, marginTop: 0, height: 1 }}
                  onChange={(e) =>
                    setNewBooking((newBooking) => {
                      return {
                        ...newBooking,
                        test: e.target.value,
                      };
                    })
                  }
                  name="test"
                  placeholder="TIPO DE PRUEBA"
                  value={
                    newBooking.destination === "España" ||
                    newBooking.destination === "Portugal" ||
                    newBooking.destination === "Italia" ||
                    newBooking.destination === "Perù" ||
                    newBooking.destination === "Luxemburgo"
                      ? "Antigenos"
                      : "Pcr saliva"
                  }
                />
                <label style={{ marginTop: "1rem", marginBottom: 0 }}>Fecha de la cita</label>
                <input
                  type="date"
                  className="safari_only"
                  // onChange={(e) => selectDate(e)}
                  onChange={(e) =>
                    setNewBooking((newBooking) => {
                      return {
                        ...newBooking,
                        testDate: e.target.value,
                      };
                    })
                  }
                  placeholder="FECHA DE LA CITA"
                />

                <button
                  className="type__select-dom"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDaydateSelect(e);
                  }}
                >
                  HORA DE LA CITA
                  {showDayDateSelect && (
                    <>
                      {weekday === "Saturday" || weekday === "Sunday" ? (
                        <ul className="type__select-div">
                          <li onClick={(e) => selectType(e)}> HORA DE LA CITA</li>
                          <article className="calendario__hora" id="SemiBold">
                            <article className="calendario__hora_bloque">
                              <article className="calendario__hora-nav">
                                <p onClick={addHour}>+ </p>
                                <p>{hour}</p>
                                <p onClick={substractHour}>- </p>
                              </article>
                              :
                              <article className="calendario__hora-nav">
                                <p onClick={addMinute}>+ </p>
                                <p>{minute}0</p>
                                <p onClick={substractMinute}>- </p>
                              </article>
                            </article>
                          </article>
                        </ul>
                      ) : (
                        <ul className="type__select-div">
                          <li onClick={(e) => selectType(e)}> HORA DE LA CITA</li>
                          <article className="calendario__hora" id="SemiBold">
                            <article className="calendario__hora_bloque">
                              <article className="calendario__hora-nav">
                                <p onClick={addHour}>+ </p>
                                <p>{hour}</p>
                                <p onClick={substractHour}>- </p>
                              </article>
                              :
                              <article className="calendario__hora-nav">
                                <p onClick={addMinute}>+ </p>
                                <p>{minute}0</p>
                                <p onClick={substractMinute}>- </p>
                              </article>
                            </article>
                          </article>
                        </ul>
                      )}
                    </>
                  )}
                </button>

                <button className="modal__submitButton" type="submit" style={{ marginTop: "20rem" }}>
                  CONFIRMAR
                </button>
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  onChange={(e) =>
                    setNewBooking((newBooking) => {
                      return {
                        ...newBooking,
                        name: e.target.value,
                      };
                    })
                  }
                  name="name"
                  placeholder="NOMBRE Y APELLIDOS"
                />
                <input
                  type="text"
                  onChange={(e) =>
                    setNewBooking((newBooking) => {
                      return {
                        ...newBooking,
                        birth: e.target.value,
                      };
                    })
                  }
                  name="birth"
                  placeholder="FECHA DE NACIMIENTO"
                />
                <input
                  type="text"
                  onChange={(e) =>
                    setNewBooking((newBooking) => {
                      return {
                        ...newBooking,
                        phone: e.target.value,
                      };
                    })
                  }
                  name="phone"
                  placeholder="TELEFONO DE CONTACTO"
                />
                <input
                  type="text"
                  onChange={(e) =>
                    setNewBooking((newBooking) => {
                      return {
                        ...newBooking,
                        mail: e.target.value,
                      };
                    })
                  }
                  name="mail"
                  placeholder="CORREO ELECTRONICO"
                />
                <input
                  type="text"
                  onChange={(e) =>
                    setNewBooking((newBooking) => {
                      return {
                        ...newBooking,
                        dni: e.target.value,
                      };
                    })
                  }
                  name="dni"
                  placeholder="DNI O PASAPORTE"
                />
                <input
                  type="text"
                  onChange={(e) =>
                    setNewBooking((newBooking) => {
                      return {
                        ...newBooking,
                        postal: e.target.value,
                      };
                    })
                  }
                  name="postal"
                  placeholder="CODIGO POSTAL"
                />

                {newBooking.met ? (
                  <button
                    className="type__select-dom safari_only"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleMetSelect();
                    }}
                  >
                    {newBooking.met}
                    {showMetSelect && (
                      <ul className="type__select-div">
                        <li id="SemiBold" onClick={(e) => selectType(e)}>
                          COMO NOS HAS CONOCIDO
                        </li>
                        <li
                          onClick={(e) =>
                            setNewBooking((newBooking) => {
                              return {
                                ...newBooking,
                                met: e.target.innerHTML,
                              };
                            })
                          }
                        >
                          REDES SOCIALES
                        </li>
                        <li
                          onClick={(e) =>
                            setNewBooking((newBooking) => {
                              return {
                                ...newBooking,
                                met: e.target.innerHTML,
                              };
                            })
                          }
                        >
                          WEB
                        </li>
                        <li
                          onClick={(e) =>
                            setNewBooking((newBooking) => {
                              return {
                                ...newBooking,
                                met: e.target.innerHTML,
                              };
                            })
                          }
                        >
                          FAMILIAR / AMIG@
                        </li>
                        <li
                          onClick={(e) =>
                            setNewBooking((newBooking) => {
                              return {
                                ...newBooking,
                                met: e.target.innerHTML,
                              };
                            })
                          }
                        >
                          OTRO
                        </li>
                      </ul>
                    )}
                  </button>
                ) : (
                  <button
                    className="type__select-dom safari_only"
                    onClick={(e) => {
                      e.preventDefault();

                      toggleMetSelect(e);
                    }}
                  >
                    COMO NOS HAS CONOCIDO
                    {showMetSelect && (
                      <ul className="type__select-div">
                        <li id="SemiBold" onClick={(e) => selectType(e)}>
                          COMO NOS HAS CONOCIDO
                        </li>
                        <li
                          // onClick={(e) => selectType(e)}
                          onClick={(e) =>
                            setNewBooking((newBooking) => {
                              return {
                                ...newBooking,
                                met: e.target.innerHTML,
                              };
                            })
                          }
                        >
                          REDES SOCIALES
                        </li>
                        <li
                          onClick={(e) =>
                            setNewBooking((newBooking) => {
                              return {
                                ...newBooking,
                                met: e.target.innerHTML,
                              };
                            })
                          }
                        >
                          WEB
                        </li>
                        <li
                          onClick={(e) =>
                            setNewBooking((newBooking) => {
                              return {
                                ...newBooking,
                                met: e.target.innerHTML,
                              };
                            })
                          }
                        >
                          FAMILIAR / AMIG@
                        </li>
                        <li
                          onClick={(e) =>
                            setNewBooking((newBooking) => {
                              return {
                                ...newBooking,
                                met: e.target.innerHTML,
                              };
                            })
                          }
                        >
                          OTRO
                        </li>
                      </ul>
                    )}
                  </button>
                )}
                {newBooking.place ? (
                  <button
                    className="type__select-dom safari_only"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDomSelect();
                    }}
                  >
                    {newBooking.place}
                    {showDomSelect && (
                      <ul className="type__select-div">
                        <li id="SemiBold" onClick={(e) => selectType(e)}>
                          PRUEBA EN CLÍNICA O A DOMICILIO
                        </li>
                        <li
                          onClick={(e) =>
                            setNewBooking((newBooking) => {
                              return {
                                ...newBooking,
                                place: e.target.innerHTML,
                              };
                            })
                          }
                        >
                          CLÍNICA
                        </li>
                        <li
                          onClick={(e) =>
                            setNewBooking((newBooking) => {
                              return {
                                ...newBooking,
                                place: e.target.innerHTML,
                              };
                            })
                          }
                        >
                          DOMICILIO
                        </li>
                      </ul>
                    )}
                  </button>
                ) : (
                  <button
                    className="type__select-dom safari_only"
                    onClick={(e) => {
                      e.preventDefault();

                      toggleDomSelect(e);
                    }}
                  >
                    {size ? "PRUEBA CLÍNICA/DOMICILIO" : "PRUEBA EN CLÍNICA O A DOMICILIO"}
                    {showDomSelect && (
                      <ul className="type__select-div">
                        <li id="SemiBold" onClick={(e) => selectType(e)}>
                          PRUEBA EN CLÍNICA O A DOMICILIO
                        </li>
                        <li
                          // onClick={(e) => selectType(e)}
                          onClick={(e) =>
                            setNewBooking((newBooking) => {
                              return {
                                ...newBooking,
                                place: e.target.innerHTML,
                              };
                            })
                          }
                        >
                          CLÍNICA
                        </li>
                        <li
                          onClick={(e) =>
                            setNewBooking((newBooking) => {
                              return {
                                ...newBooking,
                                place: e.target.innerHTML,
                              };
                            })
                          }
                        >
                          DOMICILIO
                        </li>
                      </ul>
                    )}
                  </button>
                )}
                <input
                  value={newBooking.place === "CLÍNICA" ? "Avda. de la Industria, 4. Edificio 1, Portal 2, Plata 2. Alcobendas" : undefined}
                  type="text"
                  className={newBooking.place === "CLÍNICA" || newBooking.place === "DOMICILIO" ? "" : "formgroup-hidden"}
                  placeholder="DIRECCIÓN DE DOMICILIO"
                  name="place2"
                  onChange={(e) =>
                    setNewBooking((newBooking) => {
                      return {
                        ...newBooking,
                        place2: e.target.value,
                      };
                    })
                  }
                />
                {alert && <p style={{ color: "#ef0808" }}>Rellene todos los campos</p>}
                <button className="modal__submitButton safari_only" onClick={(e) => changeToThird(e)}>
                  CONTINUAR
                </button>
              </div>
            )}
          </form>
        </section>
      )}

      {thanks && (
        <section className="funnel__modal">
          <div>
            <p>Gracias por tu reserva,</p>
            <p>en breve recibira un correo</p>
            <p>con la información de su cita</p>
            <Link to="/">Confirmar</Link>
          </div>
        </section>
      )}
    </Container>
  );
};

export default Viaje;
