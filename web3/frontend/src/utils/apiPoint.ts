import axios from "axios";

export const apiPoint = (): any => {
  const api = axios.create({
    baseURL: "http://192.168.112.145:3001",
    responseType: "json",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return api;
};
