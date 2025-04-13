import React, { useEffect, useState } from 'react';
import styles from './Product.module.css';
import Cards from '../card/Cards';
import axios from "axios";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.error("API error:", err));
  }, []);

  return (
    <main className={styles.mainContent}>
      <div className={styles.wrapper}>

        <div className={styles.titleSection}>
          <h2>New Arrivals</h2>
          <div>
            <a href="#">ALL</a>
            <a href="#">WOMEN'S</a>
            <a href="#">ACCESSORIES</a>
            <a href="#">MEN'S</a>
          </div>
        </div>

        <div className={styles.cardWrapper}>
          {data.slice(0, 10).map(item => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Product;
