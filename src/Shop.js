import React from "react";
import RedDaruma from "./images/reddaruma.jpg"
import BlackDaruma from "./images/blackdaruma.png";
import YellowDaruma from "./images/yellowdaruma.png";
import PurpleDaruma from "./images/purpledaruma.png";
import PinkDaruma from "./images/pinkdaruma.png";
import GoldDaruma from "./images/golddaruma.png";
import CurrentProducts from "./CurrentProducts";

const Shop = (props) => {

        let productList = CurrentProducts();

    return (
        <div id="shop" className="shop">
            <div className="item">
                <img className="item-image" alt="red daruma doll" src={RedDaruma} /> 
                <div id="description"> Red Daruma for luck!</div>
                <div id="price"> $12.99</div>
                <button className="item-button" onClick={() => props.add(productList[0])} >Add To cart</button>
            </div>
            <div className="item">
                <img className="item-image"  alt="black daruma doll" src={BlackDaruma} /> 
                <div id="description"> Black Daruma!</div>
                <div id="price"> $15.99</div>
                <button className="item-button" onClick={() => props.add(productList[1])}>Add To cart</button>
            </div>

            <div className="item">
                <img className="item-image"  alt="yellow daruma doll" src={YellowDaruma} /> 
                <div id="description"> Yellow Daruma!</div>
                <div id="price"> $15.99</div>
                <button className="item-button" onClick={() => props.add(productList[2])}>Add To cart</button>
            </div>

            <div className="item">
                <img className="item-image"  alt="purple daruma doll" src={PurpleDaruma} /> 
                <div id="description"> Purple Daruma!</div>
                <div id="price"> $18.99</div>
                <button className="item-button" onClick={() => props.add(productList[3])}>Add To cart</button>
            </div>

            <div className="item">
                <img className="item-image"  alt="pink daruma doll" src={PinkDaruma} /> 
                <div id="description"> Pink Daruma!</div>
                <div id="price"> $13.99</div>
                <button className="item-button" onClick={() => props.add(productList[4])}>Add To cart</button>
            </div>

            <div className="item">
                <img className="item-image"  alt="gold daruma doll" src={GoldDaruma} /> 
                <div id="description"> Gold Daruma!</div>
                <div id="price"> $19.99</div>
                <button className="item-button" onClick={() => props.add(productList[5])}>Add To cart</button>
            </div>
        </div>
    );
};
export default Shop;