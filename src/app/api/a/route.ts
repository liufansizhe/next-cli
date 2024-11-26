import { ResponseParams, ResponseType } from "@/app/lib/types";

import db from "@/app/lib/db/index";
import { requestHandle } from "@/app/utils/requestHandle";

export async function POST(request: object, params: ResponseParams) {
  const data = await (await db.find("users")).toArray();
  return requestHandle<{ _id: string }>(data);
}
