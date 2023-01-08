// import s from './register.module.css';

// const Register = () => {
//     return (
//         <div className={s.container}>
//             <div className={s.wrapper}>
//                 <h1 className={s.title}>Create an account</h1>
//                 <form action="" className={s.form}>
//                     <input required type="text" className={s.input} placeholder="first name"/>
//                     <input required type="text" className={s.input} placeholder="last name" />
//                     <input required type="text" className={s.input} placeholder="username" />
//                     <input required type="email" className={s.input} placeholder="email" />
//                     <input required type="password" className={s.input} placeholder="password" />
//                     <input required type="password" className={s.input} placeholder="confirm password" />
//                     <span className={s.agreement}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quo eos amet nisi vitae dolores voluptates perferendis dignissimos obcaecati, deleniti cupiditate minus! Asperiores ea quas nulla eos rem, doloremque doloribus.</span>
//                     <button className={s.btn}>Create</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Register 

import { useState } from "react";
import { userRequest } from "../../resquestMehtod";
import s from "./register.module.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [all, setAll] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "",
    CPassword: "",
  });
  let navigate = useNavigate();
  let post = async () => {
    await userRequest.post("/auth/register", all);
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h1 className={s.title}>Create an account</h1>
        <form action="" className={s.form}>
          <input
            required
            type="text"
            className={s.input}
            placeholder="first name"
            onChange={(e) => {
              setAll({
                ...all,
                fname: e.target.value,
              });
            }}
          />
          <input
            required
            type="text"
            className={s.input}
            placeholder="last name"
            onChange={(e) => {
              setAll({
                ...all,
                lname: e.target.value,
              });
            }}
          />
          <input
            required
            type="text"
            className={s.input}
            placeholder="username"
            onChange={(e) => {
              setAll({
                ...all,
                username: e.target.value,
              });
            }}
          />
          <input
            required
            type="email"
            className={s.input}
            placeholder="email"
            onChange={(e) => {
              setAll({
                ...all,
                email: e.target.value,
              });
            }}
          />
          <input
            required
            type="password"
            className={s.input}
            placeholder="password"
            onChange={(e) => {
              setAll({
                ...all,
                password: e.target.value,
              });
            }}
          />
          <input
            required
            type="password"
            className={s.input}
            placeholder="confirm password"
            onChange={(e) => {
              setAll({
                ...all,
                CPassword: e.target.value,
              });
            }}
          />
          <span className={s.agreement}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            quo eos amet nisi vitae dolores voluptates perferendis dignissimos
            obcaecati, deleniti cupiditate minus! Asperiores ea quas nulla eos
            rem, doloremque doloribus.
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              let { password, CPassword } = all;

              if (password !== CPassword) {
                alert("Passwords don't match");
              } else {
                post();
                navigate("/login");
              }
            }}
            className={s.btn}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

