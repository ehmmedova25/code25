import React from 'react';
import HeroSection from './selling/HeroSection';
import Navbar from './selling/Navbar';
import Topbar from './selling/Topbar';
import ProductGrid from './selling/ProductGrid';
import InputSection from './selling/InputSection'
import FeaturedProduct from './selling/FeaturedProduct'
import  AboutUS from './selling/AboutUs'
import Team from './selling/Team'
import SummerSale from './selling/SummerSale'
import ServicesSection from './selling/ServicesSection'
import TestimonialSection from './selling/TestimonialSection'
function App() {
  return (
    <div>
<Topbar/>
<Navbar/>
<HeroSection/>
<ProductGrid/>
<InputSection/>
<FeaturedProduct/>
<AboutUS/>
<Team/>
<SummerSale/>
<ServicesSection/>
<TestimonialSection/>
    </div>
  );
}

export default App;
