import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthCont";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const MenuCard = ({ item }) => {
  const { name, image, price, recipe, _id} = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location=useLocation();
  const handleAddtoCart = (iteam) => {
    console.log(iteam);
   
    if (user && user.email) {
      const cartItem={menuItemId:_id,name,image,price, email: user.email}
      fetch("http://localhost:2000/carts",{
        method:'POST',
        headers:{  
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.insertedId) {
            Swal.fire({
              title: "Good job!",
              text: "Order Added On the Cart!",
              icon: "success",
            });
          } 
          
        });
    }
    else {
      Swal.fire({
        title: "Please LogIn for order food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "LogIn!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/logIn",{state:{from: location}});
        }
      });
    }
  };
  return (
    <div className="card w-72 bg-base-100 shadow-xl  ">
      <figure>
        <img src={image} alt="img" />
      </figure>
      <p className="absolute right-0 bg-slate-900  px-3 rounded-md my-3 mr-4">
        $ {price}
      </p>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddtoCart(item)}
            className="btn btn-primary"
          >
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
