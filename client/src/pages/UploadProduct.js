import React from "react";
import { Link } from "react-router-dom";

function UploadProduct() {
  return (
    <div className="container my-1">
      <Link to="/">← Back to Products</Link>

      <h2>Upload your Product!</h2>
      <form className="productForm">
        <div className="flex-row space-between my-2">
          <label htmlFor="categoryName">Category:</label>
          <select id="categoryName" name="categoryName">
            <option value="food">Food</option>
            <option value="household">Household Supplies</option>
            <option value="electronics">Electronics</option>
            <option value="books">Books</option>
            <option value="toys">Toys</option>
          </select>
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="productName">Product Name:</label>
          <input
            placeholder="Product Name"
            name="productName"
            type="productName"
            id="productName"
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="price">Price:</label>
          <input placeholder="2.99" name="price" type="float" id="price" />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="quantity">Quantity:</label>
          <input
            placeholder="100"
            name="quantity"
            type="number"
            id="quantity"
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            type="message"
            id="description"
            rows="10"
          ></textarea>
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="image">Upload Image:</label>
          <input type="file" id="image" name="image" accept="image/jpeg" />
          <button type="submit" name="uploadFile">
            Upload
          </button>
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default UploadProduct;
