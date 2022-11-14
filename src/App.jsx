import React, { useContext, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import RouteComponent from "./routes/RouteComponent";
import "./App.scss";
import Toggle from "./components/Toggle/Toggle";
import { ToggleContext } from "./components/context/Toggle/ToggleContext";
import Main from "./components/Main/Main";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <ToggleContext.Provider value={{ show, setShow }}>
        <Header />
        <Toggle />
      </ToggleContext.Provider>
      <main className="main">
        <Main />
      </main>
      <Footer />
    </>
  );
};

export default App;
