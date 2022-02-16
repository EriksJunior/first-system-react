import axios from "axios";

const http = axios.create({
  baseURL: "http://127.0.0.1:3333",
});

export { http };
