import axios, { type AxiosRequestConfig } from "axios";

//para chamar a api - post, put e delete
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

//para coleta de dados da api - get
export const fetcher = (url: string, options: AxiosRequestConfig = {}) =>
  api.get(url, options).then((res) => res.data);
