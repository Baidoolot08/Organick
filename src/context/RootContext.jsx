import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductContext } from "./context";

const RootContext = ({ children }) => {
  const [dataProduct, setDataProduct] = useState([]);
  const [dataDetails, setDetailsProduct] = useState([]);
  const [Basket, setBasket] = useState(() => {
    const stor = localStorage.getItem("basket");
    return stor ? JSON.parse(stor) : [];
  });

  async function getProduct() {
    const res = await axios(
      `https://680759f2e81df7060eb9d564.mockapi.io/api/v1/books/organick`
    );
    setDataProduct(res.data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(Basket));
  }, [Basket]);

  return (
    <ProductContext.Provider
      value={{
        dataProduct,
        setDataProduct,
        dataDetails,
        setDetailsProduct,
        Basket,
        setBasket,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default RootContext;
