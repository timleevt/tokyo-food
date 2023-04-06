import axios, { AxiosError } from "axios";

export const isAxiosError = <T>(
  error: AxiosError | any
): error is AxiosError<T> => {
  return error && error.isAxiosError;
};

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000000,
});

export default client;
