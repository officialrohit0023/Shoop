import React from 'react'
import NewLaunch from '../Components/NewLauch/NewLaunch'
import Offers from '../Components/Offers/Offers';
import Others from '../Components/Others/Others';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import Hero from '../Components/Hero/Hero';

 const Shop = () => {
  return (
    <div>
      <Hero/>
      <NewLaunch/>
      <Offers/>
      <Others/>
      <NewsLetter/>
    </div>
  )
}
export default Shop;
