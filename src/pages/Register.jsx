import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { AuthenticationWrapper } from "../components";
import { useLoginMutation, useRegisterUserMutation } from "../services";
import { flashMessage as flash } from "../utils/helpers/flashMessage";
import { registerSchema } from "../utils/schema";
import { setSessionStorageItem } from "./../utils/helpers/storage";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";

const Register = () => {
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async (user) => {
    await login(user)
      .unwrap()
      .then((payload) => {
        const { user } = payload
        dispatch(setUser(user))
        setSessionStorageItem("user", user);
        flash("success", `Welcome back ${user.name}`);
        navigate("/dashboard");
      })
      .catch((error) => error.data && flash("error", error.data.msg));
  }

  const handleDemoLogin = (e) => {
    e.preventDefault()
    const user = {email: 'testUser@test.com', password: 'secret'} 
    loginHandler(user)
  }

  const createUser = async (values) => {
    await registerUser(values)
      .unwrap()
      .then((payload) => {
        setSessionStorageItem("user", payload);
        flash("success", `Hello there! ${payload.user.name}`);
        navigate("/dashboard");
      })
      .catch((error) => error.data && flash("error", error.data.msg));
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validationSchema: registerSchema,
      onSubmit: createUser,
    });

  return (
    <AuthenticationWrapper title="Register">
      <div>
        <form onSubmit={handleSubmit}>
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
              onBlur={handleBlur}
              onChange={handleChange}
              className={`bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.18rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]
                            ${errors.name && touched.name && "border-red-500"}
                            `}
            />
            {errors.name && touched.name && (
              <span className="text-red-500 text-xs block mt-[0.15rem] tracking-wider">
                {errors.name}
              </span>
            )}
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="text-gray-800 tracking-wider block"
            >
              Email
            </label>
            <input
              type="email"
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
            <input
              type="password"
              name="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              autoComplete=""
              className={`bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.18rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]
                            ${
                              errors.password &&
                              touched.password &&
                              "border-red-500"
                            }
                            `}
            />
            {errors.password && touched.password && (
              <span className="text-red-500 text-xs block mt-[0.15rem] tracking-wider">
                {errors.password}
              </span>
            )}
          </div>
          <div className="mt-10 mb-3">
            <button
              type="submit"
              className="p-1 w-full text-isWhite bg-primary500 rounded-r25 shadow-shadow3 tracking-wider hover:bg-primary700 transition duration-500 ease-in-out"
              disabled={isLoading || isLoginLoading ? true : false}
            >
              {isLoading || isLoginLoading ? "Loading..." : "Submit"}
            </button>
            <button
              type="submit"
              className="p-1 mt-4 w-full text-primary500 bg-primary200 rounded-r25 shadow-shadow4 tracking-wider hover:bg-primary700 transition duration-500 ease-in-out hover:text-isGrey50"
              disabled={isLoginLoading ? true : false}
              onClick={handleDemoLogin}
            >
              {isLoginLoading ? "Loading..." : "Demo App"}
            </button>

            <p className="text-center mt-3 text-gray-800">
              Already a member?{" "}
              <Link to="/login" className="text-primary500">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </AuthenticationWrapper>
  );
};

export default Register;
