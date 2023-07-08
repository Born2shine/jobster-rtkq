import React from "react";
import {
  HeroContainer,
  NextIcon,
  PaginateBtn,
  PrevIcon,
} from "../../components";

const AllJobs = () => {
  return (
    <section className="h-screen">
      <HeroContainer title="Search Form">
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
                <button className="p-[0.3rem] mt-3 w-full text-isRedDark bg-isRedLight rounded-r25 shadow-shadow3 tracking-wider hover:bg-isRedDark hover:text-isWhite transition duration-500 ease-in-out md:mt-8">
                  Clear Filters
                </button>
              </div>
            </div>
          </form>
        </section>
      </HeroContainer>
      <section className="mt-16 pb-10 md:pb-40">
        <h3 className="text-gray-800 font-semibold text-xl tracking-wider mb-5">
          75 Jobs Found
        </h3>
        <section>
          <article className="grid gap-4 md:grid-cols-2">
            {[2, 3, 4, 5, 6, 7].map((i, idx) => (
              <div
                key={idx}
                className="bg-isWhite shadow-shadow2 text-gray-600 rounded-r25 pb-4"
              >
                <div className="pb-4">
                  <div className="flex items-center gap-8 border-b px-6 py-4">
                    <span className="p-4 px-6 grid place-content-end w-fit bg-primary500 font-semibold text-isWhite text-2xl rounded-r25">
                      B
                    </span>
                    <div>
                      <h1 className="text-gray-600 text-xl tracking-wide">
                        Civil Engineer
                      </h1>
                      <span className="text-gray-400 tracking-wider">
                        Bechtelar-Bednar
                      </span>
                    </div>
                  </div>
                  <div className="px-6 grid gap-4 pt-5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-400">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path>
                        </svg>
                      </span>
                      <span className="tracking-wider text-gray-700">
                        Kiamba
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-400">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path>
                        </svg>
                      </span>
                      <span className="tracking-wider text-gray-700">
                        Dec 27th, 2021
                      </span>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <span className="text-gray-400">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path>
                          </svg>
                        </span>
                        <span className="tracking-wider text-gray-700">
                          Internship
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span className="tracking-wider bg-red-100 text-red-400 px-4 rounded-r25">
                        Declined
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-6 pt-1">
                  <div className="flex gap-2">
                    <button className="tracking-wider bg-green-200 text-green-800 px-3 rounded-r25 shadow-shadow2 hover:shadow-shadow3">
                      Edit
                    </button>
                    <button className="tracking-wider bg-isRedLight text-isRedDark px-3 rounded-r25 shadow-shadow2 hover:shadow-shadow3">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </article>
          <div className="mt-7">
            <div className="flex flex-col items-end gap-4 lg:flex-row lg:justify-end">
              <PaginateBtn title="Prev" icon={<PrevIcon />} />
              <div className="bg-primary100 rounded-r25">
				<div className="flex text-primary500">
					{[1, 2, 3, 4, 5, 6, 7, 8].map((i, idx) => (
					<span key={idx} className={`block w-fit font-semibold text-xl p-2 px-5 rounded-r25 cursor-pointer ${idx === 0 && 'bg-primary500 text-isWhite'}`}>
						{idx + 1}
					</span>
					))}
				</div>
              </div>
              <PaginateBtn title="Next" icon={<NextIcon />} />
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default AllJobs;
