export type ApiFetcherOptions = {
  url: string;
  query?: string;
  bodyData?: { [key: string]: any };
  method: "GET" | "POST" | "PATCH" | "DELETE";
};

export type ApiFetcherResults<T> = {
  data: T;
};

export interface ApiConfig {
  apiUrl: string;
  fetch<T>(options: ApiFetcherOptions): Promise<ApiFetcherResults<T>>;
}
