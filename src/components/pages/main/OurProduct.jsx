import React, { useContext } from "react";
import "./OurProduct.scss";
import ProductTitle from "../../../assets/images/Categories.svg";
import ProductCard from "../../ui/productCard/productCard/";
import { ProductContext } from "../../../context/context";
const OurProduct = () => {
  const { dataProduct } = useContext(ProductContext);
  console.log(dataProduct);

  return (
    <div id="OurProduct">
      <div className="container">
        <div className="ourProductTitle">
          <img src={ProductTitle} alt="img" />
          <h1>Our Prodeucts</h1>
        </div>
        <div className="ourProduct">
          {dataProduct.map((el) => (
            <div className="ourProduct" key={el.id}>
              <ProductCard
                id={el.id}
                category={el.productCategory}
                image={el.productUrl}
                name={el.productName}
                price={el.productPrice}
                rating={el.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurProduct;
