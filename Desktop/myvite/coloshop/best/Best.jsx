import React, { useEffect, useState } from 'react';
import { FaTruck ,FaMoneyBillAlt ,FaUndo ,FaRegClock } from "react-icons/fa";
import styles from './Best.module.css'
import Cards from '../card/Cards';
import axios from "axios";

const Products = () => {
    const [db, setDb] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setDb(res.data);
            })
            .catch(err => console.error("API error:", err));
    }, []);

    return (
        <main className={styles.mainContent}>
            <div className={styles.mainContainer}>
                <div className={styles.sectionTitle}>
                    <h2>Best Sellers</h2>
                </div>
                <div className={styles.productsSection}>
                    {db.slice(14, 19).map(item => (
                        <Cards key={item.id} item={item} />
                    ))}
                </div>

                <div className={styles.infoBox}>
                    <div className={styles.mainContainer}>
                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}><FaTruck /></div>
                            <div className={styles.infoText}>
                                <h6>FREE SHIPPING</h6>
                                <p>Suffered Alteration in Some Form</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}><FaMoneyBillAlt /></div>
                            <div className={styles.infoText}>
                                <h6>Cash on Delivery</h6>
                                <p>The Internet Tend To Repeat</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}><FaUndo /></div>
                            <div className={styles.infoText}>
                                <h6>45 Days Return</h6>
                                <p>Making it Look Like Readable</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}><FaRegClock /></div>
                            <div className={styles.infoText}>
                                <h6>Opening All Week</h6>
                                <p>8AM - 09PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Products;
