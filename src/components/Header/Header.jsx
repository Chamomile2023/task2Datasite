import React, { useContext, useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { ToggleContext } from "../context/Toggle/Toggle";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__black">
          <div className="container">
            <div className="header__navbar">
              <div className="header__navbar--left">
                <ul className="header__left--list">
                  <li className="left__list--item">
                    <i className="fa-solid fa-phone header__list--icon"></i>
                    <a
                      href="tel: +38 (050) 12 34 567"
                      className="header__left--link"
                    >
                      +38 (050) 12 34 567
                    </a>
                  </li>
                  <li className="left__list--item fa-2 additional">
                    <i className="fa-solid fa-location-dot header__list--icon"></i>
                    <a href="#" className="header__left--link ">
                      Ukraine, Kyiv,Khreshchatyk 1
                    </a>
                  </li>
                  <li className="left__list--item additional">
                    <i className="fa-solid fa-clock header__list--icon"></i>
                    <a href="#" className="header__left--link ">
                      All week 24/7
                    </a>
                  </li>
                </ul>
              </div>
              <div className="header__navbar--right">
                <ul className="header__right--list">
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
        <div className="header__nav">
          <div className="container">
            <div className="header__hero">
              <div className="header__logo">
                <NavLink to="/" className="header__logo--logo">
                  MiSto
                </NavLink>
              </div>
              <div className="header__toggle">
                <i className="fa-solid fa-bars"></i>
              </div>
              <ul className="header__list">
                <li className="header__item">
                  <NavLink to="/" className="header__item--links">
                    About Us
                  </NavLink>
                </li>
                <li className="header__item">
                  <NavLink to="/" className="header__item--links">
                    Women
                  </NavLink>
                </li>
                <li className="header__item">
                  <NavLink to="/" className="header__item--links">
                    Men
                  </NavLink>
                </li>
                <li className="header__item">
                  <NavLink to="/" className="header__item--links">
                    Beauty
                  </NavLink>
                </li>
                <li className="header__item">
                  <NavLink to="/" className="header__item--links">
                    Accessories
                  </NavLink>
                </li>
                <li className="header__item">
                  <NavLink to="/" className="header__item--links">
                    Blog
                  </NavLink>
                </li>
                <li className="header__item">
                  <NavLink to="/" className="header__item--links">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div className="header__icons">
                <i className="fa-solid fa-magnifying-glass header__icon"></i>
                <i className="fa-regular fa-user header__icon"></i>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
