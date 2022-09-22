import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  console.log(items)
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleSelect(e) {
    setSelectedCategory(e.target.value)
  }

  const itemsList = items.filter((item) => (selectedCategory === "All") ? true : (item.category === selectedCategory) )

  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={ handleSelect }>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
