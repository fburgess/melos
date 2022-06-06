import React from "react";
import MenuCard from "./MenuCard";

function MenuList({ items, user }) {
    const renderItems = items.map((item)=>(
      <MenuCard key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} category={item.category} user={user} />
      ));
    return (
      <ul className='item'>
      {renderItems}
      </ul>
    );
  }
  
  export default MenuList;

