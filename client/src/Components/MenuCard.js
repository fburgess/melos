import React from 'react';
import { Link } from 'react-router-dom';


function MenuCard({key, id, name, image, category, price}) {
   
  function addToCart(e) {
    e.preventDefault();

    let cartObject = window.localStorage.getItem('cart');

    let cart = [];
    
    if (cart)
    JSON.parse(cartObject);

    cart.push({
      id,
      name,
      image,
      category,
      price
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
                    <button class="cart-btn" onClick={addToCart}>Add to Cart</button><br></br>
                    <Link to={`/ratings/${id}`}><button button class="rating-btn">Rating</button></Link>
                  </div>
          </div>
         
      </section>
      </>
    );
  }
  
  export default MenuCard;