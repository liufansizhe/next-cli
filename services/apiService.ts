/*
 * @FilePath: \dev\src\services\apiService.js
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-04-24 10:34:42
 * @Description:
 */

import Axios from "./request";

export class ApiService {
  baseUrl: string;
  constructor(url: string) {
    this.baseUrl = url;
  }

  // 获取列表数据
  get(id?: string, query?: string) {
    if (!query) {
      query = id;
      id = undefined;
    }
    return Axios({
      url: this.baseUrl + (id ? `/${id}` : ""),
      method: "get",
      params: query,
    });
  }
  // 新增数据
  post(id?: string, data?: unknown, headers?: Record<string, string>) {
    if (!data) {
      data = id;
      id = undefined;
    }
    return Axios({
      url: this.baseUrl + (id ? `/${id}` : ""),
      method: "post",
      headers,
      data,
    });
  }

  put(id?: string, data?: unknown) {
    if (!data) {
      data = id;
      id = undefined;
    }
    return Axios({
      url: this.baseUrl + (id ? `/${id}` : ""),
      method: "put",
      data,
    });
  }

  delete(id?: string, data?: unknown) {
    if (!data) {
      data = id;
      id = undefined;
    }
    return Axios({
      url: this.baseUrl + (id ? `/${id}` : ""),
      method: "delete",
      data,
    });
  }

  formData(id?: string, data?: unknown) {
    if (!data) {
      data = id;
      id = undefined;
    }
    return Axios({
      url: this.baseUrl + (id ? `/${id}` : ""),
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data,
    });
  }
}
