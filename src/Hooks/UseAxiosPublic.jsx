import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://vistro-boss-server.vercel.app/',
   
  });
const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;