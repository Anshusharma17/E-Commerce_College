import { style } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import s from "./login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, err } = useSelector((state) => state.user);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h1 className={s.title}>Sign In</h1>
        <form action="" className={s.form}>
          <input
            required
            type="text"
            className={s.input}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Username"
          />
          <input
            required
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className={s.input}
            placeholder="Password"
          />
          <button
            disabled={isFetching}
            onClick={(e) => {
              e.preventDefault();
              login(dispatch, { username, password });
            }}
            className={s.btn}
          >
            LOGIN
          </button>
          {isFetching && <p className={s.error}>Something went wrong....</p>}
          <a href="" className={s.link}>
            Do not you remember the password
          </a>
          <a href="" className={s.link}>
            Create a New Account
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
