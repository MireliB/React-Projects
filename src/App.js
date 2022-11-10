import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./components/Top.jsx";
import Footer from "./components/Footer";
import "./App.css";
import Cart from "./components/Cart.jsx";
import Shop from "./components/Shop.jsx";

//Add discounts for items. 
//Add card number with cvv and year/month.

function App() {
  const [cartItems, setCartItems] = useState([]);

  const [lists, setLists] = useState([{name: ' Computer ', price: 3500 , image: '' },
  {name: ' Galaxy S21 ', price: 2700 },
  {name: ' Charger ', price: 120 },
  {name: ' Computer Screen ', price: 1000 },
  {name: ' Logitech G-PRO ', price: 300 },
  {name: ' KeyBoard G-403 ', price: 590 },
  {name: ' HyperX Cloud Mix ', price: 750 },
  {name: ' Audio Technica AT2020 ', price: 250 },
  {name: ' Logitech Z333 ', price: 150 },
])
  
  const addToShopList = (index)=>{
  let item = lists[index];
  let temp = [...cartItems, item];
  setCartItems([...temp]);
  }

  const deleteFromList = (index) => {
    let temp = [...cartItems];
    temp.splice(index, 1);
    setCartItems([...temp]);
  };  

  const deleteCart = ()=>{
    setCartItems([]);
  }

  return (
    <div className="App">
      <Top />
        <div className = "cart">
          <Cart cartItems = {cartItems} deleteFromList = {deleteFromList} deleteCart = {deleteCart} />
        </div>
        <div className = "shopList">
          <h2>Choose an Item</h2>
          {lists.map((val, ind)=>{
            return <Shop addToShopList = {addToShopList} ind = {ind} name = {val.name} price = {val.price}/>
          })}
        </div>
      <Footer />
    </div>
  );
}

export default App;
