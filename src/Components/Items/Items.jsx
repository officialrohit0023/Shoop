import React from 'react'
import './Items.css'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../../redux/cartSlice'


const Items = (props) => {
  const dispatch = useDispatch()
  return (
    <div className='item'>
        <img height="250px" width="250px" src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">${props.new_price}</div>
            <div className="item-price-old">${props.old_price}</div>
            <button className='addtocart-btn' onClick={() => dispatch(addtoCart(props))} >
              Add to cart</button>
        </div>
    </div>
  )
}

export default Items