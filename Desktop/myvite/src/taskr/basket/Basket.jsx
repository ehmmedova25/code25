import React, { useState, useEffect } from 'react';
import styles from './Basket.module.css';  

const Basket = () => {
  const [basket, setBasket] = useState(() => JSON.parse(localStorage.getItem('basket')) || []);

  const removeFromBasket = (id) => {
    const newBasket = basket.filter(item => item.id !== id);
    setBasket(newBasket);
    localStorage.setItem('basket', JSON.stringify(newBasket));
  };

  const increaseQuantity = (id) => {
    const newBasket = basket.map(item => 
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setBasket(newBasket);
    localStorage.setItem('basket', JSON.stringify(newBasket));
  };

  const decreaseQuantity = (id) => {
    const newBasket = basket.map(item => 
      item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item
    );
    setBasket(newBasket);
    localStorage.setItem('basket', JSON.stringify(newBasket));
  };

  return (
    <div className={styles.basketWrapper}>
      <h2>Səbət</h2>
      {basket.length === 0 ? (
        <p>Səbətiniz boşdur</p>
      ) : (
        basket.map(item => (
          <div key={item.id} className={styles.basketItem}>
            <img src={item.image} alt={item.title} className={styles.basketImage} />
            <div className={styles.basketInfo}>
              <span>{item.title}</span>
              <span>{item.price} $</span>
              <div className={styles.quantity}>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.count}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
            </div>
            <button onClick={() => removeFromBasket(item.id)} className={styles.removeBtn}>Sil</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Basket;
