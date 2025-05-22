import React, { useState } from "react";
import axios from "axios";
import "./Admin.scss";
const Admin = () => {
  const [productPrice, setProductPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [rating, setRating] = useState("");
  const CreateProduct = () => {
    if (
      !productName ||
      !productPrice ||
      !productDescription ||
      !productUrl ||
      !productCategory
    ) {
      setMessage("Заполните все поля!");
      setMessageType("error");
      return;
    }

    const newProduct = {
      productPrice,
      productName,
      productDescription,
      productUrl,
      productCategory,
      count: 1,
      rating,
    };

    axios.post(
      "https://680759f2e81df7060eb9d564.mockapi.io/api/v1/books/organick?per_page=100",
      newProduct
    );

    setMessage("Товар успешно добавлен!");
    setMessageType("success");
    setProductName("");
    setProductDescription("");
    setProductUrl("");
    setProductPrice("");
    setProductCategory("");
  };

  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <div className="left-inp">
            {productUrl ? (
              <img
                src={productUrl}
                alt="preview"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <div className="upload-placeholder">Upload photo</div>
            )}
          </div>
          <div className="form-input">
            {message && (
              <h4 style={{ color: messageType === "error" ? "red" : "green" }}>
                {message}
              </h4>
            )}
            <div className="row-inp">
              <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Product Description"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              />
              <input
                type="text"
                placeholder="Product Price"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
              <input
                type="text"
                placeholder="Product Image URL"
                value={productUrl}
                onChange={(e) => setProductUrl(e.target.value)}
              />{" "}
              <input
                type="text"
                placeholder="Rate"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
              <select
                name="Category"
                value={productCategory}
                onChange={(e) => {
                  setProductCategory(e.target.value);
                }}
              >
                <option value="">Category </option>
                <option value="Vegetable">Vegetable</option>
                <option value="Fresh">Fresh</option>
                <option value="Health">Health</option>
                <option value="Millets">Millets</option>
                <option value="Nuts">Nuts</option>
              </select>
              <button onClick={CreateProduct}>Создать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
