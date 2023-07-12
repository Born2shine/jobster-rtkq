import React from "react";
import { HeroContainer } from "../../components";
import { useFormik } from "formik";
import { addJobSchema } from "../../utils/schema";
import { useSelector } from "react-redux";
import { useAddJobMutation } from "../../services";
import { flashMessage as flash } from "../../utils/helpers/flashMessage";

const AddJob = () => {
  const { jobTypeOptions, statusOptions, status, jobType } = useSelector((state) => state.job)
  const { user } = useSelector((state) => state.auth)
  const [addJob, { isLoading }] = useAddJobMutation()

  console.log(user)

  const handleAddJob = async (values, { resetForm }) => {
    await addJob(values)
    .unwrap()
    .then((payload) => {
      flash('success', 'Job added successfully')
      resetForm()
    })
    .catch((error) => error.data && flash("error", error.data.msg));
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } =
    useFormik({
      initialValues: {
        position: "",
        company: "",
        jobLocation: user.location ? user.location : "",
        status: status || '',
        jobType: jobType || '',
      },
      validationSchema: addJobSchema,
      onSubmit: handleAddJob
    });

  return (
    <section className="h-screen">
      <HeroContainer title="Add Job">
        <section className="mt-5">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-y-3.5 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <label
                  htmlFor="position"
                  className="text-gray-800 tracking-wider block"
                >
                  Position
                </label>
                <input
                  type="text"
                  name="position"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.position}
                  className={`bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.18rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]
                  ${errors.position && touched.position && 'border-red-500'}
                  `}
                />
                {errors.position && touched.position && <span className="text-red-500 text-xs">{errors.position}</span>}
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="text-gray-800 tracking-wider block"
                >
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.company}
                  className="bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.18rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]"
                />
                {errors.company && touched.company && <span className="text-red-500 text-xs">{errors.company}</span>}
              </div>
              <div>
                <label
                  htmlFor="jobLocation"
                  className="text-gray-800 tracking-wider block"
                >
                  Job Location
                </label>
                <input
                  type="text"
                  name="jobLocation"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.jobLocation}
                  className="bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.18rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]"
                />
                {errors.jobLocation && touched.jobLocation && <span className="text-red-500 text-xs">{errors.jobLocation}</span>}
              </div>
              <div className="">
                <label
                  htmlFor="status"
                  className="text-gray-800 tracking-wider block"
                >
                  Status
                </label>
                <select
                  className="bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.47rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]"
                  name="status"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={status}
                >
                  {
                    statusOptions?.map((item) => (
                      <option value={item} key={item} >{item}</option>
                    ))
                  }
                </select>
                {errors.status && touched.status && <span className="text-red-500 text-xs">{errors.status}</span>}
              </div>
              <div className="">
                <label
                  htmlFor="status"
                  className="text-gray-800 tracking-wider block"
                >
                  Job Type
                </label>
                <select
                  className="bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.47rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]"
                  name="jobType"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  defaultValue={jobType}
                >
                  {jobTypeOptions?.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
                {errors.jobType && touched.jobType && <span className="text-red-500 text-xs">{errors.jobType}</span>}
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4 md:mt-0">
                <button
                  type="submit"
                  className="p-[0.28rem] w-full h-fit text-isWhite bg-gray-500 rounded-r25 shadow-shadow3 tracking-wider hover:bg-gray-800 hover:text-isWhite transition duration-500 ease-in-out md:mt-8"
                  onClick={(e) => {
                    e.preventDefault();
                    resetForm()
                  }}
                >
                  Clear
                </button>
                <button 
                  disabled={isLoading}
                  className="p-[0.28rem] w-full h-fit text-isWhite bg-primary500 rounded-r25 shadow-shadow3 tracking-wider hover:bg-primary800 hover:text-isWhite transition duration-500 ease-in-out md:mt-8">
                  {isLoading ? 'Loading...' : 'Submit'}
                </button>
              </div>
            </div>
          </form>
        </section>
      </HeroContainer>
    </section>
  );
};

export default AddJob;
