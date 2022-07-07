import axios from 'axios';
import React, {useEffect} from 'react';

const tele = window.Telegram.WebApp;
const telegramData = tele.initDataUnsafe

const Cart = ({cartItems}) => {

    const total = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

if(total > 0) {
    tele.MainButton.show()
    tele.MainButton.setParams({
        'text': `Valider la commande Total: ${total} Fcfa`,
        'color': "#2ECC71",
        'text_color': "#F7F9F9"
      })
    
}else{
    tele.MainButton.hide()
}
tele.MainButton.onClick (() =>{
    
 })

 const t = () =>{
    axios.post("http://localhost:4000/click",{
        total: total,
        user: telegramData.user,
        currence: "UZS"
    } )
 }
    useEffect(() => {
        tele.ready();
      });
    return (
        
        <div>
            <span>{total}</span>
            <button onClick={t}>click</button>
        </div>
    );
};

export default Cart;