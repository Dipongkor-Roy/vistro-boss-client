import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
    const {user}=useAuth();
    const axiosSecure=UseAxiosSecure();
    const {data:isAdmin,isPending:adminLoadingPending}=useQuery({
        queryKey:[user?.email,'isAdmin'],
        queryFn: async ()=>{
            const res=await axiosSecure.get(`/users/admin/${user.email}`);
             console.log(res.data)
            return res.data?.admin;
        }
    })
    return [isAdmin,adminLoadingPending];
};

export default useAdmin;