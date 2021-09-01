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
                <img className="item-image" alt="red daruma doll" src={RedDaruma} /> 
                <div id="description"> Red Daruma for luck!</div>
                <div id="price"> $12.99</div>
                <button className="item-button" 
                onClick={() => { props.add("Red Daruma") }
                }
                 >Add To cart</button>
            </div>
            <div className="item">
                <img className="item-image"  alt="black daruma doll" src={BlackDaruma} /> 
                <div id="description"> Black Daruma!</div>
                <div id="price"> $15.99</div>
                <button className="item-button" onClick={() => props.add("Black Daruma")}>Add to cart</button>
            </div>

            <div className="item">
                <img className="item-image"  alt="yellow daruma doll" src={YellowDaruma} /> 
                <div id="description"> Yellow Daruma!</div>
                <div id="price"> $15.99</div>
                <button className="item-button" onClick={() => props.add("Yellow Daruma")}>Add to cart</button>
            </div>

            <div className="item">
                <img className="item-image"  alt="purple daruma doll" src={PurpleDaruma} /> 
                <div id="description"> Purple Daruma!</div>
                <div id="price"> $18.99</div>
                <button className="item-button" onClick={() => props.add("Purple Daruma")}>Add to cart</button>
            </div>

            <div className="item">
                <img className="item-image"  alt="pink daruma doll" src={PinkDaruma} /> 
                <div id="description"> Pink Daruma!</div>
                <div id="price"> $13.99</div>
                <button className="item-button" onClick={() => props.add("Pink Daruma")}>Add to cart</button>
            </div>

            <div className="item">
                <img className="item-image"  alt="gold daruma doll" src={GoldDaruma} /> 
                <div id="description"> Gold Daruma!</div>
                <div id="price"> $19.99</div>
                <button className="item-button" onClick={() => props.add("Gold Daruma")}>Add To cart</button>
            </div>
        </div>
    );
};
export default Shop;