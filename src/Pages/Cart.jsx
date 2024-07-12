import { useSelector,useDispatch } from 'react-redux';
import { removefromCart } from '../redux/cartSlice';
import React from 'react'
import './CSS/Cart.css'

const Cart = () => {
  const cartitems = useSelector(state => state.cart.cart)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Cart Items</h1>
      {
        cartitems.map(item=> {
          return (
            <div>
              <div className='cart-item'>
                <div><img height='200px' width='200px' src={item.image} alt="" />
                <h4>{item.name}</h4></div>
                
              <div>
                <button  className='remove-btn' onClick={() => dispatch(removefromCart({id:item.id}))}>Remove</button>
                </div>

                
              <div>+ 1 -</div>
              <div>Price : ${item.new_price}</div>
                </div>
                <hr width='75%' />
            </div>
            

                
              
              
          
          )
        })
      }



    </div>
  )
}

export default Cart