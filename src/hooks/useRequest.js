import useSWR from "swr";
const baseUrl = "https://poker247tech.ru/get_horoscope/";
const fetcherGET = async (url, options) => {
    const response = await fetch(url, options);
    return response.json();
};
const fetcherPOST = ({ url, body }) => fetch(url, {
    method: "POST",
    body: body,
    headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "application/json",
    },
}).then((res) => res.json());
export const useRequest = (path) => {
    const url = path ? `${baseUrl}/${path}` : baseUrl;
    const { data, error } = useSWR(url, fetcherGET);
    return { data, error };
};
export const usePostRequest = (body) => {
    const { data, isLoading, error } = useSWR({ url: baseUrl, body: body }, fetcherPOST);
    return { data, isLoading, error };
};
