import React from "react";
import "./MainBody.scss";
import Button from "../Button/Button";
import one from "../img/1.jpg";
import two from "../img/2.jpg";
import three from "../img/3.jpg";
import four from "../img/4.jpg";
import svg1 from "../img/i1.svg";
import svg2 from "../img/i2.svg";
import svg3 from "../img/i3.svg";

const MainBody = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="main__hero">
            <div className="main__pictures">
              <div className="main__left">
                <img src={one} alt="one" className="main__picture--img1" />
                <Button className="main__left--one">your Title text </Button>
              </div>
              <div className="main__right">
                <div className="main__right--top">
                  <div className="main__picture--two">
                    <img src={two} alt="two" className="main__picture--img2" />
                    <Button className="main__left--two">Women</Button>
                  </div>
                  <div className="main__picture--two">
                    <img
                      src={three}
                      alt="three"
                      className="main__picture--img2"
                    />
                    <Button className="main__left--three">Men</Button>
                  </div>
                </div>
                <div className="main__picture--bottom">
                  <img src={four} alt="four" className="main__picture--img" />
                  <Button className="main__left--four">Accessories</Button>
                </div>
              </div>
            </div>
            <div className="main__words">
              <div className="main__word">
                <div className="main__word--img">
                  <img src={svg1} alt="" />
                </div>
                <div className="main__text">
                  <h5 className="main__text--title">FREE SHIPPING</h5>
                  <p className="main__text--paragraph">
                    On all UA order or order above $100
                  </p>
                </div>
              </div>
              <div className="main__word">
                <div className="main__word--img">
                  <img src={svg2} alt="" />
                </div>
                <div className="main__text">
                  <h5 className="main__text--title">30 DAYS RETURN</h5>
                  <p className="main__text--paragraph">
                    Simply return it within 30 days for an exchange
                  </p>
                </div>
              </div>
              <div className="main__word">
                <div className="main__word--img">
                  <img src={svg3} alt="" />
                </div>
                <div className="main__text">
                  <h5 className="main__text--title">SUPPORT 24/7</h5>
                  <p className="main__text--paragraph">
                    Contact us 24 hours a day, 7 days a week
                  </p>
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
