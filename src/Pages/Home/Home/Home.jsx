import Banner from "../Banner/Banner";
import Catagory from "../Category/Catagory";
import PopularIteam from "../PopularIteam/PopularIteam";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory/>
            <PopularIteam/>
        </div>
    );
};

export default Home;