import React, { useContext } from "react";
import "./OurProduct.scss";
import ProductTitle from "../../../assets/images/Categories.svg";
import { ProductContext } from "../../../context/context";
import ProductCard from "../../ui/productCard/ProductCard";

const OurProduct = () => {
  const { dataProduct } = useContext(ProductContext);

  return (
    <div id="OurProduct">
      <div className="container">
        <div className="ourProductTitle">
          <img src={ProductTitle} alt="title" />
          <h1>Our Products</h1>
        </div>
        <div className="ourProduct">
          {dataProduct.map((el) => (
            <ProductCard
              key={el.id}
              id={el.id}
              category={el.productCategory}
              image={el.productUrl}
              name={el.productName}
              price={el.productPrice}
              rating={el.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
