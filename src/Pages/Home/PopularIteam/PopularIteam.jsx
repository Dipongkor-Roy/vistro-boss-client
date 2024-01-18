import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu/useMenu";
import MenuIteam from "../../Shared/MenuIteam";

const PopularIteam = () => {
  const [menu] = useMenu(); //custome hook
  const popularItems = menu.filter((item) => item.category === "popular");
  return (
    <section className="mb-10">
      <SectionTitle
        heading="order now"
        subheading="Popular Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popularItems.map((iteam) => (
          <MenuIteam key={iteam._id} iteam={iteam}></MenuIteam>
        ))}
      </div>
      <div className="my-5 flex justify-center items-center">
        <button className="btn btn-outline border-0 border-b-4 ">
          See Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularIteam;
