import React from "react";
import "./Footer.scss";
import FooterTop from "./FooterTop";

const Footer = () => {
  return <>
    <footer className="footer">
      <FooterTop />
      <div className="footer__middle">
        <div className="container">
          <div className="footer__middle--hero"></div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom--hero"></div>
        </div>
      </div>
    </footer></>;
};

export default Footer;
