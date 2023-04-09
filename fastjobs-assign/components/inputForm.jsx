"use client";

import React from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

const inputForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { userName, password } = e.target;
    console.log(userName.value);
    await logInUser(userName.value, password.value);
    // await setLoginUser();
  };

  // username: 'johndoe',
  // password: 'password',

  const logInUser = async (username, pass) => {
    console.log(username, pass);
    try {
      const { data } = await axios.post(
        "https://frontendtestapi.staging.fastjobs.io/auth/login",
        {
          username: username,
          password: pass,
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const setLoginUser = async () => {
    try {
      const { data } = await axios.get(
        `https://frontendtestapi.staging.fastjobs.io/auth/me`
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center lg:items-start lg:justify-start flex-col gap-2 w-full max-w-xs lg:w-44  "
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
    </form>
  );
};

export default inputForm;
