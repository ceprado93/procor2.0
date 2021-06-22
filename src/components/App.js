import "./App.css";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import ShopProvider from "../context/shopContext";

import Routes from "./routes/Routes";
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";
import Cart from "./shared/Cart";

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

function App() {
  return (
    <>
      <ShopProvider>
        <StyletronProvider value={engine} debug={debug} debugAfterHydratation>
          <Navigation />
          <Cart />
          <main>
            <Routes />
          </main>
          <Footer />
        </StyletronProvider>
      </ShopProvider>
    </>
  );
}

export default App;
