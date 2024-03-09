import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { FaBook, FaCartPlus, FaDollarSign, FaUser } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure=UseAxiosSecure();
  const {data:stats}=useQuery({
    queryKey:['admin-stats'],
    queryFn:async()=>{
      const result= await axiosSecure.get('/admin-stats');
      return result.data;
    }
  })
  return (
    <>
    <div>
      <h2 className="text-3xl">Welcome Back</h2>
      {user?.displayName ? user.displayName : "Back"}
    </div>
    <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
     <FaDollarSign className="text-3xl"/>
    </div>
    <div className="stat-title">Revenue</div>
    <div className="stat-value">${stats.revenue}</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <FaUser className="text-3xl"/>
    </div>
    <div className="stat-title">Users</div>
    <div className="stat-value">{stats.users ?? 'N/A'}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  <div className="stat">
    <div className="stat-figure text-secondary">
     <FaBook className="text-3xl"/>
    </div>
    <div className="stat-title">Menu Items</div>
    <div className="stat-value">{stats.menuItems??'N/A'}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
    <FaCartPlus className="text-3xl"/>
    </div>
    <div className="stat-title">Orders</div>
    <div className="stat-value">{stats.orders}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
    </>
  );
};

export default AdminHome;
