import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RouteComponent from "./routes/RouteComponent";
import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <RouteComponent />
      </main>
      <Footer />
    </>
  );
};

export default App;
