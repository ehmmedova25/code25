import React from "react";
import { Routes, Route } from "react-router";
import Cards from "../taskr/cards/Cards"; 
import Basket from "../taskr/basket/Basket"; 
import Wishlist from "../taskr/wishlist/Wishlist"; 

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Cards />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
};

export default Router;
