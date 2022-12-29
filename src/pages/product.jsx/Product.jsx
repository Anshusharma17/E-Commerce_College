import { useEffect, useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import { useLocation } from "react-router";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Newletter from "../../components/newsletter/Newletter";
import { addProduct } from "../../redux/cartRedux";
import { publicRequest } from "../../resquestMehtod";
import s from "./product.module.css";
import { useDispatch } from "react-redux";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProducts] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  return (
    <div className={s.container}>
      <Navbar />
      <Announcement />
      <div className={s.wrapper}>
        <div className={s.imgCon}>
          <img src={product.img} alt="" className={s.img} />
        </div>
        <div className={s.infoCon}>
          <h1 className={s.title}>{product.title}</h1>
          <p className={s.desc}>{product.desc}</p>
          <span className={s.price}>$ {product.price}</span>
          <div className={s.filterCon}>
            <div className={s.filter}>
              <span className={s.filtertitle}>Color</span>
              {product.color?.map((c) => (
                <div
                  onClick={() => setColor(c)}
                  className={s.filterColor}
                  style={{ backgroundColor: `${c}` }}
                  key={c}
                />
              ))}
            </div>
            <div className={s.filter}>
              <div className={s.filtertitle}>Size</div>
              <select
                className={s.filtersize}
                onChange={(e) => setSize(e.target.value)}
              >
                {product.size?.map((s) => (
                  <option className={s.filtersizeoption} key={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={s.addCon}>
            <div className={s.amtCon}>
              <MdRemove onClick={() => handleQuantity("dec")} />
              <span className={s.amount}>{quantity}</span>
              <MdAdd onClick={() => handleQuantity("inc")} />
            </div>
            <button onClick={()=>{
              dispatch(addProduct({ ...product,quantity,color,size }));
              // console.log("hello");
            }} className={s.btn}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Newletter />
      <Footer />
    </div>
  );
};

export default Product;
