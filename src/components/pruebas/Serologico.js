import { useEffect, useContext, useLayoutEffect } from "react";
import Flecha from "../../assets/Flecha.png";
import Casa from "../../assets/casa.png";
import Reloj from "../../assets/reloj.png";
import Escudo from "../../assets/escudo.png";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import serologico from "../../assets/serologico5.png";
import "./Pruebas.css";

const Serologico = () => {
  let { id } = useParams();
  const { fetchProductWithId, addItemToCheckout, product, openCart } = useContext(ShopContext);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchProductWithId("Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzYyNjQyODQxMTkyMjM=");
    return () => {};
  }, [fetchProductWithId, id]);

  function click(event) {
    addItemToCheckout(product.variants[0].id, 1);
    openCart();
  }
  return (
    <div id="product__page" className="serologico__page-product">
      <section className="product__title">
        <p className="hero_heading">
          <strong>Serológico</strong>
        </p>
        <p className="hero_copy">
          <strong>anticuerpos</strong> hasta 6 meses
        </p>
      </section>
      <section className="image-section">
        <div className="image__product" style={{ backgroundImage: `url(${serologico})` }}></div>
      </section>
      <section className="product__caracteristics">
        <img className="arrow bounce" src={Flecha} alt="arrow" />
        <p>CARACTERÍSTICAS DE PRODUCTO</p>
        <p id="fiabilidad">
          98,4% de fiabilidad <br></br> entre los días
        </p>
        <p id="SemiBold" className="dias_semi">
          <strong>12d - 6m</strong>
        </p>
      </section>
      <section className="product__times">
        <div className="phw">
          <img src={Escudo} alt="Escudo" />
          <p>
            Detecta el grado de inmunidad<br></br>
            (más rojo = más <strong>anticuerpos</strong>)
          </p>
        </div>
        <div className="phw" id="domicilio">
          <img src={Casa} alt="Casa" />
          <p>Toma de muestra no invasiva</p>
        </div>
        <div className="phw">
          <img src={Reloj} alt="Reloj" />
          <p>
            Resultados en un máximo de <strong>20 minutos</strong>
          </p>
        </div>
      </section>
      <section className="small__text">
        <p>
          Esta prueba es de autorrealización, no de autodiagnóstico, este tiene que ser diagnosticado por un médico.
        </p>
        <p>
          La prueba suplementaria es una <strong>serología</strong> cuantitativa Elisa.
        </p>
        <p style={{ marginBottom: "5rem" }}>Disponible individualmente o en packs de 25 uds.</p>
      </section>
      <section className="fixed--btn">
        <p id="SemiBold" style={{ marginTop: "2rem", marginBottom: "0rem", fontSize: "2rem" }}>
          30€
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

export default Serologico;
