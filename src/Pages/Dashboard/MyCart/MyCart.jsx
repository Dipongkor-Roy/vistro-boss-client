import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart,refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0); //here item traverse and total amount store in sum
  const handleDelete=(item)=>{
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
          fetch(`http://localhost:2000/carts/${item._id}`,{
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
  return (
    <div className=" w-5/6">
      <div className="uppercase h-20 flex justify-between items-center">
        <p className="text-2xl mr-4">Total Items: {cart.length}</p>
        <p className="text-2xl mr-4">Total Price: ${total}</p>
        <button className="btn btn-warning btn-circle ml-4">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Food</th>
              <th>Food Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {cart.map((item,index)=> <tbody key={item._id}>
       
       <tr>
         <td>
           {index+1}
         </td>
         <td>
           
             <div className="avatar">
               <div className="mask mask-squircle w-12 h-12">
                 <img
                   src={item.image}
                   alt="Avatar Tailwind CSS Component"
                 />
               </div>
             </div>
           
         </td>
         <td>
           {item.name}
           
         </td>
         <td className="text-end">{item.price}</td>
         <th>
           <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-lg"><FaTrashAlt/></button>
         </th>
       </tr>
     </tbody>)}
         
        </table>
      </div>
    </div>
  );
};

export default MyCart;
