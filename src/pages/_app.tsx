import "@/styles/global.scss";

import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import React from "react";
import store from "../store/index";
import theme from "../theme/themeConfig";

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider theme={theme}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </ConfigProvider>
);

export default App;
