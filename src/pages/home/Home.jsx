import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
// import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethod";

export default function Home() {
  const [userStats, setUserState] = useState([]);
  const MONTH = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        // eslint-disable-next-line array-callback-return
        res.data.map((item) => {
          setUserState((prev) => [
            ...prev,
            { name: MONTH[item._id - 1], "Active User": item.total },
          ]);
        });
      } catch (err) {}
    };
    getStats();
  }, [MONTH]); 
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
