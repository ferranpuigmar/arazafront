import axios, { AxiosRequestHeaders } from "axios";

const client = axios.create({ baseURL: process.env.APP_API_BASE_URL });

client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    return Promise.reject(err.response);
  }
);

const apiClient = () => {
  const headers = {
    "Content-type": "application/json",
  };

  const get = async (url) => {
    const res = await client.get(url, { headers });
    return res.data;
  };

  const post = async (url, body) => {
    const res = await client.post(url, { ...body }, { headers });
    return res.data;
  };

  return {
    get,
    post,
  };
};

export default apiClient;
