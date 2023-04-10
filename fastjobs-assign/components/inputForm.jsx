"use client";

import React, { useEffect, useState } from "react";
import { logInUser, setLoginUser } from "@/utils/fetchingFunctions";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import store from "@/store/store";
// axios.defaults.withCredentials = true;

const inputForm = () => {
  const router = useRouter();
  // let error = false;
  const [error, setError] = useState(false);
  // const { error } = useSelector((state) => state?.user)

  // const getError = () => {
  //   error = store.getState().user.error;
  // }

  // useEffect(() => {
  //   getError()
  // }, [error])

  // let error = store.getState().user.error;

  // console.log(error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { userName, password } = e.target;
    // console.log(userName.value);
    await logInUser(userName.value, password.value, router, error, setError);
    // await setLoginUser();
  };

  // username: 'johndoe',
  // password: 'password',

  // const logInUser = async (username, pass) => {
  //   console.log(username, pass);
  //   try {
  //     const { data } = await axios.post(
  //       "https://frontendtestapi.staging.fastjobs.io/auth/login",
  //       {
  //         username: username,
  //         password: pass,
  //       }
  //     );
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const setLoginUser = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `https://frontendtestapi.staging.fastjobs.io/auth/me`
  //     );
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center h-full justify-center lg:items-start lg:justify-start flex-col gap-2 w-full max-w-xs lg:w-44  relative"
    >
      <h3 className=" text-white text-lg font-semibold">
        For us to stay in touch
      </h3>
      <label className="text-white " htmlFor="userName">
        Username
      </label>
      <input
        autoComplete="off"
        id="userName"
        name="userName"
        type="text"
        className=" outline-none bg-transparent border-2 text-sm rounded-md text-white px-2 py-2 text-left leading-none w-full"
      />
      <label className="text-white " htmlFor="password">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        className=" outline-none bg-transparent border-2 text-sm rounded-md text-white px-2 py-2 text-left w-full"
      />
      <button
        type="submit"
        className="bg-indigo-400 text-white py-2 rounded-md text-xs text-center w-full border-2 border-indigo-400 hover:bg-indigo-700 transition-all duration-200"
      >
        Continue
      </button>

      <span
        className={` absolute bottom-2 bg-red-500/50 text-white font-semibold px-3 py-1 rounded-md text-sm transition-all duration-300 lg:text-xs text-center ${
          error ? ` opacity-100` : ` opacity-0`
        } `}
      >
        Please check your username and password!!
      </span>
    </form>
  );
};

export default inputForm;
