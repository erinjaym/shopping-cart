import React from "react";
import RedDaruma from "./images/reddaruma.jpg"
import BlackDaruma from "./images/blackdaruma.png";
import YellowDaruma from "./images/yellowdaruma.png";
import PurpleDaruma from "./images/purpledaruma.png";
import PinkDaruma from "./images/pinkdaruma.png";
import GoldDaruma from "./images/golddaruma.png";

const Shop = (props) => {
    return (
        <div id="shop" className="shop">
            <div className="item">
                <img className="item-image" src={RedDaruma} /> 
                <div id="description"> Red Daruma for luck!</div>
                <button className="item-button">Add To cart</button>
            </div>
            <div className="item">
                <img className="item-image" src={BlackDaruma} /> 
                <div id="description"> Black Daruma!</div>
                <button className="item-button">Add To cart</button>
            </div>

            <div className="item">
                <img className="item-image" src={YellowDaruma} /> 
                <div id="description"> Yellow Daruma!</div>
                <button className="item-button">Add To cart</button>
            </div>

            <div className="item">
                <img className="item-image" src={PurpleDaruma} /> 
                <div id="description"> Purple Daruma!</div>
                <button className="item-button">Add To cart</button>
            </div>

            <div className="item">
                <img className="item-image" src={PinkDaruma} /> 
                <div id="description"> Pink Daruma!</div>
                <button className="item-button">Add To cart</button>
            </div>

            <div className="item">
                <img className="item-image" src={GoldDaruma} /> 
                <div id="description"> Gold Daruma!</div>
                <button className="item-button">Add To cart</button>
            </div>
        </div>
    );
};
export default Shop;