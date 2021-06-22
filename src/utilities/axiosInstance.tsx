import axios from 'axios';
import Idx from 'idx';
const BaseURL = `http://172.105.61.231:3000/api/`;
const getAxiosInstance = () => {
  const instance = axios.create({
    baseURL: BaseURL,
    headers: {
    Authorization : `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNjg1LCJ1c2VybmFtZSI6Inl5eUBtYWlsaW5hdG9yLmNvbSIsImV4cCI6MTY0NzgyNjA3NywiZW1haWwiOiJ5eXlAbWFpbGluYXRvci5jb20iLCJvcmlnX2lhdCI6MTYyMTkwNjA3N30.nSuJeq29Zu8EifKeQrccn253WllH4vQevT75THQFh0Y'}`
  },
    timeout: 1000 * 60,
  });
  
  instance.interceptors.request.use(
    config => config,
    error => Promise.reject(error),
  );
  
  instance.interceptors.response.use(
    response => response,
    error => {
      if (Idx(error, _ => _.response.data)) {
        return Promise.reject(error.response.data);
      }

      return Promise.reject(error);
    },
  );

  return instance;
};

export default getAxiosInstance;
