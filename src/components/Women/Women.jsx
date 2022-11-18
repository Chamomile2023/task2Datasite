import React from "react";
import './Women.scss'
import data from '../data/data'
import Card from '../Card/Card'

const Women = () => {
    console.log(data);
    return <>
        <div className="women">
            <div className="container">
                <div className="women__hero">
                    <h2 className="women__title">WOMEN'S</h2>
                    <div className="women__cards">
                        {
                            data.map((card) => {
                                return (
                                    <Card card={card} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Women;
