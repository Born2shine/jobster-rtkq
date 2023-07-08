import { Barchart, Stats } from "../../components";

const Dashboard = () => {

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
