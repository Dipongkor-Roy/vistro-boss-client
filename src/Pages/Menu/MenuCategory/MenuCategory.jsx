import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover";
import MenuIteam from "../../Shared/MenuIteam";


const MenuCategory = ({items,image,title}) => {
   <p>{items.length}</p>
    
    return (
       <div>
     {title && <Cover image={image} title={title} ></Cover>}
         <div className="grid md:grid-cols-2 gap-10 my-5">
        {items.map((iteam) => (
          <MenuIteam key={iteam._id} iteam={iteam}></MenuIteam>
        ))}
      </div>
      <div className="my-5 flex justify-center items-center">
       <Link to={`/order/${title}`}> <button className="btn btn-outline border-0 border-b-4 ">
         Order Now
        </button></Link>
      </div>
       </div>
    );
};

export default MenuCategory;