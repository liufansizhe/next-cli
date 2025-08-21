import type { NextRequest } from "next/server";
import { getTranslations } from "next-intl/server";
import { responseHandle } from "@/lib/apiHandle/responseHandle";

export async function GET(req: NextRequest, ctx: RouteContext<"/api/Login">) {
  const t = await getTranslations("user");
  console.log(process.env.API_URL);
  return responseHandle({ data: { id: 111 }, message: t("user") });
}
