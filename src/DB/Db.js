import product1 from "../img/product1.png";
import product2 from "../img/product2.png";
import product3 from "../img/product3.png";
import product4 from "../img/product4.png";
import product5 from "../img/product5.png";

export function getData() {
  return [
    { title: "Black Beats", price: 250, Image: product1 ,id:1 },
    { title: "Black Red", price: 255, Image: product2 ,id:2 },
    { title: "Black Gold", price: 300, Image: product3 ,id:3},
    { title: "Blue Beats", price: 150, Image: product4,id:4 },
    { title: "Beats Fun", price: 500, Image: product5,id:5 },
  ];
}
