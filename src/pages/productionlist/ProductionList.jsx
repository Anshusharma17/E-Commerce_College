import { useState } from "react";
import { useLocation } from "react-router";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Newletter from "../../components/newsletter/Newletter";
import Products from "../../components/products/Products";
import s from "./productionlist.module.css";

const ProductionList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setfilter] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilter = (e) => {
    const value = e.target.value;
    setfilter({ 
      ...filter,
      [e.target.name]: value }); 
  };
  return (
    <div className={s.container}>
      <Navbar />
      <Announcement />
      <h1 className={s.title}>{cat}</h1>
      <div className={s.filterContainer}>
        <div className={s.filter}>
          <span className={s.filtertext}>Filter Products : </span>
          <select
            name="color"
            id=""
            className={s.select}
            onChange={handleFilter}
          >
            <option
              
              disabled={true}
              selected={true}
              className={s.option}
            >
              Color
            </option>
            <option  className={s.option}>
              white
            </option>
            <option  className={s.option}>
              black
            </option>
            <option   className={s.option}>
              red
            </option>
            <option  className={s.option}>
              blue
            </option>
            <option  className={s.option}>
              yellow
            </option>
            <option  className={s.option}>
              green
            </option>
          </select>
          <select
            name="size"
            id=""
            className={s.select}
            onChange={handleFilter}
          >
            <option
               
              disabled={true}
              selected={true}
              className={s.option}
            >
              Size
            </option>
            <option  className={s.option}>
              XS
            </option>
            <option  className={s.option}>
              S
            </option>
            <option  className={s.option}>
              M
            </option>
            <option  className={s.option}>
              L
            </option>
            <option  className={s.option}>
              XL
            </option>
            <option  className={s.option}>
              XXL
            </option>
          </select>
        </div>
        <div className={s.filter}>
          <span className={s.filtertext}>Sort Products : </span>
          <select name="" id="" className={s.select} onChange={e=>{setSort(e.target.value)}}>
            <option
              value="newest"
              disabled={true}
              selected={true}
              className={s.option}
            >
              Newest
            </option>
            <option value="asc" className={s.option}>
              Price (asc)
            </option>
            <option value="desc" className={s.option}>
              Price (desc)
            </option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filter} sort={sort} />
      <Newletter />
      <Footer />
    </div>
  );
};

export default ProductionList;
