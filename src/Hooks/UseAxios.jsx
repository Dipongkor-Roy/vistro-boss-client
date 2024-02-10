import axios from "axios";

const asioxSecure =axios.create({
    baseURL:"http://localhost:2000/"
 })
const UseAxios = () => {
    return asioxSecure;
};

export default UseAxios;