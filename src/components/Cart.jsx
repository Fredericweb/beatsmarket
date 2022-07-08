import axios from 'axios';
import React, {useEffect} from 'react';

const tele = window.Telegram.WebApp;
const telegramData = tele.initDataUnsafe

const Cart = ({cartItems}) => {
    useEffect(() => {
        tele.ready();
      });
    const total = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

if(total > 0) {
    tele.MainButton.show()
    tele.MainButton.setParams({
        'text': `Valider la commande Total: ${total} Fcfa`,
        'color': "#2ECC71",
        'text_color': "#F7F9F9"
      })
      tele.MainButton.onClick (() =>{
            axios.post("https://beatsbot0.herokuapp.com/click",{
            total: total,
            user: telegramData.user
            } ).then(()=> {
                tele.close()
            })
          
     })
}else{
    tele.MainButton.hide()
}


    
    return (
        
        <div>
            <span>{total}</span>
            {/* <button onClick={t}>click</button> */}
        </div>
    );
};

export default Cart;