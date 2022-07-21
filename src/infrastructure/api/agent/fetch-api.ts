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

  if (query) {
    url = `${url}?${new URLSearchParams(query)}`;
  }

  if (method === "POST") {
    params = { ...params, body: JSON.stringify(bodyData) };
  }

  try {
    const res = await fetch(url, params);
    // Error when uncommented!
    // if (res.status > 200) {
    //   throw new Error("Грешка при връзка със сървъра!");
    // }
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error.toString());
  }
};
