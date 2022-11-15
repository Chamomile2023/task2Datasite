import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../components/Main/Main";
import MainBody from "../components/MainBody/MainBody";
import Toggle from "../components/Toggle/Toggle";

const RouteComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainBody />} />
      </Routes>
    </>
  );
};

export default RouteComponent;
