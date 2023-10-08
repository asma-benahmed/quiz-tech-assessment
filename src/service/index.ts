/* istanbul ignore file */
import moment from "moment-timezone";
import { showToast } from "../utils/functions";
import axios from "axios";

const service = axios.create({
  baseURL:
    "https://bf16a613-dc6a-4f27-986b-82188975ac27.mock.pstmn.io/" /* process.env.REACT_APP_SERVER_URL*/,
  //   withCredentials: true,
});

service.interceptors.response.use(
  function (response) {
    showToast(response.data.message, "success");
    return response;
  },

  function (error) {
    switch (error.response?.status) {
      default:
        showToast(error.response?.data.message, "error");
        console.error(error);
        break;
    }
    return Promise.reject(error);
  }
);

service.interceptors.request.use((config) => {
  config.headers["Authorization"] = `Bearer ${
    /*localStorage.getItem("token")*/
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdXJuYW1lIjoiQXNtYSIsIm5hbWUiOiJCZW4gQWhtZWQiLCJyb2xlIjoiRGV2ZWxvcGVyIn0.zVYoXtaHuWZBrd2aC7cxXTrEaoeE6Hbyb9hGUdYyV3M"
  }`;
  config.headers["time_zone"] = moment.tz.guess();
  return config;
});

export default service;
