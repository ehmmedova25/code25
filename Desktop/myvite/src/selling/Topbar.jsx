import React from 'react';
import styles from './Topbar.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiPhone, FiPhoneCall } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.wrapper}>
        <div className={styles.socials}>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
        <div className={styles.contact}>
          <span><FiPhone /> (+1) 234 5678 9101</span>
          <span><MdEmail /> shop@yourdomain.com</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;