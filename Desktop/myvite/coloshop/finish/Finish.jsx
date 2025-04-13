import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaSkype,
  FaPinterest,
} from 'react-icons/fa';
import styles from './Finish.module.css';

const Finish = () => {
  return (
    <>
      <main className={styles.blogSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2>Latest Blogs</h2>
          </div>

          <div className={styles.blogGrid}>
            <img
              src="https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg"
              alt="Blog 1"
            />
            <img
              src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg"
              alt="Blog 2"
            />
            <img
              src="https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg"
              alt="Blog 3"
            />
          </div>
        </div>
      </main>

      <div className={styles.newsletterSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.newsletterContent}>
            <div className={styles.newsletterInfo}>
              <h3>Newsletter</h3>
              <p>
                Subscribe to our newsletter and get 20% off your first purchase
              </p>
            </div>
            <div className={styles.newsletterForm}>
              <input type="email" placeholder="Your email" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footerSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.footerTop}>
            <div className={styles.footerNav}>
              <a href="/">Blog</a>
              <a href="/">FAQs</a>
              <a href="/">Contact us</a>
            </div>

            <div className={styles.footerSocials}>
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaSkype />
              <FaPinterest />
            </div>
          </div>
          <p className={styles.footerBottomText}>
            ©2018 All Rights Reserved. This template is made with ❤️ by{" "}
            <a href="https://colorlib.com">Colorlib</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Finish;
