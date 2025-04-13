import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          Selling<span className={styles.dot}>.</span>
        </div>
        <ul className={styles.navLinks}>
          <li>Home</li>
          <li>Products</li>
          <li>About Us</li>
          <li>Special</li>
          <li>Testimonials</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
