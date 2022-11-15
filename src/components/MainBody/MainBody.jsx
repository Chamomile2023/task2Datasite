import React from "react";
import './MainBody.scss'
import Button from "../Button/Button";

const MainBody = () => {
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="main__hero">
                        <div className="main__pictures">
                            <div className="main__left">
                                <img src="/src/img/1.png" alt="one" className="main__picture--img1" />
                                <Button className="main__left--one">your Title text </Button>
                            </div>
                            <div className="main__right">
                                <div className="main__right--top">
                                    <div className="main__picture--two">
                                        <img src="/src/img/2.jpg" alt="two" className="main__picture--img2" />
                                        <Button className="main__left--two">Women</Button>
                                    </div>
                                    <div className="main__picture--two">
                                        <img src="/src/img/3.jpg" alt="three" className="main__picture--img2" />
                                        <Button className="main__left--three">Men</Button>
                                    </div>
                                </div>
                                <div className="main__picture--bottom">
                                    <img src="/src/img/4.jpg" alt="four" className="main__picture--img" />
                                    <Button className="main__left--four">Accessories</Button>
                                </div>
                            </div>
                        </div>
                        <div className="main__words">
                            <div className="main__word">
                                <div className="main__word--img">
                                    <img src="/src/img/i1.svg" alt="" />
                                </div>
                                <div className="main__text">
                                    <h5 className="main__text--title">FREE SHIPPING</h5>
                                    <p className="main__text--paragraph">On all UA order or order above $100</p>
                                </div>
                            </div>
                            <div className="main__word">
                                <div className="main__word--img">
                                    <img src="/src/img/i2.svg" alt="" />
                                </div>
                                <div className="main__text">
                                    <h5 className="main__text--title">30 DAYS RETURN</h5>
                                    <p className="main__text--paragraph">Simply return it within 30 days for an exchange</p>
                                </div>
                            </div>
                            <div className="main__word">
                                <div className="main__word--img">
                                    <img src="/src/img/i3.svg" alt="" />
                                </div>
                                <div className="main__text">
                                    <h5 className="main__text--title">SUPPORT 24/7</h5>
                                    <p className="main__text--paragraph">Contact us 24 hours a day, 7 days a week</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainBody;
