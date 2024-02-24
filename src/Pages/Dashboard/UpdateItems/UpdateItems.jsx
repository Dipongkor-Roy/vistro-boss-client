import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useForm } from "react-hook-form";

const imageApiKey = import.meta.env.VITE_image_apikey;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageApiKey}`;

const UpdateItems = () => {
  const {_id,name,category,price,recipe}=useLoaderData();
  // console.log(_id,name,category,price,recipe);
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = UseAxiosPublic();
    const axiosSecure=UseAxiosSecure();
    const onSubmit = async (data) => {
      console.log(data);
      const imageFile = { image: data.image[0] };
      const res = await axiosPublic.post(imageHostingApi, imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if(res.data.success){
  
          const menuItem={
              name:data.name,
              category:data.category,
              price:parseFloat(data.price),
              recipe:data.recipe,
              image:res.data.data.display_url
          }
          const menuRes=await axiosSecure.patch(`/menu/${_id}`,menuItem);
         
  
          if(menuRes.data.modifiedCount>0){
              //menu item added alert
              reset();
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${data.name} added Successfully`,
                  showConfirmButton: false,
                  timer: 1500
                });
  
          }
      }
      console.log(res.data)
    };
    return (
        <div>
            <SectionTitle heading='Update Item' subheading='Do some changes'></SectionTitle>
            <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-5">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
            defaultValue={name}
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe Name"
              required
              className="input input-bordered w-full "
            />
          </label>
          <div className="flex gap-6">
            {/* category */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                  defaultValue={category}
                {...register("category", { required: true })}
                required
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="desert">Desert</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>

            {/* price */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                 defaultValue={price}
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div>
            <label className="form-control">
              <div className="label mt-3">
                <span className="label-text">Recipe</span>
              </div>
              <textarea
                 defaultValue={recipe}
                {...register("recipe")}
                className="textarea textarea-bordered h-24"
                placeholder="Recipe"
              ></textarea>
            </label>
            {/* file upload */}
            <div className="mt-5">
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input w-full"
              />
            </div>
          </div>
          <button type="submit" className="btn mt-3">
            Update iteam 
          </button>
        </form>
      </div>
            
        </div>
    );
};

export default UpdateItems;