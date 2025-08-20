//入参类型
export interface DataType<T> {
  message?: string;
  status?: Status;
  data: T;
}
//状态码
export type Status = 200 | 500;
//接口返回值统一处理
export const responseHandle = <T>(data: DataType<T>): Response => {
  const status = data?.status ?? 200;
  const responseData = {
    status,
    message: data?.message,
    data: data.data,
  };
  return Response.json(responseData, { status });
};
