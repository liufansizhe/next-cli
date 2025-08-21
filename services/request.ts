/*
 * @FilePath: \dev\src\services\request.js
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-04-24 10:34:57
 * @Description:
 */

import axios from "axios";
import config from "./config";
import qs from "qs";

const Axios = axios.create(config);

// POST 传参序列化
Axios.interceptors.request.use(
  (config) => {
    if (localStorage.token) {
      config.headers.Authorization = `Bearer ${localStorage.token}`;
    }
    if (config.headers["Content-Type"] == "multipart/form-data") {
      return config;
    }
    if (config.method === "post") config.data = qs.stringify(config.data);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 返回结果处理
Axios.interceptors.response.use(
  (response) => {
    switch (response.status) {
      case 200: {
        if (response?.data?.code <= 0) {
          return { data: null };
        } else {
          return response?.data;
        }
      }
      default: {
        return { data: null };
      }
    }
  },
  (error) => {
    switch (error?.response?.status) {
      case 403:
      case 401: {
        return { data: null };
      }
      default: {
        return { data: null };
      }
    }
  }
);

export default Axios;
