import { addUser } from "@/store/setUser-slice";
import store from "@/store/store";
import axios from "axios";
// import { Router } from "next/router";

axios.defaults.withCredentials = true;

export const logInUser = async (username, pass, router) => {
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

      await setLoginUser()
      .then(data => store.dispatch(addUser(data)))
      .then(() => { router.push('/profile'); })
      .catch((error) => {
        console.log(error)
      })
    } catch (error) {
      console.log(error);
    }
};

export const setLoginUser = async () => {
try {
    const { data } = await axios.get(
    `https://frontendtestapi.staging.fastjobs.io/auth/me`
    );
    console.log(data);
    return data;
} catch (error) {
    console.log(error);
}
};