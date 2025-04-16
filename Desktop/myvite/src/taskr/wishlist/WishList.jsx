import React, { useState, useEffect } from 'react';
import styles from './Wishlist.module.css';  

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem('wish')) || []);

  const removeFromWishlist = (id) => {
    const newWishlist = wishlist.filter(item => item.id !== id);
    setWishlist(newWishlist);
    localStorage.setItem('wish', JSON.stringify(newWishlist));
  };

  return (
    <div className={styles.wishlistWrapper}>
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Wishlist boşdur</p>
      ) : (
        wishlist.map(item => (
          <div key={item.id} className={styles.wishlistItem}>
            <img src={item.image} alt={item.title} className={styles.wishlistImage} />
            <div className={styles.wishlistInfo}>
              <span>{item.title}</span>
              <span>{item.price} $</span>
            </div>
            <button onClick={() => removeFromWishlist(item.id)} className={styles.removeBtn}>Sil</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
