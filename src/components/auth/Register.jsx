import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { Loader } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, signup } from "../../redux/actions/authActions";

const Register = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const [isLoading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      // confirmPassword: "",
    },
    validateInputOnBlur: true,
    validateInputOnChange: [
      "firstName",
      "lastName",
      "email",
      "password",
      // "confirmPassword",
    ],
    validate: {
      firstName: (value) =>
        value.length < 3 ? "First name should be at least 3 characters" : null,
      lastName: (value) =>
        value.length < 3 ? "Last name should be at least 3 characters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 3 ? "Password is should be at least 3 characters" : null,
      // confirmPassword: (value, values) =>
      //   value === values.password ? null : "Passwords do not match",
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file.size > 200 * 1024) {
      // Discard Pic if it's larger than 1 MB
      alert("Pic size is too large. Maximum size is 200 KB.");
      e.target.value = null; // Clear input value
      setProfile(null); // Remove Pic
      return;
    } else {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setProfile(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const registerHandler = async () => {
    try {
      if (form.isValid) {
        setLoading(true);
        const { values, errors } = form;

        console.log(values);
        console.log(profile);
        const response = await dispatch(
          signup(
            values.firstName,
            values.lastName,
            values.email,
            values.password,
            profile
          )
        );
        if (response) {
          setLoading(false);
          navigate("/");
        }
      }
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
      setLoading(false);
    }
  }, [error, dispatch]);

  return (
    <>
      <div className="py-4 mt-6 mb-8">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80")',
            }}
          ></div>
          <div className="w-full px-8 py-2 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center my-2">
              Sign Up
            </h2>
            <p className="text-xl text-gray-600 text-center">
              Create a new account.
            </p>
            {/* <a
              href="#"
              className="flex items-center justify-center mt-3 text-white rounded-lg shadow-md hover:bg-gray-100"
            >
              <div className="px-4 py-3">
                <svg className="h-6 w-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>
              <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                Sign in with Google
              </h1>
            </a> */}
            {/* <div className="mt-3 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase"
              >
                or login with email
              </a>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div> */}
            <form onSubmit={form.onSubmit(registerHandler)}>
              <div className="mt-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  First Name
                </label>
                <input
                  {...form.getInputProps("firstName")}
                  autoFocus
                  className="bg-[#F9FAFB] text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                />
                {form.errors.firstName && (
                  <span className="text-sm" style={{ color: "red" }}>
                    {form.errors.firstName}
                  </span>
                )}
              </div>
              <div className="mt-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Last Name
                </label>
                <input
                  {...form.getInputProps("lastName")}
                  className="bg-[#F9FAFB] text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                />
                {form.errors.lastName && (
                  <span className="text-sm" style={{ color: "red" }}>
                    {form.errors.lastName}
                  </span>
                )}
              </div>
              <div className="mt-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  {...form.getInputProps("email")}
                  className="bg-[#F9FAFB] text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                />
                {form.errors.email && (
                  <span className="text-sm" style={{ color: "red" }}>
                    {form.errors.email}
                  </span>
                )}
              </div>
              <div className="mt-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  {...form.getInputProps("password")}
                  className="bg-[#F9FAFB] text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password"
                />
                {form.errors.password && (
                  <span className="text-sm" style={{ color: "red" }}>
                    {form.errors.password}
                  </span>
                )}
              </div>
              <div className="mt-3">
                <label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  for="file_input"
                >
                  Upload profile
                </label>
                <input
                  onChange={handleImageChange}
                  class="py-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                  accept="image/*"
                />
              </div>
              <div className="mt-8">
                <button
                  disabled={isLoading}
                  type="submit"
                  className="bg-primary text-white font-bold py-2 px-4 w-full rounded hover:bg-[#8251c9]"
                  style={{
                    opacity: isLoading ? 0.4 : 1,
                    cursor: isLoading ? "not-allowed" : "pointer",
                  }}
                >
                  {isLoading ? (
                    <Loader
                      color="rgba(180, 191, 174, 0.58)"
                      size="sm"
                      className="flex items-center justify-center mx-auto"
                    />
                  ) : (
                    "Create Account"
                  )}
                </button>
              </div>
            </form>

            <div className="mt-3 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>

              <Link
                to={"/auth/login"}
                className="text-xs text-gray-500 uppercase"
              >
                or sign in
              </Link>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
