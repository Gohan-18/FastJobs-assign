import {
  addData,
  addUser,
  setAuthentication,
  setErrorTrue,
} from "@/store/setUser-slice";
import store from "@/store/store";
import axios from "axios";

axios.defaults.withCredentials = true;

export const logInUser = async (username, pass, router, error, setError) => {
//   console.log(username, pass);
  try {
    const { data } = await axios.post(
      "https://frontendtestapi.staging.fastjobs.io/auth/login",
      {
        username: username,
        password: pass,
      }
    );
    // console.log(data.message);

    if (data.message === "success") {
      store.dispatch(setAuthentication());
    }

    await setLoginUser(setError)
      .then((data) => store.dispatch(addUser(data)))
      .then(() => {
        router.push("/profile");
      })
      .catch((error) => {
        // console.log(error);
        setError(true);
        setTimeout(() => setError(false), 2000);
      });
  } catch (error) {
    // console.log(error);
    setError(true);
    setTimeout(() => setError(false), 2000);
  }
};

export const setLoginUser = async (setError) => {
  try {
    const { data } = await axios.get(
      `https://frontendtestapi.staging.fastjobs.io/auth/me`
    );
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    setError(true);
    setTimeout(() => setError(false), 2000);
  }
};

export const fetchData = async () => {
  try {
    const { data } = await axios.get(
      `https://frontendtestapi.staging.fastjobs.io/data`
    );
    // console.log(data);
    // return data;
    store.dispatch(addData(data));
  } catch (error) {
    // console.log(error);
  }
};
