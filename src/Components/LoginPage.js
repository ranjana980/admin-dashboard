import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import swal from "sweetalert";
import logo from "../assests/images/admin.png";

export default function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("LoginStatus") == "Login") {
      navigate("/DefaultLayout");
    } else {
      navigate("/");
    }
  }, []);

  const handleSubmit = (values) => {
    if (values.email == "admin@gmail.com" && values.password == "admin@123") {
      localStorage.setItem("LoginStatus", "Login");
      navigate("/DefaultLayout");
      swal("Login SuccessFully");
    } else {
      swal("Invalid User Login");
    }
  };

  const handleGuestLogin = () => {
    localStorage.setItem("LoginStatus", "Login");
    navigate("/DefaultLayout");
    swal("Login SuccessFully");
  };

  return (
    <div className="flex justify-center align-item-center h-[100vh]">
      <div className="mt-[100px] mb-[130px] grid md:grid-cols-12 lg:grid-cols-12 xs:grid-cols-12 md:grid-cols-12  bg-white  rounded-[5px]">
        <div className="md:hidden  md:col-span-6 lg:col-span-6 mt-4 mb-4  p-5  xs:hidden  lg:block login-bg bg-center border-r-solid border-r-2 border-r-gray-300">
          <img src={logo} className="mt-3" alt="logo" height={410} width={410} />
        </div>
        <div className="lg:col-span-6 md:col-span-12  xs:col-span-12 sm:col-span-12 p-5">
          <h2 className="text-[25px] text-center ">Welcome Back!</h2>
          <div className="flex justify-center mt-[70px]">
            <div className="border-b-2 ">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={yup.object({
                  email: yup
                    .string()
                    .email("Invalid email address")
                    .required("Email is required!"),
                  password: yup.string().required("Password is Required!"),
                })}
                onSubmit={handleSubmit}
              >
                {({setFieldValue}) => (
                  <Form>
                    <div>
                      <input
                        name="email"
                        onChange={(e) =>
                         setFieldValue(e.target.name, e.target.value)
                        }
                        placeholder="Enter Your email "
                        className="rounded-[90px] min-w-[300px] border-2 border-gray-300 p-2  "
                      />
                    </div>
                    <ErrorMessage className="text-start " name="email">
                      {(msg) => <div className="text-red-600">{msg}</div>}
                    </ErrorMessage>
                    <div>
                      <input
                        name="password"
                        onChange={(e) =>
                         setFieldValue(e.target.name, e.target.value)
                        }
                        placeholder="Password"
                        className="rounded-[90px] min-w-[300px] border-2 border-gray-300 p-2   mt-2"
                      />
                    </div>
                    <ErrorMessage className="text-start " name="password">
                      {(msg) => <div className="text-red-600">{msg}</div>}
                    </ErrorMessage>
                    <div>
                      <button
                        className="rounded-[90px] bg-teal-500 text-white p-2 mt-2 min-w-[300px]"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <Link to="/">
            <h6 className="text-teal-500 mt-3 text-center   text-sm">
              Forgot Password?
            </h6>
          </Link>
          <u
            className="text-teal-500 mt-3 text-center cursor-pointer  text-sm"
            onClick={handleGuestLogin}
          >
            <h6>Login As A Guest</h6>
          </u>
        </div>
      </div>
    </div>
  );
}
