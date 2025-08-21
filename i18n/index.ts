"use server";

import { Locale, defaultLocale } from "./config";
import { cookies, headers } from "next/headers";

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = "NEXT_LOCALE";
// 这是从请求头里面获取语言环境的方法，本文采用的不是从请求当中获取，这个函数只是个展示，告诉你如何从请求当中获取语言环境
export async function getUserLocale() {
  // 读取 cookie
  const locale = (await cookies()).get(COOKIE_NAME)?.value;
  if (locale) return locale;
  // 读取请求头 accept-language
  const acceptLanguage = (await headers()).get("accept-language");
  // 解析请求头
  const parsedLocale = acceptLanguage?.split(",")[0].split("-")[0];

  // 如果不在系统支持的语言列表，使用默认语言
  return parsedLocale ?? defaultLocale;
}

// 获取当前语言环境
export async function getLocale() {
  return (await cookies()).get(COOKIE_NAME)?.value || defaultLocale;
}
// 设置语言环境
export async function setLocale(locale: Locale) {
  (await cookies()).set(COOKIE_NAME, locale);
}
