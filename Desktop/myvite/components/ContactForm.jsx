import React, { useState } from 'react';
import styles from './ContactForm.module.css';





export default function ContactForm() {


  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[message,setMessage]=useState('')
  const[url,setUrl]=useState('')
  
  const sendData=(e)=>{
    e.preventDeafult()
  
    axios.post('https://northwind.vercel.app/api/categories',{  
      name:name,
      surname:surnme,
      email:email,
      url:url
  }
  
  
    )
  }
  

  return (
    <div className={styles.container}>
      <form onSubmit={sendData} className={styles.formBox}>
        <h2 className={styles.title}>GET IN TOUCH</h2>

        <div className={styles.row}>
       
          <div className={styles.formGroup}>
            <label>Tell us your name *</label>
            
            <input type="text" name="" id="" value={name} placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className={styles.formGroup}>
            <label>Enter your email *</label>
            <input type="email" name="" id="" value={email} placeholder="Enter your email " onChange={(e)=>setEmail(e.target.value)} />
          </div>
        </div>

        <div className={`${styles.formGroup} ${styles.full}`}>
          <label>Your Website</label>
          <input type="url" placeholder="http://"  name="" id="" value={url}  onChange={(e)=>setUrl(e.target.value)} />
        </div>

        <div className={`${styles.formGroup} ${styles.full}`}>
          <label>Message</label>
          <textarea placeholder="Your message here..."  name="" id="" value={message}  onChange={(e)=>setMessage(e.target.value)}/>
        </div>

        <div className={styles.submitBtn}>
          <button type="submit">SUBMIT</button>
        </div>
      </form>

      <p className={styles.contactNumber}>Call us on +001 345 6178</p>
    </div>
  );
}
