import React from "react";
import { Link } from "react-router-dom";
import s from "./item.module.css";

const Item = ({ item }) => {
  return (
    <div className={s.container}>
      <Link to={`/products/${item.cat}`}>
        <img src={item.img} alt="" className={s.img} />
        <div className={s.info}>
          <h1 className={s.title}>{item.title}</h1>
          <button className={s.btn}>click me</button>
        </div>
      </Link>
    </div>
  );
};

export default Item;
