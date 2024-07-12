import React from 'react'
import './Others.css'
import trending_products from '../Assets/trending'
import Items from '../Items/Items'

const Others = () => {
  return (
    <div className='trending'>
        <h1>TRENDING</h1>
        <hr />
        <div className="trending-item">
            {trending_products.map((item,i)=>{
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
        .
    </div>
  )
}

export default Others