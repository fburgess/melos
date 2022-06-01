import React, { useState } from "react";

function Cart({ onLogin }) {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleDelete(e, id) {
    e.preventDefault();
    setIsLoading(true);
    
  }

  function handleAddQuantity(e, id) {
    e.preventDefault();
    setIsLoading(true);
    
  }


  function handleRemoveQuantity(e, id) {
    e.preventDefault();
    setIsLoading(true);
    
  }

  return (  
    <div class="CartContainer">
   	   <div class="Header">
   	   	<h3 class="Heading">Shopping Cart</h3>
   	   	<h5 class="Action">Remove all</h5>
   	   </div>

   	   <div class="Cart-Items">
   	   	  <div class="image-box">
   	   	  	<img src="images/apple.png" class="cart-main-image"/>
   	   	  </div>
   	   	  <div class="about">
   	   	  	<h1 class="title">Apple Juice</h1>
   	   	  	<h3 class="subtitle">250ml</h3>
   	   	  	<img src="images/veg.png" class="cart-about-image"/>
   	   	  </div>
   	   	  <div class="counter">
   	   	  	<div class="btn">+</div>
   	   	  	<div class="count">2</div>
   	   	  	<div class="btn">-</div>
   	   	  </div>
   	   	  <div class="prices">
   	   	  	<div class="amount">$2.99</div>
   	   	  	<div class="save"><u>Save for later</u></div>
   	   	  	<div class="remove"><u>Remove</u></div>
   	   	  </div>
   	   </div>

   	   <div class="Cart-Items pad">
   	   	  <div class="image-box">
   	   	  	<img class="cart-main-image" src="images/grapes.png" alt=""/>
   	   	  </div>
   	   	  <div class="about">
   	   	  	<h1 class="title">Grapes Juice</h1>
   	   	  	<h3 class="subtitle">250ml</h3>
   	   	  	<img src="images/veg.png"  class="cart-about-image" alt=""/>
   	   	  </div>
   	   	  <div class="counter">
   	   	  	<div class="btn">+</div>
   	   	  	<div class="count">1</div>
   	   	  	<div class="btn">-</div>
   	   	  </div>
   	   	  <div class="prices">
   	   	  	<div class="amount">$3.19</div>
   	   	  	<div class="save"><u>Save for later</u></div>
   	   	  	<div class="remove"><u>Remove</u></div>
   	   	  </div>
   	   </div>
   	 {/* <hr>  */}
   	 <div class="checkout">
   	 <div class="total">
   	 	<div>
   	 		<div class="Subtotal">Sub-Total</div>
   	 		<div class="items">2 items</div>
   	 	</div>
   	 	<div class="total-amount">$6.18</div>
   	 </div>
   	 <button class="button">Checkout</button></div>
   </div>    

  );
}

export default Cart;
