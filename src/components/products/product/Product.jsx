import React from 'react'
import s from "./product.module.css"
import { MdOutlineShoppingCart } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Product = ({ item }) => {
    return (
      <div className={s.container}>
        <img src={item.img} alt="" className={s.img} />
        <div className={s.info}>
          <div className={s.icon}>
            <MdOutlineShoppingCart className={s.iconcen} />
          </div>
          <div className={s.icon}>
            <Link className={s.iconcen} to={`/product/${item._id}`}>
              <BiSearch />
            </Link>
          </div>
          <div className={s.icon}>
            <AiOutlineHeart className={s.iconcen} />
          </div>
        </div>
      </div>
    );
}

            export default Product