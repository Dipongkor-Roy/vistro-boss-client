import axios from "axios";

 const axiosSecure = axios.create({
    baseURL:'http://localhost:2000/',
 })
const UseAxiosSecure = () => {
    axiosSecure.interceptors.request.use(function(config){
        const token=localStorage.getItem('access-token')
        console.log('req stopped by interceptors',token)
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
    ,(error)=>{
        const status=error.response.status;
        console.log('status err in the interceptor',status)
        return Promise.reject(error)
    }
    
    )
    return axiosSecure;
};

export default UseAxiosSecure;