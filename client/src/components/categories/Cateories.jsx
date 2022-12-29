import React from 'react'
import s from "./categories.module.css";
import { categories } from "../../data";
import Item from "./item/Item"

const Cateories = () => {
  return (
    <div className={s.container}>
      {categories.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Cateories