import { useLayoutEffect, useState } from "react";
import "./App.css";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { useSelector, useDispatch } from "react-redux";
import { selectOption } from "../redux/store";
import { useLocation } from "react-router-dom";
import ShopProvider from "../context/shopContext";
import { ToastContainer, toast } from "react-toastify";
import Routes from "./routes/Routes";
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";
import Cart from "./shared/Cart";

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

function App() {
  let location = useLocation();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    location.pathname != "/" && dispatch({ type: "hide" });

    notify();
  }, []);

  function notify() {
    toast("Este sitio web usa cookies propias y de terceros, si permanece aquí acepta su uso.", {
      position: "bottom-center",
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <>
      <ShopProvider>
        <StyletronProvider value={engine} debug={debug} debugAfterHydratation>
          <Navigation />
          <Cart />
          <main>
            <Routes />

            <ToastContainer position="bottom-center" hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover autoClose={false} />
          </main>
          <Footer />
        </StyletronProvider>
      </ShopProvider>
    </>
  );
}

export default App;
