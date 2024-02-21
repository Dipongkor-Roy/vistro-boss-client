import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <SectionTitle
        heading="Added An Item"
        subheading="Whats New ?"
      ></SectionTitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-5">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              {...register("name",{required: true})}
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
                {...register("category",{required: true})}
                required
                className="select select-bordered w-full "
              >
                <option disabled selected>
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
                {...register("price",{required: true})}
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
                {...register("recipe")}
                className="textarea textarea-bordered h-24"
                placeholder="Recipe"
              ></textarea>
            </label>
            {/* file upload */}
            <div className="mt-5">
            <input {...register("image",{required: true})} type="file" className="file-input w-full" />
            </div>
          </div>
          <button type="submit" className="btn mt-3">
            Add iteam <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
