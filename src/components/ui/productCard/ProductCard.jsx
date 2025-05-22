import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";
import { FiPlusCircle } from "react-icons/fi";
import { ProductContext } from "../../../context/context";
import { ToastContainer, toast } from "react-toastify";

const ProductCard = ({ id, category, image, name, price, rating }) => {
  const { Basket, setBasket } = useContext(ProductContext);

  const addToBasket = () => {
    const existingProduct = Basket.find((item) => item.id === id);

    if (existingProduct) {
      toast.info("🛒 Уже в корзине!", {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
      });
    } else if (Basket.length === 5) {
      toast.error("🚫 Корзина заполнена!", {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
      });
    } else {
      setBasket([
        ...Basket,
        { id, category, image, name, price, rating, quantity: 1 },
      ]);
      toast.success("✅ Добавлен в корзину!", {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
      });
    }
  };

  return (
    <div id="productCard">
      <div className="container">
        <div className="product">
          <div className="productCard">
            <h4>{category}</h4>
            <h5 onClick={addToBasket} style={{ cursor: "pointer" }}>
              <FiPlusCircle />
            </h5>
            <Link to={`/OrganickDetails/${id}`}>
              <img src={image} alt={name} />
            </Link>
            <h2>{name}</h2>
            <hr />
            <div className="productCard--price">
              <div className="Price">
                <span className="old">$20.00</span>
                <h3>${price}.00</h3>
              </div>
              <div className="productCard--price__stars">
                <div className="productCard--price__stars--start"></div>
                <h2>{rating}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductCard;
