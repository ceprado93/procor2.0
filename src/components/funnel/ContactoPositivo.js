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
  const [showDomSelect, setShowDomSelect] = useState(false);
  const [showMetSelect, setShowMetSelect] = useState(false);
  const [showDayDateSelect, setShowDayDateSelect] = useState(false);
  const [weekday, setWeekday] = useState(false);
  const [hour, setHour] = useState(9);
  const [minute, setMinute] = useState(3);

  const [place, setPlace] = useState(undefined);
  const [type, setType] = useState(undefined);
  const [thanks, setThanks] = useState(false);
  const [secondScreen, setSecondScreen] = useState(undefined);
  const [thirdScreen, setThirdScreen] = useState(false);
  const [alert, setAlert] = useState(false);

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
    language: undefined,
    postal: undefined,
    testDate: "",
  });
  const [size, setSize] = useState(false);

  const [filled, setFilled] = useState({ place: false, date: false, type: false });

  const bookingService = new BookingService();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    window.innerWidth < 600 && setSize(true);
  }, []);

  useEffect(() => {
    if (newBooking.testDate) {
      var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var date = new Date(newBooking.testDate);
      var day = date.getDay();
      setWeekday(weekdays[day]);
    }
  }, [newBooking.testDate]);

  useEffect(() => {
    if (type && date && place) {
      setFilled((filled) => {
        return {
          type: true,
          date: true,
          place: true,
        };
      });
    } else if (type) {
      setFilled((filled) => {
        return {
          ...filled,
          type: true,
        };
      });
    } else if (date && place) {
      setFilled((filled) => {
        return {
          ...filled,
          date: true,
          place: true,
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

  useEffect(() => {
    newBooking.destination === "España" || newBooking.destination === "Portugal" || newBooking.destination === "Italia" || newBooking.destination === "Perù" || newBooking.destination === "Luxemburgo"
      ? setNewBooking((newBooking) => {
          return {
            ...newBooking,
            test: "Antigenos de saliva",
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
    let fecha = hour + ":" + minute + `0`;
    setNewBooking((newBooking) => {
      return {
        ...newBooking,
        testHour: fecha,
      };
    });
  }, [hour, minute]);

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

  const toggleDomSelect = (e) => {
    showDomSelect ? setShowDomSelect(false) : setShowDomSelect(true);
  };

  const toggleDaydateSelect = (e) => {
    setShowDayDateSelect(true);
  };

  const toggleMetSelect = (e) => {
    showMetSelect ? setShowMetSelect(false) : setShowMetSelect(true);
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

  const changeToThird = (e) => {
    e.preventDefault();
    newBooking.place && newBooking.place2 && newBooking.met && newBooking.name && newBooking.birth && newBooking.mail && newBooking.phone && newBooking.dni ? setThirdScreen(true) : setAlert(true);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs.send("service_ms36otd", "template_8u35ma8", newBooking, "user_29SCJ5tSmyhfUETa03XNu").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
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

  return (
    <Container>
      <section className={secondScreen ? "hide" : "funnel"}>
        <h2 id="SemiBold">CONTACTO CON POSITIVO</h2>
        <section className="funnel_options">
          {newBooking.destination ? (
            <button className={newBooking.destination ? "country__select filled" : "country__select"} onClick={() => toggleCountrySelect()}>
              {newBooking.destination}
              {showCountrySelect && (
                <div className="country__select-div">
                  <ul>
                    <li id="SemiBold" onClick={(e) => selectPlace(e)}>
                      RELACIÓN CON EL POSITIVO
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
                      Pareja
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
                      Familiar
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
                      Amigo
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
                      Compañero
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
            <button className={newBooking.destination ? "country__select filled" : "country__select"} onClick={() => toggleCountrySelect()}>
              RELACIÓN CON EL POSITIVO
              {showCountrySelect && (
                <div className="country__select-div">
                  <ul>
                    <li id="SemiBold" onClick={(e) => selectPlace(e)}>
                      RELACIÓN CON EL POSITIVO
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
                      Pareja
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
                      Familiar
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
                      Amigo
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
                      Compañero
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
          {newBooking.type ? (
            <button className={newBooking.type ? "date__select filled" : "date__select"} onClick={() => toggleDateSelect()}>
              {newBooking.type}
              {showDateSelect && (
                <div className="type__select-div">
                  <ul>
                    <li id="SemiBold" onClick={(e) => selectDate(e)}>
                      DÍAS DESDE EL CONTACTO
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
                      1
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
                      2
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
                      3
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
                      4
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
                      5
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
                      6
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
                      7
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
                      8
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
                      9
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
                      10
                    </li>
                  </ul>
                </div>
              )}
            </button>
          ) : (
            <button className={newBooking.type ? "date__select filled" : "date__select"} onClick={() => toggleDateSelect()}>
              DÍAS DESDE EL CONTACTO
              {showDateSelect && (
                <div className="date__select-div">
                  <ul>
                    <li id="SemiBold" onClick={(e) => selectDate(e)}>
                      DÍAS DESDE EL CONTACTO
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
                      1
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
                      2
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
                      3
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
                      4
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
                      5
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
                      6
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
                      7
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
                      8
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
                      9
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
                      10
                    </li>
                  </ul>
                </div>
              )}
            </button>
          )}
          {newBooking.fligthDate ? (
            <button className={newBooking.fligthDate ? "type__select filled" : "type__select"} onClick={() => toggleTypeSelect()}>
              {newBooking.fligthDate}
              {showTypeSelect && (
                <div className="type__select-div">
                  <ul>
                    <li id="SemiBold" onClick={(e) => selectType(e)}>
                      SÍNTOMAS
                    </li>

                    <li
                      onChange={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            fligthDate: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      Si
                    </li>
                    <li
                      onChange={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            fligthDate: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      No
                    </li>
                  </ul>
                </div>
              )}
            </button>
          ) : (
            <button className={newBooking.fligthDate ? "type__select filled" : "type__select"} onClick={() => toggleTypeSelect()}>
              SÍNTOMAS
              {showTypeSelect && (
                <div className="type__select-div">
                  <ul>
                    <li id="SemiBold" onClick={(e) => selectType(e)}>
                      SÍNTOMAS
                    </li>
                    <li
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            fligthDate: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      Si
                    </li>
                    <li
                      onClick={(e) =>
                        setNewBooking((newBooking) => {
                          return {
                            ...newBooking,
                            fligthDate: e.target.innerHTML,
                          };
                        })
                      }
                    >
                      No
                    </li>
                  </ul>
                </div>
              )}
            </button>
          )}

          {newBooking.destination && newBooking.fligthDate && newBooking.type ? <button onClick={() => changeScreen()}>CONFIRMAR</button> : null}
        </section>
      </section>

      <section className={secondScreen ? "funnel" : "hide"}>
        <div>
          <h2 id="SemiBold">Antigenos de saliva</h2>
          <p>Creemos que este test es perfecto para ti</p>
        </div>
        <img className="test__img" src={antigenosSaliva} alt="test" />
        <section className="funnel_options">
          <button className="funnel__link" style={{ backgroundColor: "#313131", color: "white", width: "30%" }} onClick={() => toogleFinalModal()}>
            RESERVAR CITA
          </button>
        </section>
      </section>

      {showFinalModal && (
        <section className="funnel__modal">
          <button className={showFinalModal ? "closeFinal__btn" : ""} onClick={() => setShowFinalModal(false)}>
            X
          </button>
          <form className={thanks ? "hide" : ""} onSubmit={(e) => sendEmail(e)}>
            <input type="text" name="place" value={place} style={{ visibility: "hidden", padding: 0, marginTop: 0, height: 1 }} />
            <input type="text" name="date" value={date} style={{ visibility: "hidden", padding: 0, marginTop: 0, height: 1 }} />
            <input type="text" name="type" value={type} style={{ visibility: "hidden", padding: 0, marginTop: 0, height: 1 }} />
            {/* <input type="text" name="name" placeholder="NOMBRE Y APELLIDOS" />
            <input type="text" name="birth" placeholder="FECHA DE NACIMIENTO" />
            <input type="text" name="phone" placeholder="TELEFONO DE CONTACTO" />
            <input type="text" name="mail" placeholder="CORREO ELECTRONICO" />
            <input type="text" name="dni" placeholder="DNI O PASAPORTE" /> */}
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
                      ? "Antigenos de saliva"
                      : "Pcr saliva"
                  }
                />
                <label style={{ marginTop: "1rem", marginBottom: 0 }}>Fecha de la cita</label>
                <input
                  type="date"
                  className="safari_only" // onChange={(e) => selectDate(e)}
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
                  className="type__select-dom safari_only"
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

                <button className="modal__submitButton safari_only" type="submit" style={{ marginTop: "20rem" }}>
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
                    className="type__select-dom"
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
                <button className="modal__submitButton" onClick={(e) => changeToThird(e)}>
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
            <p>en breve recibirá un correo</p>
            <p>con la información de su cita</p>
            <Link to="/">Confirmar</Link>
          </div>
        </section>
      )}
    </Container>
  );
};

export default Viaje;
