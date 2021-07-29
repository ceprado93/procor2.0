import React, { useState, useLayoutEffect, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import FB from "../../assets/facebook-blanco.png";
import IG from "../../assets/insta-blanco.png";
import Twitter from "../../assets/twitter-blanco.png";
import emailjs from "emailjs-com";
import DatePicker, { registerLocale } from "react-datepicker";
import ReservasForm from "../shared/Reservas-form";
import flechaArr from "../../assets/up.svg";
import flechaAb from "../../assets/down.svg";

import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

registerLocale("es", es);

const Reservas = () => {
  const [dataForm, setDataForm] = useState({
    horareserva: "",
  });
  const [startDate, setStartDate] = useState(new Date());
  const [yesterday, setYesterday] = useState(new Date());
  const [hour, setHour] = useState(9);
  const [currentHour, setCurrenthour] = useState(new Date().getHours());

  const [minute, setMinute] = useState(3);
  const [oddminute, setOdd] = useState(true);
  const [minute2, setMinute2] = useState(0);
  const [minute3, setMinute3] = useState(0);
  const [show, setShow] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [propsReserva, setHoraReserva] = useState({
    hora: hour,
    minuto: minute,
    dia: startDate,
  });

  const [numForms, setNumForms] = useState(1);

  useLayoutEffect(() => {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    d.setHours(0, 0, 0, 0);
    setYesterday(d);
    initialHour();
  }, []);

  useEffect(() => {
    initialHour();
  }, [startDate]);

  useEffect(() => {
    const dia = startDate.toString();
    const diacorto = dia.substr(0, 15);
    setDataForm((dataForm) => {
      return {
        ...dataForm,
        diareserva1: diacorto,
      };
    });
  }, [dataForm.horareserva1]);

  useEffect(() => {
    initialHour();
  }, [startDate]);

  useEffect(() => {
    let date = new Date();
    let currentHour = date.getHours();
    const newHour = currentHour + 2;
    dataForm.lugar1 === "DOMICILIO" && currentHour + 2 > hour && setHour(newHour);
  }, [dataForm.lugar1]);

  function initialHour() {
    let string = startDate.toString();
    if (string.includes("Sat") || string.includes("Sun")) {
      setHour(11);
    }
  }

  function loadDate(e) {
    e.preventDefault();

    let dateWithTime;
    if (!oddminute) {
      dateWithTime = hour + "h" + minute + 0;
    } else if (oddminute) {
      dateWithTime = hour + "h" + minute + 5;
    }
    setDataForm((dataForm) => {
      return {
        ...dataForm,
        horareserva1: dateWithTime,
      };
    });
  }

  function handleHide() {
    setShow(false);
  }

  async function handleNewBooking(e) {
    e.preventDefault();

    const cargaUtil = JSON.stringify(dataForm);

    const respuesta = await fetch(`https://nuevo.procorlab.es/citas.php`, {
      method: "POST",
      body: cargaUtil,
    });

    const exitoso = await respuesta.json();
    if (exitoso) {
      console.log(exitoso);
      sendEmailReserva(e);
    } else {
      console.log("error");
    }
  }

  function sendEmailReserva(e) {
    e.preventDefault();
    notify();
    setShowAlert(true);
    emailjs.sendForm("service_ms36otd", "template_rff1lo3", e.target, "user_29SCJ5tSmyhfUETa03XNu").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm("service_ms36otd", "template_wav4qpj", e.target, "user_29SCJ5tSmyhfUETa03XNu").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
    notify();
    setShowAlert(true);
  }

  function notify() {
    console.log("toast");
    toast("Hemos recibido su reserva, gracias por contar con nosotros!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function handleInputChange(e) {
    const { name, value } = e;
    setDataForm({ ...dataForm, [name]: value });
  }

  function añadirReserva(num) {
    setNumForms(num);
  }

  function addHour() {
    let string = startDate.toString();
    if (string.includes("Sat") || string.includes("Sun")) {
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
    let string = startDate.toString();

    if (string.includes("Sat") || string.includes("Sun")) {
      if (hour <= 11) {
        setHour(11);
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
    let string = startDate.toString();
    console.log(startDate.toString());

    if (string.includes("Fri")) {
      if (hour === 17 && minute >= 0) {
        setHour(17);
        setMinute(0);
      } else if (minute < 5) {
        const newMinute = minute + 1;
        const newMinute2 = minute + 2;
        const newMinute3 = minute + 3;

        setMinute(newMinute);
        setMinute2(newMinute2);
        setMinute3(newMinute3);
      } else if (minute === 5) {
        const newhour = hour + 1;
        setHour(newhour);
        setMinute(0);
        setMinute2(1);
        setMinute3(2);
      }
    } else if (string.includes("Sat") || string.includes("Sun")) {
      if (hour > 12 || (hour === 12 && minute > 2)) {
        setHour(12);
        setMinute(3);
      } else if (hour < 10) {
        setHour(10);
      } else if (minute < 5) {
        const newMinute = minute + 1;
        const newMinute2 = minute + 2;
        const newMinute3 = minute + 3;

        setMinute(newMinute);
        setMinute2(newMinute2);
        setMinute3(newMinute3);
      } else if (minute === 5) {
        const newhour = hour + 1;
        setHour(newhour);
        setMinute(0);
        setMinute2(1);
        setMinute3(2);
      }
    } else {
      if (hour === 17 && minute === 5) {
        setHour(17);
        setMinute(5);
      } else if (minute < 5) {
        const newMinute = minute + 1;
        const newMinute2 = minute + 2;
        const newMinute3 = minute + 3;

        setMinute(newMinute);
        setMinute2(newMinute2);
        setMinute3(newMinute3);
      } else if (minute === 5) {
        const newhour = hour + 1;
        setHour(newhour);
        setMinute(0);
        setMinute2(1);
        setMinute3(2);
      }
    }
  }

  function substractMinute() {
    let string = startDate.toString();
    if (string.includes("Sat") || string.includes("Sun")) {
      if (hour < 11 || (hour === 11 && minute < 4)) {
        setHour(11);
        setMinute(3);
      } else if (minute > 0) {
        const newMinute = minute - 1;
        const newMinute2 = minute - 2;
        const newMinute3 = minute - 3;
        setMinute(newMinute);
        setMinute2(newMinute2);
        setMinute3(newMinute3);
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
        const newMinute2 = minute - 2;
        const newMinute3 = minute - 3;
        setMinute(newMinute);
        setMinute2(newMinute2);
        setMinute3(newMinute3);
      }
    }
  }

  return (
    <>
      <section className="reservas__hero">
        <h1 id="SemiBold">Reserva ya tu cita</h1>
        <h1 id="SemiBold">con nosotros</h1>
      </section>

      <section className="reservas__calendario">
        <div className="calendario__Wrapper">
          <DatePicker
            selected={startDate}
            minDate={yesterday}
            inline
            locale="es"
            formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
            placeholderText="Weeks start on Monday"
            onChange={(date) => setStartDate(date)}
          />

          <div className="calendario__hora" id="SemiBold">
            <div className="calendario__hora_bloque">
              <div className="calendario__hora-nav">
                <img onClick={addHour} src={flechaArr} />
                <p>{hour}</p>
                <img onClick={substractHour} src={flechaAb} />
              </div>
              :
              <div className="calendario__hora-nav">
                <img onClick={addMinute} src={flechaArr} />
                <p>{minute}0</p>
                <img onClick={substractMinute} src={flechaAb} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="reservas__formulario">
        <div id="contacto" style={{ paddingTop: 80, minHeight: "calc(100vh - 220px)" }}>
          <div className="contact__text">
            <h2>RELLENA TUS DATOS PARA CONFIRMAR TU CITA</h2>
          </div>
          <section className="contact__form">
            {numForms === 1 ? (
              <>
                <form id="contact-form" onSubmit={handleNewBooking} onChange={(e) => loadDate(e)}>
                  <ReservasForm
                    handleInputChange={(e) => handleInputChange(e)}
                    date={startDate}
                    hour={hour}
                    minute={minute}
                    name="name1"
                    lastName="lastName1"
                    horareserva="horareserva1"
                    lastName="lastName1"
                    nacimiento="nacimiento1"
                    phone="phone1"
                    email="email1"
                    sintomas="sintomas1"
                    contacto="contacto1"
                    dni="dni1"
                    selectVuelo="selectVuelo1"
                    vuelo="vuelo1"
                    prueba="prueba1"
                    lugar="lugar1"
                    domicilio="domicilio1"
                  />
                  {dataForm.lugar1 === "DOMICILIO" && currentHour + 3 > hour && (
                    <p className="aviso__domicilio">Al haber solicitado el servicio a domicilio, su hora de reserva se ha aumentado en 2h.</p>
                  )}
                  <button className="btn__reservas" onClick={() => añadirReserva(2)}>
                    <div>
                      <p>AÑADIR A OTRA PERSONA</p>
                      <p>+</p>
                    </div>
                  </button>
                  <button type="submit" className="btn__reservas btn__dark">
                    RESERVAR CITA
                  </button>
                </form>
                <h2 style={{ marginBottom: 150 }}>Si tiene cualquier consulta puede contactar con nosotros por teléfono o mediante correo electrónico</h2>
              </>
            ) : numForms === 2 ? (
              <>
                <form id="contact-form" onSubmit={handleNewBooking} onChange={(e) => loadDate(e)}>
                  <ReservasForm
                    handleInputChange={(e) => handleInputChange(e)}
                    date={startDate}
                    hour={hour}
                    minute={minute}
                    style={{ marginBottom: 50 }}
                    name="name1"
                    horareserva="horareserva1"
                    lastName="lastName1"
                    nacimiento="nacimiento1"
                    phone="phone1"
                    email="email1"
                    sintomas="sintomas1"
                    contacto="contacto1"
                    dni="dni1"
                    selectVuelo="selectVuelo1"
                    vuelo="vuelo1"
                    prueba="prueba1"
                    lugar="lugar1"
                    domicilio="domicilio1"
                  />
                  <ReservasForm
                    handleInputChange={(e) => handleInputChange(e)}
                    date={startDate}
                    hour={hour}
                    oddMinute={oddminute}
                    minute={minute2}
                    name="name2"
                    horareserva="horareserva2"
                    lastName="lastName2"
                    nacimiento="nacimiento2"
                    phone="phone2"
                    email="email2"
                    sintomas="sintomas2"
                    contacto="contacto2"
                    dni="dni2"
                    selectVuelo="selectVuelo2"
                    vuelo="vuelo2"
                    prueba="prueba2"
                    lugar="lugar2"
                    domicilio="domicilio2"
                  />
                  {dataForm.lugar1 === "DOMICILIO" && currentHour + 2 > hour && (
                    <p className="aviso__domicilio">Al haber solicitado el servicio a domicilio, su hora de reserva se ha aumentado en 2h.</p>
                  )}
                  <button className="btn__reservas" onClick={() => añadirReserva(3)}>
                    <div>
                      <p>AÑADIR A OTRA PERSONA</p>
                      <p>+</p>
                    </div>
                  </button>
                  <button type="submit" className="btn__reservas btn__dark">
                    RESERVAR CITA
                  </button>
                </form>
                <h2 style={{ marginBottom: 150 }}>Si tiene cualquier consulta puede contactar con nosotros por teléfono o mediante correo electrónico</h2>
              </>
            ) : numForms === 3 ? (
              <>
                <form id="contact-form" onSubmit={handleNewBooking} onChange={(e) => loadDate(e)}>
                  <ReservasForm
                    handleInputChange={(e) => handleInputChange(e)}
                    date={startDate}
                    hour={hour}
                    minute={minute}
                    style={{ marginBottom: 50 }}
                    name="name1"
                    lastName="lastName1"
                    horareserva="horareserva1"
                    lastName="lastName1"
                    nacimiento="nacimiento1"
                    phone="phone1"
                    email="email1"
                    sintomas="sintomas1"
                    contacto="contacto1"
                    dni="dni1"
                    selectVuelo="selectVuelo1"
                    vuelo="vuelo1"
                    prueba="prueba1"
                    lugar="lugar1"
                    domicilio="domicilio1"
                  />
                  <ReservasForm
                    handleInputChange={(e) => handleInputChange(e)}
                    date={startDate}
                    hour={hour}
                    minute={minute}
                    oddMinute={oddminute}
                    name="name2"
                    horareserva="horareserva2"
                    lastName="lastName2"
                    nacimiento="nacimiento2"
                    phone="phone2"
                    email="email2"
                    sintomas="sintomas2"
                    contacto="contacto2"
                    dni="dni2"
                    selectVuelo="selectVuelo2"
                    vuelo="vuelo2"
                    prueba="prueba2"
                    lugar="lugar2"
                    domicilio="domicilio2"
                  />
                  <ReservasForm
                    handleInputChange={(e) => handleInputChange(e)}
                    date={startDate}
                    hour={hour}
                    minute={minute2}
                    name="name3"
                    horareserva="horareserva3"
                    lastName="lastName3"
                    nacimiento="nacimiento3"
                    phone="phone3"
                    email="email3"
                    sintomas="sintomas3"
                    contacto="contacto3"
                    dni="dni3"
                    selectVuelo="selectVuelo3"
                    vuelo="vuelo3"
                    prueba="prueba3"
                    lugar="lugar3"
                    domicilio="domicilio3"
                  />
                  {dataForm.lugar1 === "DOMICILIO" && currentHour + 2 > hour && (
                    <p className="aviso__domicilio">Al haber solicitado el servicio a domicilio, su hora de reserva se ha aumentado en 2h.</p>
                  )}
                  <button className="btn__reservas" onClick={() => añadirReserva(4)}>
                    <div>
                      <p>AÑADIR A OTRA PERSONA</p>
                      <p>+</p>
                    </div>
                  </button>
                  <button type="submit" className="btn__reservas btn__dark">
                    RESERVAR CITA
                  </button>
                </form>
                <h2 style={{ marginBottom: 150 }}>Si tiene cualquier consulta puede contactar con nosotros por teléfono o mediante correo electrónico</h2>
              </>
            ) : numForms === 4 ? (
              <>
                <form id="contact-form" onSubmit={handleNewBooking} onChange={(e) => loadDate(e)}>
                  <ReservasForm
                    handleInputChange={(e) => handleInputChange(e)}
                    date={startDate}
                    hour={hour}
                    minute={minute}
                    name="name1"
                    lastName="lastName1"
                    horareserva="horareserva1"
                    lastName="lastName1"
                    nacimiento="nacimiento1"
                    phone="phone1"
                    email="email1"
                    sintomas="sintomas1"
                    contacto="contacto1"
                    dni="dni1"
                    selectVuelo="selectVuelo1"
                    vuelo="vuelo1"
                    prueba="prueba1"
                    lugar="lugar1"
                    domicilio="domicilio1"
                  />
                  <ReservasForm
                    handleInputChange={(e) => handleInputChange(e)}
                    date={startDate}
                    hour={hour}
                    minute={minute}
                    oddMinute={oddminute}
                    name="name2"
                    horareserva="horareserva2"
                    lastName="lastName2"
                    nacimiento="nacimiento2"
                    phone="phone2"
                    email="email2"
                    sintomas="sintomas2"
                    contacto="contacto2"
                    dni="dni2"
                    selectVuelo="selectVuelo2"
                    vuelo="vuelo2"
                    prueba="prueba2"
                    lugar="lugar2"
                    domicilio="domicilio2"
                  />
                  <ReservasForm
                    handleInputChange={(e) => handleInputChange(e)}
                    date={startDate}
                    hour={hour}
                    minute={minute2}
                    name="name3"
                    horareserva="horareserva3"
                    lastName="lastName3"
                    nacimiento="nacimiento3"
                    phone="phone3"
                    email="email3"
                    sintomas="sintomas3"
                    contacto="contacto3"
                    dni="dni3"
                    vuelo="vuelo3"
                    selectVuelo="selectVuelo3"
                    prueba="prueba3"
                    lugar="lugar3"
                    domicilio="domicilio3"
                  />
                  <ReservasForm
                    handleInputChange={(e) => handleInputChange(e)}
                    date={startDate}
                    hour={hour}
                    minute={minute2}
                    oddMinute={oddminute}
                    name="name4"
                    horareserva="horareserva4"
                    lastName="lastName4"
                    nacimiento="nacimiento4"
                    phone="phone4"
                    email="email4"
                    sintomas="sintomas4"
                    contacto="contacto4"
                    dni="dni4"
                    selectVuelo="selectVuelo4"
                    vuelo="vuelo4"
                    prueba="prueba4"
                    lugar="lugar4"
                    domicilio="domicilio4"
                  />
                  {dataForm.lugar1 === "DOMICILIO" && currentHour + 2 > hour && (
                    <p className="aviso__domicilio">Al haber solicitado el servicio a domicilio, su hora de reserva se ha aumentado en 2h.</p>
                  )}
                  <button className="btn__reservas" onClick={() => añadirReserva(5)}>
                    <div>
                      <p>AÑADIR A OTRA PERSONA</p>
                      <p>+</p>
                    </div>
                  </button>
                  <button type="submit" className="btn__reservas btn__dark">
                    RESERVAR CITA
                  </button>
                </form>
                <h2 style={{ marginBottom: 150 }}>Si tiene cualquier consulta puede contactar con nosotros por teléfono o mediante correo electrónico</h2>
              </>
            ) : (
              <>
                <form id="contact-form" onSubmit={handleNewBooking} onChange={(e) => loadDate(e)}>
                  <ReservasForm
                    handleInputChange={(e) => handleInputChange(e)}
                    date={startDate}
                    hour={hour}
                    minute={minute}
                    style={{ marginBottom: 50 }}
                    name="name1"
                    lastName="lastName1"
                    horareserva="horareserva1"
                    lastName="lastName1"
                    nacimiento="nacimiento1"
                    phone="phone1"
                    email="email1"
                    sintomas="sintomas1"
                    contacto="contacto1"
                    dni="dni1"
                    selectVuelo="selectVuelo1"
                    vuelo="vuelo1"
                    prueba="prueba1"
                    lugar="lugar1"
                    domicilio="domicilio1"
                  />
                  <ReservasForm
                    handleInputChange={(e) => handleInputChange(e)}
                    date={startDate}
                    hour={hour}
                    minute={minute}
                    oddMinute={oddminute}
                    name="name2"
                    horareserva="horareserva2"
                    lastName="lastName2"
                    nacimiento="nacimiento2"
                    phone="phone2"
                    email="email2"
                    sintomas="sintomas2"
                    contacto="contacto2"
                    dni="dni2"
                    selectVuelo="selectVuelo2"
                    vuelo="vuelo2"
                    prueba="prueba2"
                    lugar="lugar2"
                    domicilio="domicilio2"
                  />
                  <ReservasForm
                    handleInputChange={(e) => handleInputChange(e)}
                    date={startDate}
                    hour={hour}
                    minute={minute2}
                    name="name3"
                    horareserva="horareserva3"
                    lastName="lastName3"
                    nacimiento="nacimiento3"
                    phone="phone3"
                    email="email3"
                    sintomas="sintomas3"
                    contacto="contacto3"
                    dni="dni3"
                    vuelo="vuelo3"
                    selectVuelo="selectVuelo3"
                    prueba="prueba3"
                    lugar="lugar3"
                    domicilio="domicilio3"
                  />
                  <ReservasForm
                    handleInputChange={(e) => handleInputChange(e)}
                    date={startDate}
                    hour={hour}
                    minute={minute2}
                    oddMinute={oddminute}
                    name="name4"
                    horareserva="horareserva4"
                    lastName="lastName4"
                    nacimiento="nacimiento4"
                    phone="phone4"
                    email="email4"
                    sintomas="sintomas4"
                    contacto="contacto4"
                    selectVuelo="selectVuelo4"
                    dni="dni4"
                    vuelo="vuelo4"
                    prueba="prueba4"
                    lugar="lugar4"
                    domicilio="domicilio4"
                  />
                  <ReservasForm
                    handleInputChange={(e) => handleInputChange(e)}
                    date={startDate}
                    hour={hour}
                    minute={minute3}
                    name="name5"
                    horareserva="horareserva5"
                    lastName="lastName5"
                    nacimiento="nacimiento5"
                    phone="phone5"
                    email="email5"
                    sintomas="sintomas5"
                    contacto="contacto5"
                    dni="dni5"
                    selectVuelo="selectVuelo5"
                    vuelo="vuelo5"
                    prueba="prueba5"
                    lugar="lugar5"
                    domicilio="domicilio5"
                  />
                  {dataForm.lugar1 === "DOMICILIO" && currentHour + 2 > hour && (
                    <p className="aviso__domicilio">Al haber solicitado el servicio a domicilio, su hora de reserva se ha aumentado en 2h.</p>
                  )}

                  <button className="btn__reservas" onClick={() => añadirReserva(5)}>
                    <div>
                      <p>AÑADIR A OTRA PERSONA</p>
                      <p>+</p>
                    </div>
                  </button>
                  <button type="submit" className="btn__reservas btn__dark">
                    RESERVAR CITA
                  </button>
                </form>

                <h2 style={{ marginBottom: 150 }}>Si tiene cualquier consulta puede contactar con nosotros por teléfono o mediante correo electrónico</h2>
              </>
            )}
            {showAlert && <ToastContainer position="bottom-center" autoClose={5000000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />}
          </section>
        </div>
      </section>
      <section id="contacta-con-nosotros">
        <p id="SemiBold">Contacta con nosotros</p>
        <div id="num">
          <a href="tel:+34913 436 516" style={{ fontWeight: "normal" }}>
            (+34) 913 436 516
          </a>
        </div>

        <div className="logos_navbar">
          {/* <a href="#about"><img src={Whatsapp} /></a> */}
          <a href="https://www.facebook.com/Procorlab-100801542046256/" target="_blank">
            <img src={FB} />
          </a>
          <a href="https://instagram.com/procorlab?igshid=15t963ppv1gvc" target="_blank">
            <img src={IG} />
          </a>
          <a href="https://twitter.com/Procorlab" target="_blank">
            <img src={Twitter} />
          </a>
        </div>
      </section>
      <div className="formulario"></div>
      <section className="reservas">
        <div id="contacto">
          <div className="contact__text">
            <p>O MÁNDANOS UN CORREO</p>
          </div>
          <section className="contact__form">
            <form id="contact-form" onSubmit={sendEmail}>
              <div className="form-group">
                <input type="text" className="form-control round-input" placeholder="NOMBRE" name="name" style={{ width: "100%" }} />
              </div>
              <div className="form-group">
                <input type="email" className="form-control round-input" aria-describedby="emailHelp" name="mail" placeholder="CORREO" style={{ width: "100%" }} />
              </div>
              <div className="form-group">
                <textarea className="form-control round-input-textarea" rows="3" placeholder="CONSULTA" name="message"></textarea>
              </div>
              <div className=" botones botones--contacto">
                <p>
                  <input type="checkbox" name="terms" required /> Acepto
                  <a href="/politica-privacidad" style={{ color: "black" }}>
                    <u style={{ marginLeft: 3 }}> la política de privacidad</u>
                  </a>
                </p>

                <p id="pequeño">
                  De acuerdo con la legislación vigente sobre Protección de Datos de Carácter Personal, le informamos que los datos que nos facilite se incluirán en el sistema de tratamiento de
                  Corporación Auditiva InnoAudio, CIF: B88505953, Avenida de la Industria, 4, Edificio 1, Portal 2, Planta 3º, 28108 Alcobendas, Madrid. Tlf: 917 36 42 41, Correo electrónico:
                  info@procorlab.es, con el propósito de dar respuesta a su solicitud. Los datos que usted proporcione los guardaremos mientras se mantenga la relación comercial o durante los años
                  necesarios para cumplir con obligaciones legales. Corporación Auditiva InnoAudio le informa que tratará los datos de forma lícita, transparente y actualizada. Es por ello que
                  Corporación Auditiva InnoAudio se compromete a adoptar las medidas razonables para que los datos se supriman o rectifiquen sin demora cuando sea necesario. Los datos no se cederán
                  bajo ninguna circunstancia a terceros, excepto los casos donde exista una obligación legal. Puede ejercer sus derechos de acceso, rectificación, limitación, supresión, portabilidad y
                  oposición al tratamiento de sus datos personales dirigiéndose por escrito a info@procorlab.es. Puede consultar la información adicional y detallada sobre nuestra política de
                  privacidad en www.procorlab.es. Le informamos que puede revocar su consentimiento en cualquier momento enviando un correo electrónico a la dirección de correo electrónico:
                  info@procorlab.es. Para cualquier reclamación puede dirigirse a www.aepd.es
                </p>

                <button type="submit" className="hero_link">
                  CONTACTAR
                </button>
              </div>
            </form>
          </section>
        </div>
      </section>
      <section className="reservas__dondeEstamos">
        <h2>¿Dónde estamos?</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12129.000102770855!2d-3.6422426!3d40.536065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x876f6b02077b36a2!2sPROCOR!5e0!3m2!1ses!2ses!4v1613071657411!5m2!1ses!2ses"></iframe>
        <p>
          Avda de la industria 4, Edificio 1, Portal 2, Planta 2, 28108,
          <strong>Madrid</strong>
        </p>
      </section>
    </>
  );
};

export default Reservas;
