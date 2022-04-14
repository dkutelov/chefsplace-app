import { ApiFetcherOptions, ApiFetcherResults } from "@types/common/api";

export const fetchAPI = async <T>({
  url,
  query,
  bodyData,
  method = "GET",
}: ApiFetcherOptions): Promise<ApiFetcherResults<T>> => {
  let params: {
    method: string;
    headers: { [key: string]: string };
    body?: string;
  } = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (method === "POST") {
    params = { ...params, body: JSON.stringify(bodyData) };
  }

  const res = await fetch(url, params);

  const data = await res.json();

  // ?? checking if left is null or undefined only
  // || checking if left is null, undefined, "", 0 or false
  //   if (errors) {
  //     throw new Error(errors[0].message ?? errors.message);
  //   }

  return data;
};
