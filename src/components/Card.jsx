import React, { useState} from 'react';

const Card = ({prod, onAdd, onRemove}) => {

    const { title, Image, price } = prod;
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
        onAdd(prod);
      };
      const handleDecrement = () => {
        setCount(count - 1);
        onRemove(prod);
      };
    
    return (
        <article className="products__card">
            <div className="products__content">
               <img className='products__img' src= {Image} alt={title} />
    
                <h3 className="products__title">{title}</h3>
                <span className="products__price">${price}</span>
                <span className="products__qty">{count}</span>

                <button className="button button--flex products__button_less">
                    <i className="ri-add-line button__icon" onClick={()=> handleIncrement()}></i>
                </button>
                {
                    count > 0 ? <button className="button button--flex products__button " onClick={()=> handleDecrement()}>
                    <i className="ri-subtract-line button__icon"></i>
                </button> : ""

                }
                
            </div>
        </article>
    );
};

export default Card;