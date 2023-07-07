import { useWindowSize } from "@react-hookz/web/esm/useWindowSize";
import { useDispatch, useSelector } from "react-redux";
import { Barchart, MobileNav, Sidebar, Stats, Topnav } from "../../components";
import defaultStats from "../../utils/data/stats";

const Dashboard = () => {
  const { showSidebar, showLogoutBtn } = useSelector((state) => state.slug);
  const dispatch = useDispatch();
  const { width } = useWindowSize();

  return (
    <section>
      <Stats />
      <section className="my-6 mt-16">
        <div className="text-center">
          <h1 className="text-2xl text-gray-700 tracking-wider">
            Monthly Applications
          </h1>
          <span className="block my-2 text-xl font-medium text-primary500 mt-2">
            Area Chart
          </span>
        </div>
        <div className="mt-3">
          <Barchart />
        </div>
      </section>
    </section>
  );
};

export default Dashboard;
