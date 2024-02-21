import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

 const axiosSecure = axios.create({
    baseURL:'http://localhost:2000/',
 })
const UseAxiosSecure = () => {
    const {logOut}=useAuth();
    const navigate=useNavigate();
    axiosSecure.interceptors.request.use(function(config){
        const token=localStorage.getItem('access-token')
        // console.log('req stopped by interceptors',token)
        config.headers.authorization=`Bearer ${token}`
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
    )
    //intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function(response){
        return response;
    }
    ,async(error)=>{
        const status=error.response.status;
        console.log('status err in the interceptor',status)
        //for 401 or 403 logout the user and move the user to the login
        if(status ===401 || status===403){
            //
            await logOut();
            navigate('/logIn')
        }
        return Promise.reject(error)
    }
    
    )
    return axiosSecure;
};

export default UseAxiosSecure;