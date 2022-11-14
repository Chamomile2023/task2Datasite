import React, { useContext, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RouteComponent from "./routes/RouteComponent";
import "./App.scss";
import Toggle from "./components/Toggle/Toggle";
import { ToggleContext } from "./components/context/Toggle/ToggleContext";

const App = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <>
      <ToggleContext.Provider value={{ show, setShow }}>
        <Header />
        <Toggle />
      </ToggleContext.Provider>
      <main className="main">
        <RouteComponent />
      </main>
      <Footer />
    </>
  );
};

export default App;
