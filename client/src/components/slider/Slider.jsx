import s from "./slider.module.css";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { useState } from "react";
import { sliderItems } from "../../data";

const Slider = () => {
  const [silderIndex, setSilderIndex] = useState(-200);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSilderIndex(silderIndex < 0 ? silderIndex + 100 : silderIndex - 200);
    } else {
      setSilderIndex(silderIndex < 0 ? silderIndex + 100 : silderIndex - 200);
    }
    console.log(silderIndex);
  };
  setTimeout(function () {
    setSilderIndex(silderIndex < 0 ? silderIndex + 100 : silderIndex - 200);
    console.log(silderIndex);
  }, 5000);
  return (
    <div className={s.container}>
      <div
        className={`${s.arrow} ${s.left}`}
        onClick={() => {
          handleClick("left");
        }}
      >
        <IoMdArrowRoundBack />
      </div>
      <div
        className={s.wrapper}
        style={{ transform: `translateX(${silderIndex}vw)` }}
      >
        {sliderItems.map((item) => (
          <div key={item.id} className={s.slider}>
            <div className={s.imgCon}>
              <img className={s.img} src={item.img} alt="" />
            </div>
            <div className={s.infoCon}>
              <h1 className={s.title}>{item.title}</h1>
              <p className={s.des}>{item.desc}</p>
              <button className={s.btn}>click me</button>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`${s.arrow} ${s.right}`}
        onClick={() => {
          handleClick("right");
        }}
      >
        <IoMdArrowRoundForward />
      </div>
    </div>
  );
};

export default Slider;
