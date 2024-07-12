import React from 'react'
import './Footer.css'
import insta from '../Assets/Photos/instagram.png'
import pin from '../Assets/Photos/pinterest-logo.png'
import wp from '../Assets/Photos/whatsapp.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <p>SHOOP</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container"><img height="50px" width="50px" src={insta} alt="" /></div>
            <div className="footer-icon-container"><img height="50px" width="50px" src={pin} alt="" /></div>
            <div className="footer-icon-container"><img height="50px" width="50px" src={wp} alt="" /></div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer