import React from 'react';
import styles from './Cards.module.css';

const Cards = ({ item }) => {
  return (
    <div className={styles.productCard}>
      <img
        src={item.image}
        alt={item.title}
        className={styles.productImage}
      />
      <h2 className={styles.productTitle}>{item.title}</h2>
      <p className={styles.productPrice}>{item.price} $</p>
      <button className={styles.addToCartBtn}>ADD TO CART</button>
    </div>
  );
};

export default Cards;
