import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/UseAxios"
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
     const axiosSecure=useAxios(); //for secure loading
    const {data:users=[],refetch}=useQuery({
        queryKey:['users'],
        queryFn:async ()=>{
            const res= await axiosSecure.get('/users');
            return res.data;
        }
    })
    const handleDeleteUser=user=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:2000/users/${user._id}`,{
                method:'DELETE'
              })
              .then(res=>res.json())
              .then(data=>{
                if(data.deletedCount>0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
              })
            }
          });
    }
    const handleMakeAdmin=()=>{
        
    }
    return (
       <div>
         <div className="flex justify-evenly my-4">
            <h2 className="text-2xl">All Users</h2>
            <h2 className="text-2xl">Total Users: {users.length}</h2>
        </div>
        <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user,index)=> <tr key={user._id}>
        <th>{index+1}</th>
        <td>{user?.name}</td>
        <td>{user.email}</td>
        <td>
        <button onClick={()=>handleMakeAdmin(user)} className="btn btn-md bg-orange-500 text-xl text-white"><FaUser/></button>
        </td>
        <td>
        <button onClick={()=>handleDeleteUser(user)} className="btn btn-ghost btn-md bg-red-500"><FaTrashAlt/></button>
        </td>

      </tr>)}
     
      
    </tbody>
  </table>
</div>
       </div>

    );
};

export default AllUsers;