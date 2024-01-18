import { Helmet } from "react-helmet-async";
import menuImage from "../../../assets/menu/banner3.jpg";
import Cover from "../../Shared/Cover"
import PopularIteam from "../../Home/PopularIteam/PopularIteam";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Vistro-Boss | Menu</title>
      </Helmet>
     <Cover image={menuImage} title='Our Menu'> </Cover>
      <PopularIteam/>
     <Cover image={menuImage} title='Our Menu'> </Cover>
      <PopularIteam/>
     <Cover image={menuImage} title='Our Menu'> </Cover>
      <PopularIteam/>
    </div>
  );
};

export default Menu;
