"use client";
import { type Locale, locales } from "../i18n/config";

import { setLocale } from "../i18n";
import { useTranslations } from "next-intl";
import { Login } from "../services";
export default function Home() {
  const t = useTranslations("user");
  const switchHandle = (val: Locale) => {
    setLocale(val);
  };
  const clickHandle = () => {
    Login.get();
  };
  const renderSwitchLang = (): React.ReactNode[] => {
    return locales.map((item) => (
      <div onClick={() => switchHandle(item)} key={item}>
        {item}
      </div>
    ));
  };
  return (
    <div>
      {t("user")}
      {renderSwitchLang()}
      <div onClick={clickHandle}>2222</div>
    </div>
  );
}
