import useSWR from "swr";

const baseUrl = "https://poker247tech.ru/get_horoscope/";

const fetcherPOST = ({ url, body }) =>
  fetch(url, {
    method: "POST",
    body: body,
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
  }).then((res) => res.json());

export const usePostRequest = (body: any) => {
  const { data, isLoading, error } = useSWR({ url: baseUrl, body: body }, fetcherPOST);

  return { data, isLoading, error };
};
