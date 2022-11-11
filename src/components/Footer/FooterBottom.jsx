import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";

const FooterBottom = () => {
    return <>
        <div className="footer__bottom">
            <div className="container">
                <div className="footer__bottom__hero">
                    <div className="footer__bottom--logo">
                        Copyright © 2032 all rights reserved
                    </div>
                    <div className="footer__bottom--icons">
                        <NavLink to="#"><i class="fa-brands fa-cc-visa footer__bottom--icon"></i></NavLink>
                        <NavLink to=""><i class="fa-brands fa-cc-paypal footer__bottom--icon"></i></NavLink>
                        <NavLink to=""><i class="fa-brands fa-cc-mastercard footer__bottom--icon"></i></NavLink>
                    </div>
                    <div className="footer__middle--author">
                        Designed by <span className="footer__bottom--span">Oleh Chabanov</span>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default FooterBottom;
