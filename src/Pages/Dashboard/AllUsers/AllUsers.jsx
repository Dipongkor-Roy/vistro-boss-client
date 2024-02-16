import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/UseAxios"


const AllUsers = () => {
     const axiosSecure=useAxios(); //for secure loading
    const {data:users=[]}=useQuery({
        queryKey:['users'],
        queryFn:async ()=>{
            const res= await axiosSecure.get('/users');
            return res.data;
        }
    })
    return (
       <div>
         <div className="flex justify-evenly my-4">
            <h2 className="text-2xl">All Users</h2>
            <h2 className="text-2xl">Total Users: {users.length}</h2>
        </div>
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user,index)=> <tr key={user._id}>
        <th>{index+1}</th>
        <td>{user?.name}</td>
        <td>Quality Control Specialist</td>
        <td>{user.email}</td>
      </tr>)}
     
     
    </tbody>
  </table>
</div>
       </div>

    );
};

export default AllUsers;