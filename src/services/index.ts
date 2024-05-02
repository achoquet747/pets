import axios from "axios";

const config = {
  baseURL: "http://localhost:8000",
};

const service = axios.create(config);

const ApiService = () => {
  return {
    get(url: string, params = {}) {
      return service.get(url, params);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    post(url: string, data: any) {
      return service.post(url, data);
    },
    delete(url: string) {
      return service.delete(url);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    put(url: string, data: any) {
      return service.put(url, data);
    },
  };
};

const apiService = ApiService();

export default apiService;
