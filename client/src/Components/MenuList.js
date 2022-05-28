import React from "react";
import MenuCard from "./MenuCard";

function MenuList({ items }) {
    const renderItems = items.map((item)=>(
      <MenuCard key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} category={item.category} />
      ));
    return (
      <ul className='item'>
      {renderItems}
      </ul>
    );
  }
  
  export default MenuList;

