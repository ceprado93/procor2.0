import React, { useContext, useState, useLayoutEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "./Shared.css";

// import { Div, SideDrawer, Text, Row, Col, Anchor, Button, Container, Icon } from "atomize";
import { ShopContext } from "../../context/shopContext";

const Cart = () => {
  const { isCartOpen, closeCart, checkout, deleteItemFromCheckout, products, addItemToCheckout, fetchAllProducts } =
    useContext(ShopContext);
  let [quan, setQuan] = useState(1);

  useLayoutEffect(() => {
    fetchAllProducts();
    return () => {};
  }, [fetchAllProducts]);

  function addItemstoCart(products, item) {
    products.map((elm, idx) => {
      if (elm.title === item.title) {
        let newQuan = 1;
        let newQuanState = quan + 1;
        setQuan(newQuanState);
        addItemToCheckout(elm.variants[0].id, newQuan);
      }

      return idx;
    });
  }

  function removeItemsFromCart(products, item) {
    if (quan > 0) {
      products.map((elm, idx) => {
        if (elm.title === item.title) {
          let minusQuan = -1;
          let minusQuanState = quan - 1;
          setQuan(minusQuanState);
          addItemToCheckout(elm.variants[0].id, minusQuan);
        }
        return idx;
      });
    } else {
      setQuan(0);
    }
  }

  function deleteProduct(checkout, item) {
    checkout.lineItems.map((elm, idx) => {
      if (elm.title === item.title) {
        deleteItemFromCheckout(elm.id);
      }

      return idx;
    });
  }

  if (isCartOpen) {
    return (
      <div className="cart__wrapper">
        <div className="cart__wrapper-color">
          <div id="cart__page">
            <div className="cart__header">
              <p>Carrito</p>
              <div onClick={() => closeCart()}>
                <p style={{ fontSize: 20 }}>x</p>
              </div>
            </div>
            <div className="cart_main">
              {checkout.lineItems.length < 1 ? (
                <Row>
                  <Col>
                    <p>El carrito está vacío</p>
                  </Col>
                </Row>
              ) : (
                <>
                  {checkout.lineItems &&
                    checkout.lineItems.map((item, idx) => (
                      <Row key={item.id} className="cart__line">
                        <Col>
                          <div
                            className="cart__productImg"
                            style={{ backgroundImage: `url(${item.variant.image.src})` }}
                          />
                        </Col>
                        <Col>
                          <p>{item.title}</p>
                        </Col>
                        <Col>
                          <div className="cart__itemList">
                            <button className="cart__button" onClick={() => removeItemsFromCart(products, item)}>
                              -
                            </button>
                            <p>{item.quantity}</p>
                            <button className="cart__button" onClick={() => addItemstoCart(products, item)}>
                              +
                            </button>
                          </div>
                        </Col>
                        <Col>
                          <p className="cart__totalPrice" maxLength="11">
                            {(item.variant.price * item.quantity).toFixed(2)}€
                          </p>
                          <button className="delete_image" onClick={() => deleteProduct(checkout, item)}>
                            X
                          </button>
                        </Col>
                      </Row>
                    ))}
                </>
              )}
            </div>
            <Row>
              <div className="cart__finalButton">
                <a href={checkout.webUrl}>
                  <button>FINALIZAR PEDIDO</button>
                </a>
              </div>
            </Row>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Cart;
