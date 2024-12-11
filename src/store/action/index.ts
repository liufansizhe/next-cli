/*
 * @Author: hukai huzhengen@gmail.com
 * @Date: 2024-11-04 15:13:24
 * @LastEditors: hukai huzhengen@gmail.com
 * @LastEditTime: 2024-11-04 15:13:32
 * @FilePath: \dome-react\src\store\counterSlice.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 创建计数器切片slice
// 导入创建切片的函数

import { createSlice } from "@reduxjs/toolkit";

// 定义初始化状态
const initialState = {};
// 创建切片
const counterSlice = createSlice({
  // 切片名称
  name: "userInfo",
  // 初始化状态
  initialState,
  // 定义处理器
  reducers: {
    // 处理加法
    update: (state, action) => {
      console.log("lfsz", state, action);

      state = { ...state, ...action.payload };
      return state;
    },
  },
});

// 导出动作
export const { update } = counterSlice.actions;
// 导出处理器
export default counterSlice.reducer;
