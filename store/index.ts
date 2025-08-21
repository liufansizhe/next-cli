import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { exampleSlice } from "./example";

const rootReducer = {
  example: exampleSlice.reducer,
  // 其他 reducer
};

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

// 导出一些后续会用到的类型
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// 使用 next-redux-wrapper 的 createWrapper 创建 wrapper
export const wrapper = createWrapper<AppStore>(makeStore, { debug: false }); // 开发环境可以将 debug 设为 true
