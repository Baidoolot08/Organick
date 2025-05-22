import React, { useState } from "react";
import axios from "axios";
import "./Contact.scss";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Img from "../../../assets/images/ComtactBanner.png";
const Contact = () => {
  const [fullname, setFullName] = useState("");
  const [yourEmail, setYourEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      !fullname.trim() ||
      !yourEmail.trim() ||
      !company.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      toast.warn("Пожалуйста, заполните все поля!", {
        position: "bottom-right",
        autoClose: 4000,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    setModal(true);
  };

  const sendToTelegram = () => {
    const chat_id = "-1002613388059";
    const token = "7734183893:AAGnnxwYUcZyvKaXfn7Iu7hMvNVwyft-waI";
    const api_url = `https://api.telegram.org/bot${token}/sendMessage`;

    const userData = {
      chat_id,
      parse_mode: "HTML",
      text: `
<b>Новое сообщение с сайта</b>\n
<b>Имя:</b> ${fullname}
<b>Email:</b> ${yourEmail}
<b>Компания:</b> ${company}
<b>Тема:</b> ${subject}
<b>Сообщение:</b> ${message}
      `,
    };

    axios
      .post(api_url, userData)
      .then(() => {
        toast.success("Сообщение успешно отправлено!", {
          position: "bottom-right",
          autoClose: 4000,
          theme: "colored",
          transition: Bounce,
        });
        setModal(false);
        clear();
      })
      .catch((err) => {
        toast.error("Ошибка при отправке!", {
          position: "bottom-right",
          autoClose: 4000,
          theme: "colored",
          transition: Bounce,
        });
      });
  };

  const clear = () => {
    setFullName("");
    setYourEmail("");
    setCompany("");
    setSubject("");
    setMessage("");
  };

  return (
    <div id="contact">
      <div className="about__bg">
        <img src={Img} className="about__bg--img " alt="img" />
        <h1 className="about__bg--title">Contact Us</h1>
      </div>
      <div className="contact-form">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Ваше имя*"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              placeholder="example@yourmail.com"
              value={yourEmail}
              onChange={(e) => setYourEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Компания*"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              type="text"
              placeholder="Тема*"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <textarea
            placeholder="Сообщение*"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        {modal && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Подтверждение данных</h2>
              <p>
                <strong>Имя:</strong> {fullname}
              </p>
              <p>
                <strong>Email:</strong> {yourEmail}
              </p>
              <p>
                <strong>Компания:</strong> {company}
              </p>
              <p>
                <strong>Тема:</strong> {subject}
              </p>
              <p>
                <strong>Сообщение:</strong> {message}
              </p>

              <div className="modal-buttons">
                <button onClick={sendToTelegram}>
                  Подтвердить и отправить
                </button>
                <button
                  style={{ background: "red" }}
                  onClick={() => setModal(false)}
                >
                  Отмена
                </button>
              </div>
            </div>
          </div>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
