import { useWindowSize } from "@react-hookz/web/esm/useWindowSize";
import { useDispatch, useSelector } from "react-redux";
import { MobileNav, Sidebar, Stats, Topnav } from "../../components";
import defaultStats from "../../utils/data/stats";

const Dashboard = () => {
  const { showSidebar, showLogoutBtn } = useSelector((state) => state.slug);
  const dispatch = useDispatch();
  const { width } = useWindowSize();

  return (
    <main className="relative">
      <section className="md:flex">
        {!showSidebar && width <= 767 && <MobileNav />}
        <Sidebar />

        <main className="w-full">
            <Topnav />
          <section className="h-[calc(100%_-_10rem)] overflow-y-scroll border-t border-l">
            <section className="p-5 mt-3 lg:mx-8">
              <Stats/>
            </section>
          </section>
        </main>
      </section>
    </main>
  );
};

export default Dashboard;
