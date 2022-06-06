import React, { useEffect, useState } from "react";

function Cart({ onLogin }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function getCart() {
    setInterval(() => {
      let cartObject = window.localStorage.getItem('cart');

      let cart = [];
      
      
      if (cartObject) {
          cart = JSON.parse(cartObject);
      }

      let total = 0;

      cart.forEach((item) => {
          total = total + parseFloat(item.price*item.quantity);
      });

      setTotal(total);
      setCart(cart);
    }, 500);
  }

  useEffect(() => {
    getCart();
  }, []);
  


  function handleDelete(index) {
    setIsLoading(true);

    cart.splice(index, 1);

    window.localStorage.setItem('cart', JSON.stringify(cart));
    setCart(cart);
    setIsLoading(false);
  }

  function handleDeleteAll() {
    setIsLoading(true);


    window.localStorage.setItem('cart', JSON.stringify([]));
    setCart([]);
    setIsLoading(false);
    
  }

  function handleAddQuantity(index) {
      console.log(index);
    setIsLoading(true);

    cart[index].quantity++;
    let newCart = [...cart];

    window.localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(cart);
    setIsLoading(false);
  }


  function handleRemoveQuantity(index) {
    setIsLoading(true);

    cart[index].quantity--;
    let newCart = [...cart];

    window.localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(cart);
    setIsLoading(false);
    
  }

  function getItemQuantity(item) {
    return item.quantity;
  }

  function handleCheckout() {
    let cartObject = window.localStorage.getItem('cart');
    let orderHistoryObject = window.localStorage.getItem('orderHistory');

    let cart = [];
    
    if (cartObject) {
        cart = JSON.parse(cartObject);
    }


    let orderHistory = [];
    
    if (orderHistoryObject) {
      orderHistory = JSON.parse(orderHistoryObject);
    }

    if (cart.length > 0) {
      cart.date = new Date();
      orderHistory.push(cart);
      window.localStorage.setItem('cart', JSON.stringify([]));
      window.localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    }

    alert('Checkout Complete');
    window.location.href = '/orderhistory'
  }

  const renderItems = cart.map((item, index)=>(
    
    <div class="Cart-Items"  key={index}>
        <div class="image-box">
            <img src={item.image} class="cart-main-image"/>
        </div>
        <div class="about">
            <h1 class="title">{item.name}</h1>
            <h3 class="subtitle">{item.category}</h3>
        </div>
        <div class="counter">
        <button class="btn"  onClick={() => handleAddQuantity(index)}>+</button>
        <div class="count">{getItemQuantity(item)}</div>
        <button class="btn"  onClick={() => handleRemoveQuantity(index)}>-</button>
        </div>
        <div class="prices">
        <div class="amount">{item.price*item.quantity}</div>
        {/* <div class="save"><u>Save for later</u></div> */}
        <button class="remove" onClick={() => handleDelete(index)}><u>Remove</u></button>
        </div>
    </div>
  ));

  return (  
    <div class="CartContainer">
   	   <div class="Header">
   	   	<h3 class="Heading">Shopping Cart</h3>
   	   	<h5 class="Action" onClick={() => handleDeleteAll()}>Remove all</h5>
   	   </div>

        {renderItems}
   	   
   	 {/* <hr>  */}
   	 <div class="checkout">
   	 <div class="total">
   	 	<div>
   	 		<div class="Subtotal">Total</div>
   	 		<div class="items">Items</div>
   	 	</div>
   	 	<div class="total-amount">${total}</div>
   	 </div>
   	 <button class="" onClick={() => handleCheckout()}>Checkout</button>
    </div>
   </div>    

  );
}

export default Cart;
