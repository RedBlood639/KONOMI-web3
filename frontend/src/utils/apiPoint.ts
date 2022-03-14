import axios from "axios";

export const apiPoint = (): any => {
  const api = axios.create({
    baseURL: "localhost:3001",
    responseType: "json",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return api;
};
