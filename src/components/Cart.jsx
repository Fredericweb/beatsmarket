import React, {useEffect} from 'react';

const tele = window.Telegram.WebApp;

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

    useEffect(() => {
        tele.ready();
      });
    return (
        
        <div>
            <span>{total}</span>
        </div>
    );
};

export default Cart;