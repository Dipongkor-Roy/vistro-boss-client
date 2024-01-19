import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu/useMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory"
import menuImage from "../../../assets/menu/banner3.jpg";
import offerImage from "../../../assets/menu/menu-bg.png"
import dessertImage from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImage from "../../../assets/menu/pizza-bg.jpg"
import soupImage from "../../../assets/menu/pizza-bg.jpg"
const Menu = () => {
  const [menu] = useMenu(); //custome hook
  const offered = menu.filter((item) => item.category === "offered");
  const soup = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");

  return (
    <div>
      <Helmet>
        <title>Vistro-Boss | Menu</title>
      </Helmet>
      <Cover image={menuImage} title="Our Menu">
        {" "}
      </Cover>
      <SectionTitle subheading="Iteams" heading="Today's Offer"></SectionTitle>
      <MenuCategory items={offered} title='Offered Food' image={offerImage}></MenuCategory>
      <MenuCategory items={desserts} title='Desserts' image={dessertImage}></MenuCategory>
      <MenuCategory items={pizza} title='Pizzas' image={pizzaImage}></MenuCategory>
      <MenuCategory items={soup} title='Soups' image={soupImage}></MenuCategory>
    </div>
  );
};

export default Menu;
