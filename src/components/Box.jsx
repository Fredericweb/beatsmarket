import React,{ useEffect,useState } from 'react';
import axios from 'axios';
import Card from './Card';
const { getData } = require("../DB/Db");

const prods = getData();
const tele = window.Telegram.WebApp;
const telegramData = tele.initDataUnsafe;


const Box = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    tele.ready();
  });
//  gestion d'ajout au panier
  const  onAdd = async (prods) => {
    const exist = cartItems.find((x) => x.id === prods.id);
     if  (exist) {
     setCartItems(
        cartItems.map((x) =>
          x.id === prods.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...prods, quantity: 1 }]);
    }
  };

// gestion de suppression du panier
  const onRemove = async (prods) => {
    const exist = cartItems.find((x) => x.id === prods.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== prods.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === prods.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const total = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  if(total > 0) {
    tele.MainButton.show()
    tele.MainButton.setParams({
        'text': `Valider la commande Total: ${total} $US`,
        'color': "#2ECC71",
        'text_color': "#F7F9F9"
      })
      tele.MainButton.onClick (() =>{
        const totalCart = cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
        let count = 0
        if(totalCart > 1 && count !=0){
            axios.post("https://beatsbot0.herokuapp.com/click",{
              total: totalCart,
              user: telegramData.user
            } )
            count++
        }
                   
     })
  }else{
      tele.MainButton.hide()
  }


    return (
      <main className='main'>
        <h2 className='section__title section__title-gradient products__line'>
            Choisie <br />Ton style
        </h2>
        
        <div className="products__container container grid">
          {
            prods.map((prod) => (
              <Card key={prod.id} prod={prod} onAdd={onAdd} onRemove={onRemove} />
            ))
          }
        </div>
      </main>
    );
};

export default Box;