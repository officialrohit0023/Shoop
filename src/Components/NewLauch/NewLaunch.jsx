import React from 'react'
import './NewLaunch.css'
import newlaunch_product from '../Assets/newlaunch'
import Items from '../Items/Items'



const NewLaunch = () => {
  return (
    <div className='newlaunch'>
        <h1>New Launches</h1>
        <hr/>
        <div className='new-item'>
            {newlaunch_product.map((item,i)=>{
                return <Items  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewLaunch