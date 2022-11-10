import React from "react";
import "../styles/Cart.css";

export default function Cart(props) {
  const {addToShopList} = props;
    
  // Counts the 
  const totalCount = ()=>{
    let count = 0; 
    props.cartItems.forEach((elem)=>{
      count+= elem.price;
    })
    return count;
  }

  const totalShopList = ()=>{
    let counter = 0; 
    props.cartItems.forEach((elem)=>{
      counter++;
    })
    return counter;
  }

  return (
    <div>
      <label className = "home">Home</label>
        <h2>Mirel's Mobile Shop</h2>
          <p>Sale Of Cellular & Electrical Products</p>
          <div className = "totalPrice">Total Price: {totalCount()}₪ </div>
          <div className = "cart-Container" tabIndex = "-1">

          {/* Shows and adds the lists to cart shop with the name and price */}
            <label >Cart</label>
            <div className = "list">
            {props.cartItems.map((val, ind)=>{
                return <p>List: {val.name} <br /> Price: {val.price} ₪</p>
              })}
            </div>
            {/* Shows the total items in cart. */}
            <div>Total Cart: <br /> {totalShopList()}</div>
             {/* Removes the items from cart. */}
              <button className = "trashButton" onClick = {()=>{
                props.deleteFromList(props.ind)
              }}>Remove</button>
              {/* Buy button, it Reloads the site, */}
              <button className = "buyButton" onClick = {()=>{
                props.deleteCart()
              }}>Buy</button>
             </div>

    </div>
  );
}
