import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ADD_PRODUCT } from "../utils/mutations";
import { useMutation } from '@apollo/client';

function UploadProduct() {
  const [formState, setFormState] = useState({ name: '', description: '', price: 0.00, quantity: 0, image: '' });
  const [addProduct] = useMutation(ADD_PRODUCT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addProduct({
        variables: { name: formState.name, description: formState.description, price: parseFloat(formState.price), quantity: parseInt(formState.quantity), image: formState.image },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/">← Back to Products</Link>

      <h2>Upload your Product!</h2>
      <form className="productForm" onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="categoryName">Category:</label>
          <select id="categoryName" name="categoryName">
            <option value="food">Food</option>
            <option value="household supplies">Household Supplies</option>
            <option value="electronics">Electronics</option>
            <option value="books">Books</option>
            <option value="toys">Toys</option>
          </select>
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="productName">Product Name:</label>
          <input
            placeholder="Product Name"
            name="name"
            type="productName"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="price">Price:</label>
          <input placeholder="2.99" name="price" type="float" id="price" onChange={handleChange}/>
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="quantity">Quantity:</label>
          <input
            placeholder="100"
            name="quantity"
            type="number"
            id="quantity"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            type="message"
            id="description"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="image">Upload Image:</label>
          <input type="file" id="image" name="image" accept="image/jpeg" onChange={handleChange}/>
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default UploadProduct;
