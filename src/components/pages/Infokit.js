import React, { useState } from "react";

import emailjs from "emailjs-com";
const InfoKit = () => {
  const [thanks, setThanks] = useState(false);
  const [language, setLanguage] = useState("");
  const [firstModal, setfirstModal] = useState(true);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_ms36otd", "template_96eo56f", e.target, "user_29SCJ5tSmyhfUETa03XNu").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
    toggleModal();
  }

  function toggleModal() {
    thanks ? setThanks(false) : setThanks(true);
  }

  const toggleSelect = (e) => {
    e.preventDefault();
    firstModal ? setfirstModal(false) : setfirstModal(true);
  };

  const selectLanguage = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <>
      {firstModal && (
        <div className="hotel__modalWrapper">
          <form onSubmit={toggleSelect}>
            <select placeholder="SELECT LANGUAGE / SELECCIONE IDIOMA" onChange={(e) => selectLanguage(e)}>
              <option>SELECT LANGUAGE / SELECCIONE IDIOMA</option>
              <option>Español</option>
              <option>English</option>
            </select>
            <button type="submit">SET</button>
          </form>
        </div>
      )}
      {language === "Español" ? (
        <div id="contacto">
          <div className="contact__text">
            <p style={{ marginTop: 0, paddingTop: "6rem", fontSize: 25 }}>CONTACTA CON NOSOTROS</p>
          </div>
          <section className="contact__form">
            <form id="contact-form" onSubmit={sendEmail}>
              <div className="form-group">
                <input style={{ paddingLeft: "1rem" }} type="text" className="form-control" placeholder="NOMBRE Y APELLIDOS" name="name" />
              </div>
              <div className="form-group">
                <input style={{ paddingLeft: "1rem" }} type="text" className="form-control" placeholder="NÚMERO PASAPORTE O DNI" name="dni" />
              </div>
              <div className="form-group">
                <input style={{ paddingLeft: "1rem" }} type="text" className="form-control" placeholder="FECHA DE NACIMIENTO" name="birthDate" />
              </div>
              <div className="form-group">
                <input style={{ paddingLeft: "1rem" }} type="text" className="form-control" placeholder="NACIONALIDAD" name="birth" />
              </div>
              <div className="form-group">
                <input style={{ paddingLeft: "1rem" }} type="text" className="form-control" placeholder="FECHA DEL VUELO (DD/MM/AA - HH:MM)" name="date" />
              </div>
              <div className="form-group">
                <input style={{ paddingLeft: "1rem" }} type="text" className="form-control" placeholder="DESTINO VUELO" name="destination" />
              </div>
              <div className="form-group">
                <input style={{ paddingLeft: "1rem" }} type="email" className="form-control" aria-describedby="emailHelp" name="mail" placeholder="CORREO" />
              </div>
              <div className="form-group">
                <input style={{ paddingLeft: "1rem" }} type="text" className="form-control" placeholder="MÓVIL" name="phone" />
              </div>
              <div className="form-group">
                <input style={{ paddingLeft: "1rem" }} type="text" className="form-control" placeholder="NÚMERO DE MUESTRA " name="muestra" />
              </div>
              <p>* El número de muestra se encuentra en el bote de recogida de la misma</p>

              <div className=" botones botones--contacto">
                <p style={{ marginTop: "4rem" }}>
                  <input type="checkbox" name="terms" required /> Acepto
                  <u style={{ marginLeft: 3 }}>la política de privacidad</u>
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
          {thanks && (
            <div className="thanks__message">
              <p onClick={() => toggleModal()}>Su formulario ha sido enviado con éxito. Gracias por su confianza.</p>
            </div>
          )}
        </div>
      ) : (
        <div id="contacto">
          <div className="contact__text">
            <p style={{ marginTop: 0, paddingTop: "6rem", fontSize: 25 }}>TEST DETAILS FORM</p>
          </div>
          <section className="contact__form">
            <form id="contact-form" onSubmit={sendEmail}>
              <div className="form-group">
                <input style={{ paddingLeft: "1rem" }} type="text" className="form-control" placeholder="FIRST & LAST NAME" name="name" />
              </div>
              <div className="form-group">
                <input style={{ paddingLeft: "1rem" }} type="text" className="form-control" placeholder="PASSPORT OR ID NUMBER" name="dni" />
              </div>
              <div className="form-group">
                <input style={{ paddingLeft: "1rem" }} type="text" className="form-control" placeholder="NATIONALITY" name="birth" />
              </div>
              <div className="form-group">
                <input style={{ paddingLeft: "1rem" }} type="text" className="form-control" placeholder="BIRTH DATE" name="birthDate" />
              </div>
              <div className="form-group">
                <input style={{ paddingLeft: "1rem" }} type="text" className="form-control" placeholder="DATE OF FLIGHT (DD/MM/YY - HH:MM)" name="date" />
              </div>
              <div className="form-group">
                <input style={{ paddingLeft: "1rem" }} type="text" className="form-control" placeholder="FLIGHT DESTINATION" name="destination" />
              </div>
              <div className="form-group">
                <input style={{ paddingLeft: "1rem" }} type="email" className="form-control" aria-describedby="emailHelp" name="mail" placeholder="EMAIL" />
              </div>
              <div className="form-group">
                <input style={{ paddingLeft: "1rem" }} type="text" className="form-control" placeholder="PHONE NUMBER" name="phone" />
              </div>
              <div className="form-group">
                <input style={{ paddingLeft: "1rem" }} type="text" className="form-control" placeholder="TEST NUMBER " name="muestra" />
              </div>
              <p>* The test number is located on the side of the sample pot</p>

              <div className=" botones botones--contacto">
                <p style={{ marginTop: "4rem" }}>
                  <input type="checkbox" name="terms" required /> Accept
                  <u style={{ marginLeft: 3 }}>the privacy policy</u>
                </p>

                <p id="pequeño">
                  In accordance with current legislation on Protection of Personal Data, we inform you that the data you provide will be included in the treatment system of Corporación Auditiva
                  InnoAudio, CIF: B88505953, Avenida de la Industria, 4, Edificio 1, Portal 2 , 3rd Floor, 28108 Alcobendas, Madrid. Tlf: 917 36 42 41, Email: info@procorlab.es, in order to respond to
                  your request. The data that you provide will be kept as long as the commercial relationship is maintained or during the years necessary to comply with legal obligations. Corporación
                  Auditiva InnoAudio informs you that it will treat the data in a lawful, transparent and updated manner. That is why Corporación Auditiva InnoAudio undertakes to adopt reasonable
                  measures so that the data is deleted or rectified without delay when necessary. The data will not be transferred under any circumstances to third parties, except in cases where there
                  is a legal obligation. You can exercise your rights of access, rectification, limitation, deletion, portability and opposition to the processing of your personal data by writing to
                  info@procorlab.es. You can consult additional and detailed information about our privacy policy at www.procorlab.es. We inform you that you can revoke your consent at any time by
                  sending an email to the email address: info@procorlab.es. For any claim you can go to www.aepd.es
                </p>
                <button type="submit" className="hero_link">
                  SEND
                </button>
              </div>
            </form>
          </section>
          {thanks && (
            <div className="thanks__message">
              <p onClick={() => toggleModal()}>Your form has been sent, thank you for depositing your confidence in our services</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default InfoKit;
