import React from "react";
import { HeroContainer } from "../../components";
import { useFormik } from "formik";
import { useUpdateProfileMutation } from "../../services";
import { updateProfileSchema } from "../../utils/schema";
import { useDispatch, useSelector } from "react-redux";
import { setSessionStorageItem } from "../../utils/helpers/storage";
import { flashMessage as flash } from "../../utils/helpers/flashMessage";
import { setUser } from "../../features/auth/authSlice";

const Profile = () => {
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const { user: {name, lastName, email, location} } =  useSelector((state) => state.auth)
  const dispatch = useDispatch();

// form submit handler
  const handleUpdateProfile = async (values) => {
    await updateProfile(values)
    .unwrap()
    .then((payload) => {
        const { user } = payload
        dispatch(setUser(user))
        setSessionStorageItem("user", user);
        flash("success", `Profile updated successfully`);
    })
    .catch((error) => error.data && flash("error", error.data.msg))
  };

// handle form inputs and submission   
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: email || "",
        name: name || "",
        lastName: lastName || "",
        location: location ||"",
      },
      validationSchema: updateProfileSchema,
      onSubmit: handleUpdateProfile,
    });

  return (
    <section className="h-screen">
      <HeroContainer title="Profile">
        <section className="mt-5">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-y-3.5 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <label
                  htmlFor="name"
                  className="text-gray-800 tracking-wider block"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className={`bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.18rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]
                  ${errors.name && touched.name && 'border-red-500'}
                  `}
                />
                { errors.name && touched.name && <span className="text-red-500 text-xs">{errors.name}</span>}
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="text-gray-800 tracking-wider block"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  className={`bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.18rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]
                  ${errors.lastName && touched.lastName && 'border-red-500'}
                  `}
                />
                { errors.lastName && touched.lastName && <span className="text-red-500 text-xs">{errors.lastName}</span>}
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className="text-gray-800 tracking-wider block"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className={`bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.18rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]
                  ${errors.email && touched.email && 'border-red-500'}
                  `}
                />
                { errors.email && touched.email && <span className="text-red-500 text-xs">{errors.email}</span>}
              </div>
              <div className="">
                <label
                  htmlFor="location"
                  className="text-gray-800 tracking-wider block"
                >
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={values.location}
                  onChange={handleChange}
                  className={`bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.18rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]
                  ${errors.location && touched.location && 'border-red-500'}
                  `}
                />
                { errors.location && touched.location && <span className="text-red-500 text-xs">{errors.location}</span>}
              </div>
              <div className="mt-4 md:mt-0">
                <button 
                    disabled={isLoading}
                    className="p-[0.2rem] w-full h-fit text-isWhite bg-primary500 rounded-r25 shadow-shadow3 tracking-wider hover:bg-primary800 hover:text-isWhite transition duration-500 ease-in-out md:mt-8">
                  {isLoading ? 'Loading...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </form>
        </section>
      </HeroContainer>
    </section>
  );
};

export default Profile;
