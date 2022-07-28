import axios, { AxiosError } from "axios";
import store from "../store";

const axiosClient = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api/",
  headers: {
    tokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMiIsIkhldEhhblN0cmluZyI6IjMwLzExLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2OTc2NjQwMDAwMCIsIm5iZiI6MTY0MTgzNDAwMCwiZXhwIjoxNjY5OTE0MDAwfQ.mTJaYLlwFuAG-SiC8fUlH-taW8wV0VAASxdCPf54RX8",
  },
});
interface ErrorResponse {
    content: string;
}
axiosClient.interceptors.response.use(
    (response)=>{
        return response.data.content;
    },
    (error: AxiosError<ErrorResponse>)=>{
        return Promise.reject(error.response?.data.content);
    }
)

export default axiosClient;