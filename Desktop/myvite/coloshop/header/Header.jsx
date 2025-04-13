import React from 'react'
import styles from './Header.module.css'
import { BiBasket, BiSearch, BiUser } from 'react-icons/bi'

const Header = () => {
  return (
 
    <div>
    <div className={styles.header}>
      <div className={styles.headerBox}>
        <h1 className={styles.logo}><span>COLO</span><span className={styles.shop}>SHOP</span></h1>
        <div className={styles.navs}>
          <a href="">HOME</a>
          <a href="">SHOP</a>
          <a href="">PROMOTION</a>
          <a href="">PAGES</a>
          <a href="">BLOG</a>
          <a href="">CONTACT</a>
        </div>
        <div className={styles.icons}>
          <button className={styles.iconBtn}><BiSearch /></button>
          <button className={styles.iconBtn}><BiUser /></button>
          <div className={styles.basketWrapper}>
            <button className={styles.iconBtn}><BiBasket /></button>
            <span className={styles.basketCount}>2</span>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.hero}>
      <div className={styles.heroBox}>
        <div className={styles.left}>
          <p className={styles.smallText}>SPRING / SUMMER COLLECTION 2017</p>
          <h1 className={styles.title}>Get up to 30% Off<br />New Arrivals</h1>
          <button className={styles.shopBtn}>SHOP NOW</button>
        </div>
      </div>
      <img 
        src="https://preview.colorlib.com/theme/coloshop/images/slider_1.jpg" 
        alt="Banner" 
        className={styles.heroImage}
      />
    </div>


    
  </div>
);
};

  
export default Header;

