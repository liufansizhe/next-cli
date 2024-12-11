import language, { languageItemType } from "../../public/language";
import { useEffect, useState } from "react";

const useTranslate = () => {
  const [dic, setDic] = useState<languageItemType>(language["en"]);
  const init = async () => {
    // 创建一个 MutationObserver 对象
    const observer = new MutationObserver(
      async (mutationsList: MutationRecord[]) => {
        // 在属性变化时执行回调函数
        for (const mutation of mutationsList) {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName == "lang"
          ) {
            const languageItem = localStorage.getItem("language");
            const lang = languageItem ?? "en";
            setDic(language?.[lang]);
          }
        }
      }
    );

    // 选择要监听的元素
    const targetElement = document.querySelector("html");

    // 配置 MutationObserver
    const config = { attributes: true };

    // 开始监听属性变化
    observer.observe(targetElement as Node, config);
    const languageItem = localStorage.getItem("language");
    const lang = languageItem ?? "en";
    setDic(language?.[lang]);
  };
  useEffect(() => {
    init();
  }, []);
  const t = (val: string) => {
    return dic?.[val] ?? val;
  };
  const translate = async (lang: string) => {
    const html = document.querySelector("html");
    if (html) {
      localStorage.setItem("language", lang);
      html.setAttribute("lang", lang);
    }
  };
  return { t, translate };
};
export default useTranslate;
