import React from "react";
import "./Toggle.scss";
import { NavLink } from "react-router-dom";

const Toggle = () => {
  return (
    <>
      <div className="toggle">
        <div className="container">
          <div className="toggle__hero">
            <ul className="toggle__list">
              <li className="toggle__item">
                <NavLink to="/" className="toggle__item--links">
                  About Us
                </NavLink>
              </li>
              <li className="toggle__item">
                <NavLink to="/" className="toggle__item--links">
                  Women
                </NavLink>
              </li>
              <li className="toggle__item">
                <NavLink to="/" className="toggle__item--links">
                  Men
                </NavLink>
              </li>
              <li className="toggle__item">
                <NavLink to="/" className="toggle__item--links">
                  Beauty
                </NavLink>
              </li>
              <li className="toggle__item">
                <NavLink to="/" className="toggle__item--links">
                  Accessories
                </NavLink>
              </li>
              <li className="toggle__item">
                <NavLink to="/" className="toggle__item--links">
                  Blog
                </NavLink>
              </li>
              <li className="toggle__item">
                <NavLink to="/" className="toggle__item--links">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toggle;
