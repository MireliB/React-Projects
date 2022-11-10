import React from 'react'
import '../styles/Shop.css';
export default function Shop(props) {

    return (
    <div className = "Shop">
      <p className  = "name">Item: {props.name}</p>
      <p className  = "price">Price:  {props.price} ₪</p>

      <button onClick = {()=>{
         props.addToShopList(props.ind);
      }}>Add To Cart</button>
    </div>
  )
}
