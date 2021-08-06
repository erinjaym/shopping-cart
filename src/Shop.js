import React from "react";

const Shop = (props) => {
    return (
        <div id="shop" className="shop">
            <div className="item">{props.item1}</div>
            <div className="item">Item 2</div>
            <div className="item">Item 3</div>
            <div className="item">Item 4</div>
            <div className="item">Item 5</div>
            <div className="item">Item 6</div>
        </div>
    );
};
export default Shop;