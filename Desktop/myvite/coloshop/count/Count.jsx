import React, { useState, useEffect } from 'react';
import styles from './Count.module.css';

const Count = () => {
  const initialTime = {
    days: 2,
    hours: 22,
    minutes: 25,
    seconds: 0,
  };

  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days -= 1;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(interval);
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.timerSection}>
      <div className={styles.timerContainer}>
        <img
          src="https://preview.colorlib.com/theme/coloshop/images/deal_ofthe_week.png"
          alt="Deal of the Week"
        />
        <div className={styles.timerRight}>
          <h2 className={styles.timerTitle}>Deal Of The Week</h2>
          <div className={styles.timerDisplay}>
            <div className={styles.timeUnit}>
              <span className={styles.timeValue}>{time.days}</span>
              <span className={styles.timeLabel}>Day</span>
            </div>
            <div className={styles.timeUnit}>
              <span className={styles.timeValue}>{time.hours}</span>
              <span className={styles.timeLabel}>Hours</span>
            </div>
            <div className={styles.timeUnit}>
              <span className={styles.timeValue}>{time.minutes}</span>
              <span className={styles.timeLabel}>Mins</span>
            </div>
            <div className={styles.timeUnit}>
              <span className={styles.timeValue}>{time.seconds}</span>
              <span className={styles.timeLabel}>Sec</span>
            </div>
          </div>
          <button className={styles.timerButton}>SHOP NOW</button>
        </div>
      </div>
    </section>
  );
};

export default Count;
