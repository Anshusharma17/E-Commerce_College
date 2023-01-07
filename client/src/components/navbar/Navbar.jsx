
import s from "./navbar.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { Badge } from "@mui/material";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/userRedux";
 
const Navbar =  () => {
  const quantity =  useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch(); 

  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.left}>
          <div className={s.language}>EN</div>
          <div className={s.search}>
            <input type="text" className={s.inp} />
            <BiSearchAlt className={s.searchStyle} />
          </div>
        </div>
        <div className={s.center}>
          <div className={s.logo}>Style House</div>
        </div>
        <div className={s.right}>
          {!user && (
            <>
              <Link className={s.menuitem} to="/register">
                REGISTER
              </Link>
              <Link className={s.menuitem} to="/login">
                SIGN IN
              </Link>{" "}
            </>
          )}
          {user && (
            <div
              onClick={() => dispatch(logout(), [dispatch])}
              className={s.menuitem}
            >
              Logout
            </div>
          )}
          <Link to="/cart">
            <div className={s.menuitem}>
              <Badge badgeContent={quantity} color="primary">
                <HiOutlineShoppingCart color="action" />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
