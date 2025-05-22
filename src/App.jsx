import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Layout/Footer/footer";
import Admin from "./components/pages/Admin/Admin";
import MainPage from "./components/pages/main/MainPage";
import OrganickDetails from "./components/ui/OrganickDetails/OrganickDetails";
import Header from "./components/Layout/Header/header";
import Basket from "./components/pages/Basket/Basket";
import Category from "./components/pages/Category/Category";
import Contact from "./components/pages/Contact/Contact";

function App() {
  const routes = [
    {
      id: 1,
      link: "/",
      element: <MainPage />,
    },
    {
      id: 2,
      link: "/admin",
      element: <Admin />,
    },
    {
      id: 3,
      link: "/OrganickDetails/:detailsId",
      element: <OrganickDetails />,
    },
    {
      id: 4,
      link: "/basket",
      element: <Basket />,
    },
    {
      id: 5,
      link: "/category/:catName",
      element: <Category />,
    },
    {
      id: 6,
      link: "/contact",
      element: <Contact />,
    },
  ];

  return (
    <div className="app">
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
