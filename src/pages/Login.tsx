import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../feature/auth/authSlice";
import Spinner from "../components/Spinner";
import SignupImage from "../images/Signup.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faAt } from "@fortawesome/free-solid-svg-icons";
import { AppDispatch } from "../app/store";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [showForgetPasswordModal, setShowForgetPasswordModal] = useState(false);

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.auth
  );

  const toggleForgetPasswordModal = () => {
    setShowForgetPasswordModal(!showForgetPasswordModal);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="max-w-screen-2xl mx-auto pt-4 pb-0 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          {/* Left Side */}
          <div className="col-span-1 flex flex-col justify-center xl:w-1/2 2xl:w-1/2 lg:w-1/2 2xl:ml-28 xl:ml-28 lg:ml-28 md:ml-24 md:w-1/2">
            <h1 className="text-3xl text-[#4B0082] mb-2 font-semibold">
              Sign In
            </h1>
            <p className="text-[#9D9D9D] mb-10 font-medium">
              Connect & Collect...!
            </p>
            <div className="flex flex-col items-center">
              <form onSubmit={onSubmit} className="w-full">
                <div className="mb-4 relative">
                  <div className="absolute inset-y-1 left-0 flex items-center pl-2 text-gray-400 bg-[#4B0082] h-8 w-8 ml-2 mt-1">
                    <FontAwesomeIcon icon={faAt} className="text-white" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={onChange}
                    className="w-full focus:outline-[#4B0082] pl-12 py-3 px-3 bg-gray-100 leading-tight text-gray-700 focus:bg-white"
                  />
                </div>
                <div className="mb-4 relative">
                  <div className="absolute inset-y-1 left-0 flex items-center pl-2 text-gray-400 bg-[#4B0082] h-8 w-8 ml-2 mt-1">
                    <FontAwesomeIcon icon={faLock} className="text-white" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={onChange}
                    className="w-full focus:outline-[#4B0082] pl-12 py-3 px-3 bg-gray-100 leading-tight text-gray-700 focus:bg-white"
                  />
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="ml-1 text-[#343434]">
                    <input type="checkbox" id="rememberMe" name="rememberMe" />
                    <label htmlFor="rememberMe" className="ml-2 font-normal">
                      Remember me
                    </label>
                  </div>
                  <div className="text-[#4B0082]">
                    <button onClick={toggleForgetPasswordModal}>
                      <p className="hover:underline font-normal">
                        Forget Password?
                      </p>
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-[#4B0082] text-white px-4 py-2 rounded hover:bg-[#4c0082d0] font-semibold"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
            <div className="text-center mt-4">
              <div className="inline-block border-t border-gray-300 w-40 mr-2" />
              <span className="text-gray-500 px-2">OR</span>
              <div className="inline-block border-t border-gray-300 w-36 ml-2" />
            </div>
            <div className="text-center mt-4">
              <button
                type="button"
                className="bg-white text-[#9D9D9D] flex items-center justify-center w-full px-4 py-2 rounded border-2 font-normal hover:border-gray-500"
              >
                <FaGoogle className="mr-2" />
                Sign In with Google
              </button>
            </div>
            <div className="text-center mt-4 mb-12">
              <p>
                Are you new to Denaurlen?{" "}
                <Link to="/register" className="text-[#4B0082]">
                  Sign up
                </Link>
              </p>
            </div>
            <footer className="text-center py-4 mt-10 font-normal h-5">
              <p className="text-[#4B0082]">Privacy Policy</p>
              <p>Denaurlen Copyright @ 2021, All Rights Reserved</p>
            </footer>
          </div>
          {/* Right Side */}
          <div className="col-span-1 flex flex-col bg-gray-200">
            <div className="p-4 rounded-t-lg">
              <h1 className="text-3xl font-semibold text-[#4B0082] h-11">
                Denaurlen
              </h1>
              <p className="text-lg text-[#343434] font-medium h-8">
                Every dream has a demand..!
              </p>
            </div>
            <img
              src={SignupImage}
              alt="Signup"
              className="w-full h-full rounded-b-lg"
            />
          </div>
        </div>
      </section>
      {/* Forget Password Modal */}
      {showForgetPasswordModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-semibold mb-2 text-[#4B0082]">
              Forget Password?
            </h2>
            <p className="text-[#9D9D9D] mb-4">No worries we covered you..!</p>
            <div className="mb-4 relative">
              <div className="absolute inset-y-1 left-0 flex items-center pl-2 text-gray-400 bg-[#4B0082] h-8 w-8 ml-2 mt-1">
                <FontAwesomeIcon icon={faAt} className="text-white" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={onChange}
                className="w-full focus:outline-[#4B0082] pl-12 py-3 px-3 bg-gray-100 leading-tight text-gray-700 focus:bg-white"
              />
            </div>
            <div className="flex justify-between">
              <button
                className="bg-[#F5F5F5] text-[#9D9D9D] px-4 py-2 rounded hover:bg-[#4c0082d0] font-semibold"
                onClick={toggleForgetPasswordModal}
              >
                Close
              </button>
              <button className="bg-[#4B0082] text-white px-4 py-2 rounded hover:bg-[#4c0082d0] font-semibold">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
