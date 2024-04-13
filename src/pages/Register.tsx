import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom"; // Import useLocation
import { toast } from "react-toastify";
import { register, reset } from "../feature/auth/authSlice";
import Spinner from "../components/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faAt,
  faCheckCircle,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import SignupImage from "../images/Signup.png";
import { AppDispatch } from "../app/store";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  userName: string;
  password: string;
  repassword: string;
  termsAndConditions: boolean;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    userName: "",
    password: "",
    repassword: "",
    termsAndConditions: false,
  });

  const {
    firstName,
    lastName,
    email,
    location,
    userName,
    password,
    repassword,
    termsAndConditions,
  } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOTP] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [afterVerified, setAfterVerified] = useState(false);

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error("This is an error message");
    }
    if (isSuccess || user) {
      toast.success("Signup successful");
      navigate("/login");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  useEffect(() => {
    if (isEmailVerified) {
      const timer = setTimeout(() => {
        setIsEmailVerified(false);
      }, 5000);
      setAfterVerified(true);
      return () => clearTimeout(timer);
    }
  }, [isEmailVerified]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate email address
    if (name === "email") {
      setIsEmailValid(validateEmail(value));
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== repassword) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        location,
        userName,
        password,
        repassword,
      };
      dispatch(register(userData));
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendOTP = async () => {
    try {
      const response = await fetch(
        "http://localhost:8895/v1/api/userEmail/send-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      if (response.ok) {
        setShowOTPModal(true);
      } else {
        const data = await response.json();
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("An error occurred while sending OTP");
    }
  };

  const submitOTP = async () => {
    try {
      const response = await fetch(
        "http://localhost:8895/v1/api/userEmail/verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, otp }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response from server:", errorData);
        toast.error(
          errorData.message || "An error occurred while verifying OTP"
        );
        return;
      }

      setShowOTPModal(false);
      setIsEmailVerified(true);
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("An error occurred while verifying OTP");
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center w-full items-center md:mr-10">
            <h1 className="text-3xl font-semibold text-[#4B0082] mb-2">
              Sign Up
            </h1>
            <p className="text-[#9D9D9D] font-medium mb-8">
              Connect & Collect...!
            </p>
            <form
              onSubmit={onSubmit}
              className="shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
            >
              <div className="grid grid-cols-1 gap-4 mb-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400 bg-[#4B0082] h-7 w-8 ml-1 mt-1 rounded">
                      <FontAwesomeIcon icon={faAt} className="text-white" />
                    </div>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={firstName}
                      placeholder="First Name"
                      onChange={onChange}
                      className="pl-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#4B0082] focus:shadow-outline focus:bg-white bg-gray-100"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400 bg-[#4B0082] h-7 w-8 ml-1 mt-1 rounded">
                      <FontAwesomeIcon icon={faAt} className="text-white" />
                    </div>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={lastName}
                      placeholder="Last Name"
                      onChange={onChange}
                      className="pl-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#4B0082] focus:shadow-outline focus:bg-white bg-gray-100"
                    />
                  </div>
                </div>

                {afterVerified ? (
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400 bg-[#4B0082] h-7 w-8 ml-1 mt-1 rounded">
                      <FontAwesomeIcon icon={faAt} className="text-white" />
                    </div>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={email}
                      placeholder="Email"
                      onChange={onChange}
                      className="pl-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#4B0082] focus:shadow-outline focus:bg-white bg-gray-100"
                      disabled // Disable input field after email is verified
                    />
                    <button
                      className={`absolute inset-y-0 right-0 flex items-center justify-center pr-2 h-7 w-8 mt-1 mr-2 rounded-r text-[15px] text-[#4B0082] font-semibold`}
                    >
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-[#00B582]"
                      />
                    </button>
                  </div>
                ) : (
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400 bg-[#4B0082] h-7 w-8 ml-1 mt-1 rounded">
                      <FontAwesomeIcon icon={faAt} className="text-white" />
                    </div>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={email}
                      placeholder="Email"
                      onChange={onChange}
                      className="pl-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#4B0082] focus:shadow-outline focus:bg-white bg-gray-100"
                    />
                    <button
                      className={`absolute inset-y-0 right-0 flex items-center justify-center pr-2 h-7 w-8 mt-1 mr-2 rounded-r text-[15px] text-[#4B0082] font-semibold ${
                        !isEmailValid ? "opacity-50 pointer-events-none" : ""
                      }`}
                      disabled={!isEmailValid}
                      onClick={sendOTP}
                    >
                      Verify
                    </button>
                  </div>
                )}

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400 bg-[#4B0082] h-7 w-8 ml-1 mt-1 rounded">
                    <FontAwesomeIcon icon={faAt} className="text-white" />
                  </div>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={location}
                    placeholder="Location"
                    onChange={onChange}
                    className="pl-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#4B0082] focus:shadow-outline focus:bg-white bg-gray-100"
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400 bg-[#4B0082] h-7 w-8 ml-1 mt-1 rounded">
                    <FontAwesomeIcon icon={faAt} className="text-white" />
                  </div>
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    value={userName}
                    placeholder="UserName"
                    onChange={onChange}
                    className="pl-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#4B0082] focus:shadow-outline focus:bg-white bg-gray-100"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  {" "}
                  {/* Password and re-enter password */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400 bg-[#4B0082] h-7 w-8 ml-1 mt-1 rounded">
                      <FontAwesomeIcon icon={faLock} className="text-white" />
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      placeholder="Password"
                      onChange={onChange}
                      className="pl-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#4B0082] focus:shadow-outline focus:bg-white bg-gray-100"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400 bg-[#4B0082] h-7 w-8 ml-1 mt-1 rounded">
                      <FontAwesomeIcon icon={faLock} className="text-white" />
                    </div>
                    <input
                      type="password"
                      id="repassword"
                      name="repassword"
                      value={repassword}
                      placeholder="Re-enter"
                      onChange={onChange}
                      className="pl-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#4B0082] focus:shadow-outline focus:bg-white bg-gray-100"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="termsAndConditions"
                  name="termsAndConditions"
                  checked={termsAndConditions}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      termsAndConditions: !termsAndConditions,
                    })
                  }
                  className="mr-2"
                />
                <label htmlFor="termsAndConditions" className="text-gray-600">
                  Accept Terms & Conditions.{" "}
                  <Link to="/terms-condition" className="text-[#4B0082]">
                    Click Here
                  </Link>
                </label>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className={`${
                    termsAndConditions
                      ? "bg-[#4B0082] hover:bg-[#4c0082d5]"
                      : "bg-violet-500 hover:bg-violet-700"
                  } text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                  disabled={!termsAndConditions}
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="text-center mb-4">
              <p>
                Already a member of Denaurlen?{" "}
                <Link to="/login" className="text-[#4B0082]">
                  Sign in
                </Link>
              </p>
            </div>
            <footer className="text-center py-4">
              <p className="text-[#4B0082]">Privacy Policy</p>
              <p>Denaurlen Copyright @ 2021, All Rights Reserved</p>
            </footer>
          </div>
          {/* Right Side */}
          <div className="hidden md:flex flex-col bg-gray-200">
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
      {/* // OTP Modal */}
      {showOTPModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="relative bg-white rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">OTP VERIFICATION</h2>
            <p className="text-gray-600 mb-4">
              Enter 4 digit one time password
            </p>
            <div className="flex justify-center mb-4">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
                placeholder="Enter OTP"
              />
            </div>
            <div className="flex justify-center mb-4">
              <button
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md mr-4"
                onClick={() => setShowOTPModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-[#4B0082] text-white py-2 px-4 rounded-md hover:bg-[#4c0082d5]"
                onClick={submitOTP}
              >
                Submit
              </button>
            </div>
            <p className="text-[#4B0082] text-center">
              Didn’t get the code? Resend
            </p>
          </div>
        </div>
      )}

      {isEmailVerified && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="relative bg-white rounded-lg p-8">
            <div className="flex justify-center items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500 text-5xl mr-4"
              />
            </div>
            <p className="text-2xl font-semibold mb-4">
              Your Email has been verified successfully.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
