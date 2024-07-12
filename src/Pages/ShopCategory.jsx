import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Items from '../Components/Items/Items'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' height="500px" width="100%" src={props.banner} alt="" />
      <div className='shop-indexSort'>
        <p>
          <span>Showing 1-12</span> ot of 39 producta
        </p>
        <div className='shopcategory-sort'>
          Sort by
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category === item.category){
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory