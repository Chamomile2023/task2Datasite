import React from "react";
import "./Footer.scss";
import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <FooterTop />
        <FooterMiddle />
        <FooterBottom />
      </footer>
    </>
  );
};

export default Footer;
