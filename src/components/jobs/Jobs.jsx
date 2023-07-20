import React, { useEffect } from "react";
import { useDeleteJobMutation, useGetAllJobsQuery } from "../../services";
import { FaCalendarAlt, FaLocationArrow, NextIcon, PrevIcon } from "../icons";
import PaginateBtn from "../pagination/PaginateBtn";
import Moment from "react-moment";
import { declined, interview, pending } from "../../constant";
import { flashMessage as flash, throwError} from "../../utils/helpers/flashMessage";
import { resetAddJob, setEditingJob } from "../../features/jobs/jobSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Jobs = ({}) => {
  const { data, error, isError, isLoading, isSuccess, isFetching, refetch } =
    useGetAllJobsQuery();
  const [deleteJob, { isLoading: isDeletingJob, isSuccess: isJobDeleted, data: jobDeletedData }] = useDeleteJobMutation()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // set job edit data and navigate to edit job page
  const editJobhandler = (payload) => {
    dispatch(setEditingJob(payload))
    navigate('/add-job')
  }

  // delete single job
  const deleteJobHandler = async (_id) => {
    await deleteJob(_id)
    .unwrap()
    .then((payload) => {
      refetch();
      flash('success', payload.msg)
    })
    .catch((error) => throwError(error));
  }

  // fetch jobs on component mounted
  useEffect(() => {
    refetch();
    dispatch(resetAddJob())
  }, []);

  return (
    <>
      {isLoading || isDeletingJob ? (
        <div className="w-1/2 h-1/2 m-auto flex justify-center items-center">
          <div className="w-16 h-16 rounded-full border-4 border-[#ffffffff] border-t-4 border-t-primary700 animate-spin transition-all duration-30"></div>
        </div>
      ) : (
        isSuccess &&
        data && (
          <section className="mt-16 pb-10 md:pb-40">
            {data.jobs.length === 0 ? (
              <h3 className="text-gray-800 font-semibold text-3xl tracking-wider mb-5">
                No Jobs Found
              </h3>
            ) : (
              <>
                <h3 className="text-gray-800 font-semibold text-xl tracking-wider mb-5">
                  {data.totalJobs} Jobs Found
                </h3>
                <section>
                  <article className="grid gap-4 md:grid-cols-2">
                    {data.jobs.map((job, idx) => (
                      <div
                        key={job._id}
                        className="bg-isWhite shadow-shadow2 text-gray-600 rounded-r25 pb-4"
                      >
                        <div className="pb-4">
                          <div className="flex items-center gap-8 border-b px-6 py-4">
                            <span className="p-4 px-6 grid place-content-end w-fit bg-primary500 font-semibold text-isWhite text-2xl rounded-r25">
                              {job.company.charAt(0)}
                            </span>
                            <div>
                              <h1 className="text-gray-600 text-xl tracking-wide">
                                {job.position}
                              </h1>
                              <span className="text-gray-400 tracking-wider">
                                {job.company}
                              </span>
                            </div>
                          </div>
                          <div className="px-6 grid gap-4 pt-5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                            <div className="flex items-center gap-4">
                              <span className="text-gray-400">
                                <FaLocationArrow/>
                              </span>
                              <span className="tracking-wider text-gray-700">
                                {job.jobLocation}
                              </span>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-gray-400">
                                <FaCalendarAlt/>
                              </span>
                              <span className="tracking-wider text-gray-700">
                                <Moment
                                  data={data.createdAt}
                                  format="MMM Do, YYYY"
                                />
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
                                <span className="tracking-wider text-gray-700 capitalize">
                                  {job.jobType}
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <span
                                className={`tracking-wider px-4 rounded-r25 capitalize ${
                                  job.status === "declined"
                                    ? declined
                                    : job.status === "pending"
                                    ? pending
                                    : interview
                                }`}
                              >
                                {job.status}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="px-6 pt-1">
                          <div className="flex gap-2">
                            <button className="tracking-wider bg-green-200 text-green-800 px-3 rounded-r25 shadow-shadow2 hover:shadow-shadow3"
                            onClick={() => editJobhandler(job)}>
                              Edit
                            </button>
                            <button className="tracking-wider bg-isRedLight text-isRedDark px-3 rounded-r25 shadow-shadow2 hover:shadow-shadow3"
                            disabled={isDeletingJob}
                            onClick={() => deleteJobHandler(job._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </article>
                  <div className="mt-16">
                    <div className="flex flex-col items-end gap-4 lg:flex-row lg:justify-end">
                      <PaginateBtn title="Prev" icon={<PrevIcon />} />
                      <div className="bg-primary100 rounded-r25">
                        <div className="flex text-primary500">
                          {Array.from({ length: data.numOfPages }, (_, idx) => (
                            <span
                              key={idx}
                              className={`block w-fit font-semibold text-xl py-1.5 px-5 rounded-r25 cursor-pointer ${
                                idx === 0 && "bg-primary500 text-isWhite"
                              }`}
                            >
                              {idx + 1}
                            </span>
                          ))}
                        </div>
                      </div>
                      <PaginateBtn title="Next" icon={<NextIcon />} />
                    </div>
                  </div>
                </section>
              </>
            )}
          </section>
        )
      )}
    </>
  );
};

export default Jobs;
