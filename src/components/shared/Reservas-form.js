import React, { useState, useEffect } from "react";

const ReservasForm = (props) => {
  const [fechaReserva, setFechaReserva] = useState();
  const [propsReserva, setHoraReserva] = useState({
    hora: props.hour,
    minuto: props.minute,
    dia: props.date,
  });
  const [vuelo, setVuelo] = useState("no");
  const [domicilio, setDomicilio] = useState("");

  useEffect(() => {
    loadDate();
  }, [props]);

  function loadDate() {
    setHoraReserva({ hora: props.hour, minuto: props.minute, dia: props.date });
    const dia = props.date.toString();
    const diacorto = dia.substr(0, 15);
    let dateWithTime;
    if (!props.oddMinute) {
      dateWithTime = diacorto + "-" + props.hour + "h" + props.minute + 0;
    } else if (props.oddMinute === true) {
      dateWithTime = diacorto + "-" + props.hour + "h" + props.minute + 5;
    }
    setFechaReserva(dateWithTime);
  }

  function handleFligthChange(event) {
    handleInputChange(event);
    if (event.target.value === "SI") {
      setVuelo(event.target.value);
    }
  }

  function handleLocation(event) {
    handleInputChange(event);
    console.log(event.target.value);
    setDomicilio(event.target.value);
  }

  function handleInputChange(event) {
    props.handleInputChange(event.target);
  }

  return (
    <>
      <div className="form-group" style={{ visibility: "hidden" }}>
        <input
          type="text"
          className="form-control round-input"
          placeholder="HORA RESERVA"
          name={props.horareserva}
          value={fechaReserva}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-line">
        <div className="form-group half-long">
          <input
            type="text"
            className="form-control round-input"
            placeholder="NOMBRE"
            name={props.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group half-long2">
          <input
            type="text"
            className="form-control round-input"
            placeholder="APELLIDOS"
            name={props.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group short">
          <input
            type="text"
            className="form-control round-input"
            placeholder="FECHA DE NACIMIENTO"
            name={props.nacimiento}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="form-line">
        <div className="form-group half-long">
          <input
            type="text"
            className="form-control round-input"
            placeholder="TELEFONO DE CONTACTO"
            name={props.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group half-long2">
          <input
            type="email"
            className="form-control round-input"
            placeholder="EMAIL"
            name={props.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group short">
          <input
            type="text"
            className="form-control round-input"
            placeholder="DNI"
            name={props.dni}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="form-line-select">
        <div className="form-group select1">
          <select name={props.sintomas} className="form-control-select" onChange={handleInputChange}>
            <option>PRESENTA SÍNTOMAS</option>
            <option>SI</option>
            <option>NO</option>
          </select>
        </div>
        <div className="form-group select2">
          <select name={props.contacto} className="form-control-select" onChange={handleInputChange}>
            <option>CONTACTO CON POSITIVOS</option>
            <option>SI</option>
            <option>NO</option>
          </select>
        </div>
      </div>
      <div className="form-line">
        <div className={vuelo === "SI" ? "form-group siVuelo" : "form-group selectVuelo "}>
          <select name={props.selectVuelo} className="form-control-select" onChange={handleFligthChange}>
            <option>¿TIENE UN VUELO PRÓXIMAMENTE?</option>
            <option>SI</option>
            <option>NO</option>
          </select>
        </div>
        <div className={vuelo === "SI" ? "form-group inputVuelo" : "form-group noVuelo "}>
          <input
            type="text"
            className="form-control round-input"
            placeholder="FECHA DEL VUELO (dd/mm/aaaa)"
            name={props.vuelo}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-line-select">
        <div className="form-group select1">
          <select name={props.prueba} className="form-control-select" onChange={handleInputChange}>
            <option>TIPO DE PRUEBA (opcional)</option>
            <option>PCR EN SALIVA</option>
            <option>SEROLOGICO</option>
            <option>ANTIGENOS</option>
            <option>ANTIGENOS DE SALIVA</option>
            <option>SALIVA</option>
          </select>
        </div>
        <div className="form-group select2">
          <select name={props.lugar} className="form-control-select" onChange={handleLocation} required>
            <option>PRUEBA EN CLÍNICA O A DOMICILIO</option>
            <option>CLÍNICA</option>
            <option>DOMICILIO</option>
          </select>
        </div>
      </div>
      <div className="form-line">
        <div
          className={domicilio === "CLÍNICA" || domicilio === "DOMICILIO" ? "form-group domicilio" : "formgroup-hidden"}
        >
          <input
            value={
              domicilio === "CLÍNICA"
                ? "Avda. de la Industria, 4. Edificio 1, Portal 2, Plata 2. Alcobendas"
                : undefined
            }
            type="text"
            className="form-control round-input"
            placeholder="DIRECCIÓN DE DOMICILIO"
            name={props.domicilio}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
};

export default ReservasForm;
