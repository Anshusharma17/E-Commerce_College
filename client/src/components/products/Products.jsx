import React from "react";
import s from "./products.module.css";
import { popularProducts } from "../../data";
import Product from "./product/Product";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { publicRequest } from "../../resquestMehtod";

const Products = ({ cat, filters, sort }) => {
  console.log(cat, filters, sort);
  const [products, setProducts] = useState([]);
  const [filtersProducts, setFiltersProducts] = useState([]);
  
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          cat
            ? `/products?category=${cat} `
            : "/products"
        );

        // console.log(res);
        setProducts(res.data);
      } catch (err) {}
    };

    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFiltersProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFiltersProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFiltersProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFiltersProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <div className={s.container}>
      {cat
        ? filtersProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </div>
  );
};

export default Products;
