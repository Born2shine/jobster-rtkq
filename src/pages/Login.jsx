import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthenticationWrapper } from "../components";
import { flashMessage as flash } from "../utils/helpers/flashMessage";
import { useFormik } from "formik";
import { useLoginMutation } from "../services";
import { loginSchema } from "../utils/schema";
import { setSessionStorageItem } from "../utils/helpers/storage";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const handleLogin = async (values, { resetForm }) => {
    await login(values)
      .unwrap()
      .then((payload) => {
        setSessionStorageItem("user", payload);
        flash("success", `Welcome back ${payload.user.name}`);
        navigate("/dashboard");
      })
      .catch((error) => error.data && flash("error", error.data.msg));
  };

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: handleLogin,
    });
  return (
    <AuthenticationWrapper title="Login">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
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
              onBlur={handleBlur}
              onChange={handleChange}
              className={`bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.18rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]
                            ${errors.email && touched.email && "border-red-500"}
                            `}
            />
            {errors.email && touched.email && (
              <span className="text-red-500 text-xs block mt-[0.15rem] tracking-wider">
                {errors.email}
              </span>
            )}
          </div>
          <div className="mt-4">
            <label
              htmlFor="password"
              className="text-gray-800 tracking-wider block"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={ isPasswordVisible ? 'text' : "password"}
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                className={`bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.18rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]
                  ${errors.password && touched.password && "border-red-500"}
                  `}
              />
              {errors.password && touched.password && (
                <span className="text-red-500 text-xs block mt-[0.15rem] tracking-wider">
                  {errors.password}
                </span>
              )}
              <span className="absolute top-3 right-3 text-gray-500 cursor-pointer"
                onClick={() => setPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}{" "}
              </span>
            </div>
          </div>
          <div className="mt-10 mb-3">
            <button
              type="submit"
              className="p-1 w-full text-isWhite bg-primary500 rounded-r25 shadow-shadow3 tracking-wider hover:bg-primary700 transition duration-500 ease-in-out"
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
            <button
              type="submit"
              className="p-1 mt-4 w-full text-primary500 bg-primary200 rounded-r25 shadow-shadow4 tracking-wider hover:bg-primary700 transition duration-500 ease-in-out hover:text-isGrey50"
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Loading..." : "Demo App"}
            </button>

            <p className="text-center mt-3 text-gray-800">
              Not a member yet?{" "}
              <Link to="/register" className="text-primary500">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </AuthenticationWrapper>
  );
};

export default Login;
