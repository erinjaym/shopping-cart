import RedDaruma from "./images/reddaruma.jpg";
import BlackDaruma from "./images/blackdaruma.png";
import YellowDaruma from "./images/yellowdaruma.png";
import PurpleDaruma from "./images/purpledaruma.png";
import PinkDaruma from "./images/pinkdaruma.png";
import GoldDaruma from "./images/golddaruma.png";

const CurrentProducts = () => {
        let item1= { name: "Red Daruma" , picture: RedDaruma, quantity: 0, price: 12.99};
        let item2 = { name: "Black Daruma" , picture: BlackDaruma, quantity: 0, price: 15.99};
        let item3 = { name: "Yellow Daruma" , picture: YellowDaruma, quantity: 0, price: 15.99};
        let item4 = { name: "Purple Daruma" , picture: PurpleDaruma, quantity: 0, price: 18.99};
        let item5 = { name: "Pink Daruma" , picture: PinkDaruma, quantity: 0, price: 13.99};
        let item6 = { name: "Gold Daruma" , picture: GoldDaruma, quantity: 0, price: 19.99};

    return ( [item1, item2, item3, item4, item5, item6] );
};

export default CurrentProducts;