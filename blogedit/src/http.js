import axios from "axios";
import Vue from "vue";
import router from "./router";

const http = axios.create({
  baseURL: "http://zhouxug.cn:8080/hello/",
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    // config.headers.Authorization = "Bearer " + localStorage.token || "";
    config.headers.token = localStorage.token || "";
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log(err.response.data.message);
    if (err.response.data.message) {
      Vue.prototype.$message({
        type: "error",
        message: err.response.data.message,
      });

      if (err.response.status === 401) {
        router.push("/login");
      }
    }

    return Promise.reject(err);
  }
);

export default http;
