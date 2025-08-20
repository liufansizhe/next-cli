import type { NextRequest } from "next/server";
import { responseHandle } from "@/lib/apiHandle/responseHandle";

export async function GET(req: NextRequest, ctx: RouteContext<"/api/login">) {
  return responseHandle({ data: { id: 111 }, message: "111" });
}
