import React from 'react'
import Layout from '../../coloshop/layout/Layout'
import Header from '../../coloshop/Header/Header'
import Product from '../../coloshop/products/Product'
import Count from '../../coloshop/count/Count'
import Best from '../../coloshop/best/Best'
import Finish from '../../coloshop/finish/Finish'
const Home = () => {
  return (
    <div>
     <Layout>
        <Header/>
        <Product/>
        <Count></Count>
      
        <Best></Best> 
         <Finish></Finish>
     </Layout>
    </div>
  )
}

export default Home
