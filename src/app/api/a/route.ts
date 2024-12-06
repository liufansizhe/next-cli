import { ResponseParams, ResponseType } from "@/app/lib/types";

import db from "@/app/lib/db/index";
import { requestHandle } from "@/app/utils/requestHandle";

export async function GET(request: object, params: ResponseParams) {
  const data = await (await db.find("users")).toArray();
  console.log("lfsz--", process.env.NEXT_PUBLIC_API);

  return requestHandle<{ _id: string }>(data);
}
