import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addedItem}) {
  // const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterData, setFilterData] = useState({
    search:"",
    filter:"All",
  })

  

  function handleCategoryChange(event) {
    let name = event.target.name
    let value = event.target.value
    setFilterData({...filterData, [name]:value});

  }

  const itemsToDisplay = items.filter((item) => {
    if (filterData.filter === "All"  && filterData.search === "") return true;
    if (filterData.filter === item.category && filterData.search === "") return true;
    if (filterData.filter === "All" && item.name.toLowerCase().includes(filterData.search.toLowerCase()))  return true;
    return ((item.category === filterData.filter) && (item.name === filterData.search));
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {addedItem}/>
      <Filter  onSearchChange={handleCategoryChange} search ={filterData.search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
