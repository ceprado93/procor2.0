import React, { useEffect, useContext, useLayoutEffect } from "react";
import Flecha from "../../assets/Flecha.png";
import Casa from "../../assets/casa.png";
import Reloj from "../../assets/reloj.png";
import Persona from "../../assets/persona.png";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import "./Pruebas.css";
import saliva from "../../assets/anticuerpos-saliva5.png";

const Saliva = () => {
  let { id } = useParams();
  const { fetchProductWithId, addItemToCheckout, product, openCart } = useContext(ShopContext);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchProductWithId("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODY4Mzg5Njc=");
    return () => {};
  }, [fetchProductWithId, id]);

  function click(event) {
    addItemToCheckout(product.variants[0].id, 1);
    openCart();
  }
  return (
    <div id="product__page" className="saliva__page-product">
      <section className="product__title">
        <p className="hero_heading">Saliva</p>
        <p className="hero_copy">El test más cómodo</p>
      </section>
      <section className="image-section">
        <div className="image__product" style={{ backgroundImage: `url(${saliva})` }}></div>
      </section>
      <section className="product__caracteristics">
        <img className="arrow bounce" src={Flecha} alt="arrow" />
        <p>CARACTERÍSTICAS DE PRODUCTO</p>
        <p id="fiabilidad">
          95% de fiabilidad <br></br> entre los dias
        </p>
        <p id="SemiBold" className="dias_semi">
          4 - 27
        </p>
      </section>
      <section className="product__times">
        <div className="phw">
          <img src={Persona} alt="Persona" />
          <p>Capacidad de detectar asintomáticos</p>
        </div>
        <div className="phw" id="domicilio">
          <img src={Casa} alt="Casa" />
          <p>Toma de muestra no invasiva</p>
        </div>
        <div className="phw">
          <img src={Reloj} alt="Reloj" />
          <p>Resultados en un máximo de 20 minutos</p>
        </div>
      </section>
      <section className="small__text">
        <p>
          Se recomienda enjuagarse la boca con agua diez minutos antes de realizar la prueba y no haber fumado, comido
          ni bebido nada (salvo agua) <br></br>al menos durante toda la hora anterior.
        </p>
        <p style={{ marginBottom: "5rem" }}>
          A partir del día 14, comienza la respuesta inmunitaria a nivel sistema y pasa por completo a la sangre. Por
          esta razón, no mide la inmunidad,
          <br></br> pero sí realiza una detección precoz.
        </p>
      </section>
      <section className="fixed--btn" style={{ marginLeft: "0rem" }}>
        <p id="SemiBold" style={{ marginTop: "2rem", marginBottom: "0rem", fontSize: "2rem" }}>
          50€
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

export default Saliva;
