import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import cart from '../Assets/Photos/cart.png'
import { useSelector } from 'react-redux'

 const Navbar = () => {

  const cartItems = useSelector(state => state.cart.cart)
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <p>SHOOP</p>
      </div>
      <ul className='nav-menu'>
        <li><Link style={{textDecoration: 'none', color: '#626262'}} to='/'>Shop</Link></li>
        <li><Link style={{textDecoration: 'none', color: '#626262'}} to='/mens'>Mens</Link></li>
        <li><Link style={{textDecoration: 'none', color: '#626262'}} to='/womens'>Womens</Link></li>
        <li><Link style={{textDecoration: 'none', color: '#626262'}} to='/kids'>Kids</Link></li>
        
      </ul>
      <div className="nav-login-cart">
        <Link to='/loginsignup'><button>      Login</button></Link>
        <Link style={{textDecoration: 'none'}} to='/cart'><img height="40px" width="40px" src={cart} alt="" /></Link>
        <div className="nav-cart-count">
        {cartItems.length}
        </div>
      </div>
    </div>
  )
}
export default Navbar;
