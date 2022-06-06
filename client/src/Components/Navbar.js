import { Link } from "react-router-dom";
import React, { useState } from "react";

function Navbar({user, setUser}) {
  const [cartCount, setCartCount] = useState(0);

  function handleLogout() {
    // window.localStorage.removeItem('cart');
    // window.localStorage.removeItem('orders');

    fetch("/logout",{
      method: "DELETE",
    }).then(() => setUser())
  }

  function getCartCount() {
    setInterval(() => {
      let cartObject = window.localStorage.getItem('cart');

      let cart = [];
      
      if (cartObject) {
        cart = JSON.parse(cartObject);
      }

      let count = 0;

      cart.forEach((item) => {
        count += item.quantity;
      })

      setCartCount(count);
    }, 5000)
  }

  getCartCount();

  if(!user) 
  return(
    <header>
      <div>
        <h1 class="logo-name">Melo's Jamaican Joint </h1>
        <h5 class="logo-sub">"Just Another Day In Paradise"</h5>
      </div>
       
        <div class="container green borderXwidth">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/ratings">Ratings</Link>
          <Link to="/signin">Sign-In</Link>
        </div>
    
  </header>
  )
  else{
  return (
  
      <header>
          <div>
          <h1 class="logo-name">Melo's Jamaican Joint </h1>
          <h5 class="logo-sub">"Just Another Day In Paradise"</h5>
          </div>
       

        <div class="container green borderXwidth">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/ratings">Ratings</Link>
          <Link to="/Cart">Cart ({cartCount})</Link>
          <Link to="/orderhistory">Order History</Link>
          <Link to="/" onClick={handleLogout}>Logout</Link>
          
        </div>

      </header>

  );
}}

export default Navbar;