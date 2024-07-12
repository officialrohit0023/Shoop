import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers </h1>
        <p>Join our Channel And Stay Updated !</p>
        <div className='inpt-btn'>
            <input type="email" placeholder='Your Email ' />
            <button>Join</button>
        </div>
    </div>
  )
}

export default NewsLetter