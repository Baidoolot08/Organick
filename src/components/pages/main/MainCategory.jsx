import React from "react";
import "./MainCategory.scss";
import { Link } from "react-router-dom";

const MainCategory = () => {
  const allCategories = [
    {
      id: 1,
      title: "Vegetable",
      img: "https://img.pikbest.com/png-images/20240830/3d-vegetables-a-clean-and-modern-presentation_10777794.png!bw700",
    },
    {
      id: 2,
      title: "Fresh",
      img: "https://png.pngtree.com/png-clipart/20240314/original/pngtree-3d-fruit-fresh-png-image_14591543.png",
    },
    {
      id: 3,
      title: "Nuts",
      img: "https://png.pngtree.com/png-vector/20250327/ourmid/pngtree-3d-a-mixed-nuts-displayon-realistic-png-image_15887028.png",
    },
    {
      id: 4,
      title: "Health",
      img: "https://png.pngtree.com/png-vector/20241203/ourmid/pngtree-buckwheat-png-image_14647414.png",
    },
  ];

  return (
    <div id="MainCategory">
      <div className="container">
        <h1>Main Category</h1>
        <div className="mainCategory">
          {allCategories.map((el) => (
            <div className="mainCategory--block" key={el.id}>
              <Link to={`/category/${el.title}`}>
                <img src={el.img} alt={el.title} />
              </Link>
              <h2>{el.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainCategory;
