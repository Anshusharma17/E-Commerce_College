import { BiAddToQueue } from "react-icons/bi";
import { FaRemoveFormat } from "react-icons/fa";
import { MdAdd, MdRemove } from "react-icons/md";
import { useSelector } from "react-redux";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import s from "./cart.module.css";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../../resquestMehtod";
import { useNavigate } from "react-router";
const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => { 
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const Navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
          // amount: 500,
        });
        Navigate.push("/success", { data: res.data });
      } catch (err) {}
    };
    stripeToken && cart.total >= 1 && makeRequest();
  }, [stripeToken, cart.total, Navigate]);
  return (
    <div className={s.container}>
      <Navbar />
      <Announcement />
      <div className={s.wrapper}>
        <h1 className={s.title}>Your Bag</h1>
        <div className={s.top}>
          <button className={s.topbtn}>Contiune Shoping</button>
          <div className={s.toptexts}>
            <span className={s.toptext}>Shoping Bag(2)</span>
            <span className={s.toptext}>Your Wishlist(0)</span>
          </div>
          <button className={s.topbtn}>Checkout Now</button>
        </div>
        <div className={s.bottom}>
          <div className={s.info}>
            {cart.products.map((product) => (
              <div className={s.product}>
                <div className={s.productdetails}>
                  <img src={product.img} className={s.productimg}></img>
                  <div className={s.details}>
                    <div className={s.productname}>
                      <b>Product : </b>
                      {product.title}
                    </div>
                    <div className={s.productid}>
                      <b>ID : </b>
                      {product._id}
                    </div>
                    <div
                      style={{ backgroundColor: `${product.color}` }}
                      className={s.productcolor}
                    ></div>
                    <div className={s.productsize}>
                      <b>Size : </b>
                      {product.size}
                    </div>
                  </div>
                </div>
                <div className={s.pricedetails}>
                  <div className={s.amtCon}>
                    <MdAdd />
                    <div className={s.productamt}>{product.quantity}</div>
                    <MdRemove />
                  </div>
                  <div className={s.productprice}>
                    {" "}
                    $ {product.price * product.quantity}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={s.summary}>
            <h1 className={s.sumtitle}>Order Summary</h1>
            <div className={s.sumitem}>
              <span className={s.sumitemtext}>sub Total</span>
              <span className={s.sumitemprice}>$ {cart.total}</span>
            </div>
            <div className={s.sumitem}>
              <span className={s.sumitemtext}>Estimated Shipping</span>
              <span className={s.sumitemprice}>$ 5</span>
            </div>
            <div className={s.sumitem}>
              <span className={s.sumitemtext}>Shipping discount</span>
              <span className={s.sumitemprice}>$ 5</span>
            </div>
            <div className={s.sumitem}>
              <span className={`${s.sumitemtext} ${s.boldsumitem}`}>Total</span>
              <span className={`${s.sumitemprice} ${s.boldsumitem}`}>
                $ {cart.total}
              </span>
            </div>
            <StripeCheckout
              name="e-Commerce Shop"
              // image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fcartoon-face&psig=AOvVaw3ccTAmRpI2kyYEVuMfrmha&ust=1671445008392000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLCT9__3gvwCFQAAAAAdAAAAABAE"
              billingAddress
              shippingAddress
              description={`Your total is $ ${cart.total}`}
              //100 means $1 only
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY} 
            >
              <button className={s.btn}>Checkout Now</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
