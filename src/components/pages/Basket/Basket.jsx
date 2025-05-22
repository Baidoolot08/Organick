import { useContext } from "react";
import "./Basket.scss";
import { ProductContext } from "../../../context/context";

const Basket = () => {
  const { Basket, setBasket } = useContext(ProductContext);

  const removeFromBasket = (id) => {
    setBasket(Basket.filter((el) => el.id !== id));
  };

  const totalPrice = Basket.reduce(
    (acc, el) => acc + el.price * el.quantity,
    0
  );

  //7734183893:AAGnnxwYUcZyvKaXfn7Iu7hMvNVwyft-waI

  return (
    <div id="Basket">
      <div className="container">
        <div className="Basket">
          <div className="Basket--Content">
            {Basket.map((el) => (
              <div key={el.id} className="Basket--Item">
                <h1>{el.name}</h1>

                <p>Price: ${el.price}</p>
                <p>Quantity: {el.quantity}</p>
                <div>
                  <button onClick={() => removeFromBasket(el.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
            {Basket.length === 0 && (
              <h2 className="Basket--Empty">Корзина пуста</h2>
            )}
          </div>

          <div className="Basket--Price">
            <h1>Basket</h1>
            {Basket.length > 0 && <h2>Totals: ${totalPrice}</h2>}
          </div>

          <div className="dar">
            <div className="block">
              <div
                className="scroll"
                style={{
                  width:
                    Basket.length === 1
                      ? "20%"
                      : Basket.length === 2
                      ? "40%"
                      : Basket.length === 3
                      ? "60%"
                      : Basket.length === 4
                      ? "80%"
                      : Basket.length >= 5
                      ? "100%"
                      : "0%",
                  background:
                    Basket.length === 1
                      ? "green"
                      : Basket.length === 2
                      ? "yellowgreen"
                      : Basket.length === 3
                      ? "yellow"
                      : Basket.length === 4
                      ? "orange"
                      : Basket.length === 5
                      ? "red"
                      : "",
                }}
              >
                <h2>
                  {Basket.length === 1
                    ? "20%"
                    : Basket.length === 2
                    ? "40%"
                    : Basket.length === 3
                    ? "60%"
                    : Basket.length === 4
                    ? "80%"
                    : Basket.length >= 5
                    ? "100%"
                    : "0%"}
                </h2>
              </div>
            </div>
            {Basket.length >= 5 && (
              <h3>
                <i>Корзина Заполнена!</i>
              </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
