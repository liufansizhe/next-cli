# next-cli
page.tsx最好就当作服务端，里面可以引用客户端的组件
## 一、环境管理
env-cmd:客户端只能访问前缀是`NEXT_PUBLIC_`的环境变量
```cmd
 "scripts": {
    "dev": "env-cmd -f .env.local next dev",
  }
```
## 二、国际化
next-intl
### 客户端
1. useTranslations：生成t来翻译
2. setLocale：修改语言
```typescript
"use client";
import { type Locale, locales } from "../../i18n/config";

import { setLocale } from "../../i18n";
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations("user");
  const switchHandle = (val: Locale) => {
    setLocale(val);
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
    </div>
  );
}
```
### 服务端
getTranslations：生成t来翻译
```ts
import type { NextRequest } from "next/server";
import { getTranslations } from "next-intl/server";
import { responseHandle } from "@/lib/apiHandle/responseHandle";

export async function GET(req: NextRequest, ctx: RouteContext<"/api/Login">) {
  const t = await getTranslations("user");
  return responseHandle({ data: { id: 111 }, message: t("user") });
}
```
## 三、状态管理
1. @reduxjs/toolkit
2. react-redux
3. next-redux-wrapper