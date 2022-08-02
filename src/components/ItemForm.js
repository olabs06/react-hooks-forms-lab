import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const[addData, setAddData] = useState({
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: "",
    category: "Produce",
  })
  function handleChange(event) {
    let name = event.target.name
    let value = event.target.value
    setAddData({...addData, [name]:value})
  }
  function handleSubmit(event) {
    event.preventDefault()
    onItemFormSubmit({...addData})
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
