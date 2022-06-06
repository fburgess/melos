import React, { useEffect, useState } from "react";

function OrderHistory () {
  const [orderHistory, setOrderHistory] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function getOrderHistory() {
    setInterval(() => {
      let orderHistoryObject = window.localStorage.getItem('orderHistory');

      let orderHistory = [];
      
      
      if (orderHistoryObject) {
        orderHistory = JSON.parse(orderHistoryObject);
      }

      setOrderHistory(orderHistory);
    }, 500);
  }

  function getTotal(cart){
    let totals = 0;
    cart.map((item) => {
      totals = totals + parseFloat(item.price*item.quantity);
    })
  
    return totals
  }

  useEffect(() => {
    getOrderHistory();
  }, []);

  function getCartItems(cart) {
    return cart.map((item, index)=>(
      <div class="Cart-Items"  key={index}>
          
  
          <div class="image-box">
              <img src={item.image} class="cart-main-image"/>
          </div>
          <div class="about">
              <h1 class="title">{item.name}</h1>
              <h3 class="subtitle">{item.category}</h3>
          </div>
          <div class="counter">
          {/* <button class="btn"  onClick={() => handleAddQuantity(index)}>+</button>
          <div class="count">{getItemQuantity(item)}</div>
          <button class="btn"  onClick={() => handleRemoveQuantity(index)}>-</button> */}
          </div>
          <div class="prices">
          <div class="amount">{item.price*item.quantity}</div>
          </div>
      </div>
    ))
  }


  const renderItems = orderHistory.map((item, index)=>(
    <div>

      <h3>Order {index + 1} </h3>

      <hr></hr>

      {getCartItems(item)}
      {getTotal(item)}
    </div>
  ));

  return (
    <div className="searchbar">
      <h2> Order History</h2>
      <div class="search-box">
      
      </div>

      {renderItems}
    </div>
  );
}

export default OrderHistory;