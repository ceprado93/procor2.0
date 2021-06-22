import React, { useLayoutEffect, useEffect, useContext } from "react";
import Flecha from "../../assets/Flecha.png";
import Avion from "../../assets/avion.png";
import Casa from "../../assets/casa.png";
import Reloj from "../../assets/reloj.png";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import "./Pruebas.css";
import pcr from "../../assets/pcr5.png";

const Pcr = (props) => {
  let { id } = useParams();
  const { fetchProductWithId, addItemToCheckout, product, openCart } = useContext(ShopContext);
  useLayoutEffect(() => {
    window.scrollTo(0, 1);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 1);
    fetchProductWithId("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODYxNTA4Mzk=");
    return () => {};
  }, [fetchProductWithId, id]);

  function click(event) {
    addItemToCheckout(product.variants[0].id, 1);
    openCart();
  }

  return (
    <div id="product__page">
      <section className="product__title">
        <p className="hero_heading">
          <strong>PCR</strong> en saliva
        </p>
        <p className="hero_copy">
          en tu casa, en <strong>12 horas</strong>
        </p>
      </section>
      <section className="image-section">
        <div className="image__product" style={{ backgroundImage: `url(${pcr})` }}></div>
      </section>
      <section className="product__caracteristics">
        <img className="arrow bounce" src={Flecha} alt="arrow" />
        <p>CARACTERÍSTICAS DE PRODUCTO</p>
        <p id="fiabilidad">
          99% de fiabilidad <br></br> Resultados en
        </p>
        <p id="SemiBold" className="dias_semi">
          <strong>6 - 24h</strong>
        </p>
      </section>
      <section className="product__times">
        <div className="phw">
          <img src={Avion} alt="Avion" />
          <p>Apta para viajar</p>
        </div>
        <div className="phw" id="domicilio">
          <img src={Casa} alt="Casa" />
          <p>Recogida de muestra a domicilio</p>
        </div>
        <div className="phw">
          <img src={Reloj} alt="Reloj" />
          <p>
            Resultados en <strong>6 h*</strong>
          </p>
        </div>
      </section>
      <section className="small__text">
        <p>
          Se recomienda enjuagarse la boca con agua diez minutos antes de realizar la prueba y no haber fumado, comido
          ni bebido nada (salvo agua) <br></br>al menos durante toda la hora anterior.
        </p>
        <p>
          La prueba se realiza a domicilio y la muestra se manda a analizar al laboratorio de la Universidad Carlos III
          de <strong>Madrid</strong>.
        </p>
        <p style={{ marginBottom: "5rem" }}>
          *Servicio exprés en <strong>6 h</strong> solo disponible para la Comunidad de
          <strong style={{ marginLeft: 3 }}>Madrid</strong>. Para el resto del territorio peninsular
          <strong> 24h</strong>.
        </p>
      </section>
      <section className="fixed--btn">
        <p id="SemiBold" style={{ marginTop: "2rem", marginBottom: "0rem", fontSize: "2rem" }}>
          100€
        </p>
        <div className=" boton--producto" style={{ paddingTop: "0rem" }}>
          <button onClick={click} className="hero_link">
            COMPRAR AHORA
          </button>
        </div>
      </section>
    </div>
  );
};

export default Pcr;
