import React from "react";

const AllJobs = () => {
  return (
    <section>
      <section className="p-10 bg-isWhite rounded-r25 shadow-shadow2 hover:shadow-shadow3">
        <h1 className="tracking-wider text-2xl text-gray-700">Search Form</h1>
        <section className="mt-5">
          <form action="">
            <div className="grid gap-y-3.5 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <label
                  htmlFor="search"
                  className="text-gray-800 tracking-wider block"
                >
                  Search
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.18rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]"
                />
              </div>
              <div className="">
                <label
                  htmlFor="status"
                  className="text-gray-800 tracking-wider block"
                >
                  Status
                </label>
                <select className="bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.47rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]">
                  <option value="all">all</option>
                  <option value="interview">interview</option>
                  <option value="declined">declined</option>
                  <option value="pending">pending</option>
                </select>
              </div>
              <div className="">
                <label
                  htmlFor="status"
                  className="text-gray-800 tracking-wider block"
                >
                  Type
                </label>
                <select className="bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.47rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]">
                  <option value="all">all</option>
                  <option value="interview">full-time</option>
                  <option value="part-time">part-time</option>
                  <option value="remote">remote</option>
                  <option value="internship">internship</option>
                </select>
              </div>
              <div className="">
                <label
                  htmlFor="status"
                  className="text-gray-800 tracking-wider block"
                >
                  Sort
                </label>
                <select className="bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.47rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]">
                  <option value="latest">latest</option>
                  <option value="a-z">a-z</option>
                  <option value="z-a">z-a</option>
                </select>
              </div>
              <div className="">
                <label
                  htmlFor="status"
                  className="text-gray-800 tracking-wider invisible"
                >
                  Sort
                </label>
                <button className="p-[0.3rem] mt-1 w-full text-isRedDark bg-isRedLight rounded-r25 shadow-shadow3 tracking-wider hover:bg-isRedDark hover:text-isWhite transition duration-500 ease-in-out">
                  Clear Filters
                </button>
              </div>
            </div>
          </form>
        </section>
      </section>
    </section>
  );
};

export default AllJobs;
