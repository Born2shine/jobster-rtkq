import React from "react";
import { HeroContainer } from "../../components";
import { useFormik } from "formik";
import { addJobSchema } from "../../utils/schema";

const AddJob = () => {

  const handleAddJob = (values, {resetForm}) => {
    console.log(values)
    resetForm()
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        position: "",
        company: "",
        job_location: "",
        status: "",
        job_type: "",
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
                { errors.position && touched.position && <span className="text-red-500 text-xs">{errors.position}</span>}
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
                { errors.company && touched.company && <span className="text-red-500 text-xs">{errors.company}</span>}
              </div>
              <div>
                <label
                  htmlFor="job_location"
                  className="text-gray-800 tracking-wider block"
                >
                  Job Location
                </label>
                <input
                  type="text"
                  name="job_location"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.job_location}
                  className="bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.18rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]"
                />
                { errors.job_location && touched.job_location && <span className="text-red-500 text-xs">{errors.job_location}</span>}
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
                  value={values.status}
                >
                  <option value="interview">interview</option>
                  <option value="declined">declined</option>
                  <option value="pending">pending</option>
                </select>
                { errors.status && touched.status && <span className="text-red-500 text-xs">{errors.status}</span>}
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
                  name="job_type"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.job_type}
                >
                  <option value="interview">full-time</option>
                  <option value="part-time">part-time</option>
                  <option value="remote">remote</option>
                  <option value="internship">internship</option>
                </select>
                { errors.job_type && touched.job_type && <span className="text-red-500 text-xs">{errors.job_type}</span>}
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4 md:mt-0">
                <button
                  type="submit"
                  className="p-[0.28rem] w-full h-fit text-isWhite bg-gray-500 rounded-r25 shadow-shadow3 tracking-wider hover:bg-gray-800 hover:text-isWhite transition duration-500 ease-in-out md:mt-8"
                >
                  Clear
                </button>
                <button className="p-[0.28rem] w-full h-fit text-isWhite bg-primary500 rounded-r25 shadow-shadow3 tracking-wider hover:bg-primary800 hover:text-isWhite transition duration-500 ease-in-out md:mt-8">
                  Submit
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
