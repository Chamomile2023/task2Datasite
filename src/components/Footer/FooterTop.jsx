import React from "react";
import "./Footer.scss";

const FooterTop = () => {
  return (
    <>
      <div className="footer__top">
        <div className="container">
          <div className="footer__top--hero">
            <h2 className="footer__top--logo">BE IN TOUCH WITH US:</h2>
            <div className="footer__top--email">
              <input
                type="text"
                placeholder="Enter your email"
                className="footer__top--input"
              />
              <button className="footer__top--btn">Join Us</button>
            </div>
            <div className="footer__top--icons">
              <ul className="header__right--list footer__top--list">
                <li className="header__right--item">
                  <a href="#">
                    <i className="fa-brands fa-facebook header__right--icon"></i>
                  </a>
                </li>
                <li className="header__right--item">
                  <a href="#">
                    <i className="fa-brands fa-twitter header__right--icon"></i>
                  </a>
                </li>
                <li className="header__right--item">
                  <a href="#">
                    <i className="fa-brands fa-instagram header__right--icon"></i>
                  </a>
                </li>
                <li className="header__right--item">
                  <a href="#">
                    <i className="fa-brands fa-pinterest header__right--icon"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTop;
