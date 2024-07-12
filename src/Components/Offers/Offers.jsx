import React from 'react'
import './Offers.css'
import oimg from '../Assets/Photos/model.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img height="500px" src={oimg} alt="" />
        </div>
    </div>
  )
}

export default Offers