import { ResponseParams, ResponseType } from "@/app/lib/types";

import db from "@/app/lib/db/index";
import { requestHandle } from "@/app/utils/requestHandle";

export interface UserInfo {
  id: string;
  name: string;
  password: string;
  email: string;
}
export async function GET(request: object, params: ResponseParams) {
  const data = await (await db.find("users")).toArray();
  return requestHandle<UserInfo>(data);
}
