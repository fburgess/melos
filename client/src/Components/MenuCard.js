import React from 'react';
import { Link } from 'react-router-dom';


function MenuCard({key, id, name, image, category, price, user}) {
   
  function addToCart(e) {
    e.preventDefault();

    let cartObject = window.localStorage.getItem('cart');

    let cart = [];
    
    if (cartObject) {
      cart = JSON.parse(cartObject)
    }

    cart.push({
      id,
      name,
      image,
      category,
      price,
      quantity: 1
    });

    window.localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${name} was added to Cart!`);
  }

    return (
      <>
      {/* <Navbar /> */}
      <section className="menu-card">
          <div key={key} class="">
            <img class="" src={image} alt={name} />
            <h2 class="">{name}</h2>
                  <div class="con">
                    <p>Category: {category}</p>
                    <p>Price: {price}</p>
                    <Link to={`/ratings/${id}`}><button button class="rating-btn">Rating</button></Link><br></br>
                    {user ? 
                    <button class="cart-btn" onClick={addToCart}>Add to Cart</button>
                    : "Sign In to order"}
                    
                  </div>
          </div>
         
      </section>
      </>
    );
  }
  
  export default MenuCard;