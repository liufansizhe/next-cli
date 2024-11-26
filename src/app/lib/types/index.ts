export interface ResponseType<T> {
  code: number;
  message: string;
  data: T;
  success: boolean;
}
export interface ResponseParams {
  params: {
    url: string;
  };
}
