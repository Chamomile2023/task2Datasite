import React from "react";
import './Footer.scss'
import { NavLink } from "react-router-dom";

const FooterMiddle = () => {
  return <>
    <div className="footer__middle">
      <div className="container">
        <div className="footer__middle__hero">
          <ul className="footer__middle__list">
            <p className="footer__middle--paragraph">Categories</p>
            <li className="footer__middle--item">
              <NavLink to="" className="footer__middle--navlink">
                Men
              </NavLink>
            </li>
            <li className="footer__middle--item">
              <NavLink to="" className="footer__middle--navlink">
                Women
              </NavLink>
            </li>
            <li className="footer__middle--item">
              <NavLink to="" className="footer__middle--navlink">
                Accessories
              </NavLink>
            </li>
            <li className="footer__middle--item">
              <NavLink to="" className="footer__middle--navlink">
                Beauty
              </NavLink>
            </li>
          </ul>
          <ul className="footer__middle__list">
            <p className="footer__middle--paragraph">Infomation</p>
            <li className="footer__middle--item">
              <NavLink to="" className="footer__middle--navlink">
                About Us
              </NavLink>
            </li>
            <li className="footer__middle--item">
              <NavLink to="" className="footer__middle--navlink">
                Contact Us
              </NavLink>
            </li>
            <li className="footer__middle--item">
              <NavLink to="" className="footer__middle--navlink">
                Blog
              </NavLink>
            </li>
            <li className="footer__middle--item">
              <NavLink to="" className="footer__middle--navlink">
                FAQs
              </NavLink>
            </li>
          </ul>
          <ul className="footer__middle__list">
            <p className="footer__middle--paragraph">Useful links</p>
            <li className="footer__middle--item">
              <NavLink to="" className="footer__middle--navlink">
                Terms & Conditions
              </NavLink>
            </li>
            <li className="footer__middle--item">
              <NavLink to="" className="footer__middle--navlink">
                Returns & Exchanges
              </NavLink>
            </li>
            <li className="footer__middle--item">
              <NavLink to="" className="footer__middle--navlink">
                Shipping & Delivery
              </NavLink>
            </li>
            <li className="footer__middle--item">
              <NavLink to="" className="footer__middle--navlink">
                Privacy Policy
              </NavLink>
            </li>
          </ul>
          <ul className="footer__middle__list">
            <p className="footer__middle--paragraph">CONTACT US</p>
            <li className="footer__middle--item">
              <NavLink to="" className="footer__middle--navlink">
                <i class="fa-solid fa-location-dot footer__middle--icon"></i>
                Ukraine, Kyiv,Khreshchatyk 1
              </NavLink>
            </li>
            <li className="footer__middle--item">
              <NavLink to="" className="footer__middle--navlink">
                <i class="fa-regular fa-phone footer__middle--icon"></i>
                +38 (050) 12 34 567
              </NavLink>
            </li>
            <li className="footer__middle--item">
              <NavLink to="" className="footer__middle--navlink">
                <i class="fa-solid fa-clock footer__middle--icon"></i>
                All week 24/7
              </NavLink>
            </li>
            <li className="footer__middle--item">
              <NavLink to="" className="footer__middle--navlink">
                <i class="fa-regular fa-envelope footer__middle--icon"></i>
                shaman.magic.music@gmail.com
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>;
};

export default FooterMiddle;
