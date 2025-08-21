import { getLocale } from "./index";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = await getLocale();
  console.log("🚀 ~ getRequestConfig ~ locale:", locale);
  return {
    locale,
    messages: (await import(`./lang/${locale}.json`)).default,
  };
});
