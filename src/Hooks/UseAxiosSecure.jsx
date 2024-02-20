import axios from "axios";

 const asioxSecure = axios.create({
    baseURL:'http://localhost:2000/',
 })
const UseAxiosSecure = () => {
    return asioxSecure;
};

export default UseAxiosSecure;