import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../components/Main/Main";
import Toggle from "../components/Toggle/Toggle";

const RouteComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};

export default RouteComponent;
