import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Catagory from "../Category/Catagory";
import Featured from "../Featured/Featured";
import PopularIteam from "../PopularIteam/PopularIteam";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Vistro-Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Catagory />
      <PopularIteam />
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
