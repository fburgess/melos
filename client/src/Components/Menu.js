import React from 'react';
import { useEffect, useState } from "react";
import Search from "./Search";
import MenuList from "./MenuList";


function Menu({renderMenuItems}) {
    const [menu_items, setMenu] = useState([]);
    const [query, setQuery] = useState("");
  
    useEffect(() => {
      fetch(`/menu_items`)
        .then((r) => r.json())
        .then(setMenu);
    }, []);

    const filterMenuItems = menu_items.filter((menu_item) => {
      return menu_item.category.toLowerCase().includes(query.toLowerCase());
    });

    return (
      <section className="container">
      <Search setQuery={setQuery}/>

      <MenuList items={filterMenuItems} renderMenuItems={renderMenuItems}/>
      </section>
    );
  }
  
  export default Menu; 