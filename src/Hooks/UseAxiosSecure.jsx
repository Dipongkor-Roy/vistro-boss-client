import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: 'http://localhost:2000/',
});

const UseAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('access-token');
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      const status = error.response.status;
      console.log('status err in the interceptor', status);

      // Move the navigate call inside a useEffect to avoid the warning
      useEffect(() => {
        if (status === 401 || status === 403) {
          logOut();
          navigate('/logIn');
        }
      }, [status, logOut, navigate]);

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default UseAxiosSecure;
