import Banner from "../Banner/Banner";
import Catagory from "../Category/Catagory";
import Featured from "../Featured/Featured";
import PopularIteam from "../PopularIteam/PopularIteam";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory/>
            <PopularIteam/>
            <Featured/>
        </div>
    );
};

export default Home;