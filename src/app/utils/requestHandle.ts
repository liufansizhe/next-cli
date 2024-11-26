import { ResponseType } from "@/app/lib/types";

export async function requestHandle<T>(data: T) {
  const responseData: ResponseType<T> = {
    code: 200,
    success: true,
    data,
    message: "",
  };
  return Response.json(responseData, { status: responseData.code });
}
