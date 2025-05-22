import React, { useState } from "react";
import axios from "axios";
import banner from "../../../assets/images/Subs.svg";
import "./Subscribe.scss";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Subscribe = () => {
  const [yourEmail, setYourEmail] = useState("");

  const sendToTelegram = () => {
    if (!yourEmail.trim()) {
      toast.warn(" введите email!", {
        position: "bottom-right",

        theme: "colored",
        transition: Bounce,
      });
      return;
    }
    const chat_id = "-1002613388059";
    const token = "7734183893:AAGnnxwYUcZyvKaXfn7Iu7hMvNVwyft-waI";
    const api_url = `https://api.telegram.org/bot${token}/sendMessage`;

    const userData = {
      chat_id,
      parse_mode: "HTML",
      text: `
<b>Новое сообщение с сайта</b>\n
<b>Email:</b> ${yourEmail}
      `,
    };

    axios
      .post(api_url, userData)
      .then(() => {
        toast.success("Вы успешно подписались!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          transition: Bounce,
        });
        setYourEmail("");
      })
      .catch(() => {
        toast.error("Ошибка при отправке. Попробуйте снова.", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          transition: Bounce,
        });
      });
  };

  return (
    <div
      id="subscribe"
      style={{
        background: `url(${banner}) no-repeat center / cover`,
        borderRadius: "20px",
        padding: "80px 0",
        margin: "80px",
      }}
    >
      <div className="container">
        <div className="subscribe">
          <h1>
            Subscribe to <br /> our Newsletter
          </h1>
          <div className="subscribe__form">
            <input
              type="email"
              placeholder="Your Email Address"
              value={yourEmail}
              onChange={(e) => setYourEmail(e.target.value)}
            />
            <button onClick={sendToTelegram}>Subscribe</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Subscribe;
