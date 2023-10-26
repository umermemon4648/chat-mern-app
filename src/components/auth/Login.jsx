import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "@mantine/form";
import { Loader } from "@mantine/core";

const Login = () => {
  const [isLoading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validateInputOnBlur: true,
    validateInputOnChange: ["email", "password"],
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value === "" ? "Password is required" : null),
    },
  });

  const loginHandler = async () => {
    try {
      if (form.isValid) {
        setLoading(true);
        const { values, errors } = form;

        console.log(values);
        // const response = await dispatch(
        //   login(
        //     values.email,
        //     values.password
        //   )
        // );
        // if (response) {
        //   const res = await dispatch(login(values.email, values.password));
        //   if (res) {
        //     setLoading(false);
        //     navigate("/");
        //   }
        // }
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // useEffect(() => {
  //   if (error) {
  //     dispatch(clearErrors());
  //     setLoading(false);
  //   }
  // }, [error, dispatch]);

  return (
    <>
      <div className="py-6 my-8">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80")',
            }}
          ></div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center my-2">
              Login into your account
            </h2>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            <form onSubmit={form.onSubmit(loginHandler)}>
              <div className="mt-4">
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
              <div className="mt-4">
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
                <div className="flex justify-between w-full my-1">
                  <a href="#" className="text-xs text-gray-500 ml-auto">
                    Forget Password?
                  </a>
                </div>
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
                    "Sign In"
                  )}
                </button>
              </div>
            </form>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>

              <Link
                to={"/auth/register"}
                className="text-xs text-gray-500 uppercase"
              >
                or sign up
              </Link>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
