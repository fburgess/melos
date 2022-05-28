import React from 'react';
import { Link } from 'react-router-dom';


function MenuCard({key, id, name, image, category, price}) {
   
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
                    <Link to={`/concerts/${id}`}><button class="button-85">See More</button></Link><br></br>
                    <Link to={`/comments`}><button button class="button-85">Comment</button></Link>
                  </div>
          </div>
         
      </section>
      </>
    );
  }
  
  export default MenuCard;