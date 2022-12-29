import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethod";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch (err) {}
    };
    getUsers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                users.img ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhtjN6jqRWD53BDS5NDDdft0DxQYVf09W3A&usqp=CAU"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser" key={users._id}>
              <span className="widgetSmUsername">{user.username}</span> 
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
