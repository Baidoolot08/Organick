import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../ui/productCard/productCard/";
import "./Category.scss";
import { ProductContext } from "../../../context/context";
const Category = () => {
  const { catName } = useParams();
  const { dataProduct } = useContext(ProductContext);

  console.log(
    dataProduct.filter((el) => el.productCategory === catName),
    "data"
  );

  return (
    <div id="Category">
      <div className="container">
        <div className="category">
          {dataProduct.filter((el) => el.productCategory === catName).length ? (
            dataProduct
              .filter((el) => el.productCategory === catName)
              .map((el) => (
                <ProductCard
                  id={el.id}
                  category={el.productCategory}
                  image={el.productUrl}
                  name={el.productName}
                  price={el.productPrice}
                  rating={el.rating}
                  key={el.id}
                />
              ))
          ) : (
            <h1>Загрузка данных...</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
