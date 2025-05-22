import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../../context/context";
import "./OrganickDetails.scss";
import { FaArrowAltCircleRight } from "react-icons/fa";

const OrganickDetails = () => {
  const { dataProduct } = useContext(ProductContext);
  const { detailsId } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = dataProduct.find((el) => String(el.id) === detailsId);

  return (
    <div id="OrganickDetails">
      <div className="container">
        <div className="product-image">
          <span className="category-tag">{product.productCategory}</span>
          <img src={product.productUrl} alt={product.productName} />
        </div>
        <div className="product-info">
          <h1>{product.productName}</h1>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <div className="price">
            <span className="old">$20.00</span>
            <span className="new">${product.productPrice}</span>
          </div>
          <h5>{product.productDescription}</h5>
          <div className="action-row">
            <label>Quantity :</label>
            <div className="quantity-controls">
              <button onClick={() => setQuantity((B) => Math.max(1, B - 1))}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((B) => B + 1)}>+</button>
            </div>

            <button>
              Add To Cart <FaArrowAltCircleRight className="butttonicons" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganickDetails;
