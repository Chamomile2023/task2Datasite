import React, { useContext } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RouteComponent from "./routes/RouteComponent";
import "./App.scss";
import Toggle from "./components/Toggle/Toggle";

const App = () => {
  return (
    <>
      {/* <ToggleContext.Provider> */}
      <Header />
      <Toggle />
      {/* </ToggleContext.Provider> */}
      <main className="main">
        <RouteComponent />
      </main>
      <Footer />
    </>
  );
};

export default App;
