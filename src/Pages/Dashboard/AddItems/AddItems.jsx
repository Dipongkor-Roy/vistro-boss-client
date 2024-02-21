import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

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
          <input {...register("name")} />
          <select
            {...register("category")}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Select a category
            </option>
            <option value="salad">Salad</option>
            <option value="pizza">Pizza</option>
            <option value="desert">Desert</option>
            <option value="drinks">Drinks</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
