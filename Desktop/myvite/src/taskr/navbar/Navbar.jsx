import React from 'react';
import { Link } from 'react-router';  
import styles from './Navbar.module.css'; 

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">GG</Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/wishlist">Wishlist</Link></li>
        <li><Link to="/basket">Basket</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
