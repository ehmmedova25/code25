import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './Cards.module.css';
import { useNavigate } from 'react-router';

const Cards = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => {
      setData(res.data);
    });
  }, []);

  const addToBasket = (item) => {
    let basket = JSON.parse(localStorage.getItem('basket')) || [];
    let basketProduct = basket.find(index => index.id === item.id);

    if (basketProduct) {
      basketProduct.count += 1;
    } else {
      basket = [...basket, { ...item, count: 1 }];
    }

    localStorage.setItem('basket', JSON.stringify(basket));
  };

  const addToWishlist = (item) => {
    let wishlist = JSON.parse(localStorage.getItem('wish')) || [];
    let wishlistProduct = wishlist.find(index => index.id === item.id);

    if (wishlistProduct) {
      alert('Məhsul artıq wishlist-də var!');
    } else {
      wishlist = [...wishlist, item];
      localStorage.setItem('wish', JSON.stringify(wishlist));
    }
  };

  return (
    <div className={styles.cardWrapper}>
      {data.map((item) => {
        const inWishlist = JSON.parse(localStorage.getItem('wish'))?.some(x => x.id === item.id);

        return (
          <div key={item.id} className={styles.cardItem}>
            <div className={styles.imageBox}>
              <img src={item.image} alt={item.title} />
            </div>
            <div className={styles.cardInfo}>
              <span className={styles.cardTitle}>{item.title}</span>
              <span className={styles.cardPrice}>{item.price} $</span>
            </div>
            <div className={styles.buttonGroup}>
              <button onClick={() => addToBasket(item)}>Add to Cart</button>
              <button onClick={() => addToWishlist(item)}>
                {inWishlist ? 'In wishlist' : 'Add to wislist'}
              </button>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Cards;
