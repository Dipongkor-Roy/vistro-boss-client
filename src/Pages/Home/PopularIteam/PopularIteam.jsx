import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuIteam from "../../Shared/MenuIteam";

const PopularIteam = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        
        const popularItems = data.filter((item) => item.category === "popular");
        
        setMenu(popularItems);
       
      });
  }, []);

  return (
    <section>
      <SectionTitle
        heading="order now"
        subheading="Popular Items"
      ></SectionTitle>
      <div>
        {menu.map((iteam) => (
          <MenuIteam key={iteam._id} iteam={iteam}></MenuIteam>
        ))}
      </div>
    </section>
  );
};

export default PopularIteam;
