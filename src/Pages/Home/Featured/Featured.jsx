import featuredImage from "../../../assets/home/featured.jpg"
import SectionTitle from "../../../Components/SectionTitle/SectionTitle"
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item text-white my-20 pt-12  pb-36">
        <SectionTitle subheading='Check It out' heading='Featured Items'></SectionTitle>
        <div className="md:flex justify-center items-center pt-12 pb-20 px-36">
          <div>
          <img src={featuredImage} alt="" />
          </div>
           <div className="md:ml-4">
           <p className="pb-3">20, Aug 2029</p>
            <p className=" uppercase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorem nihil beatae a non, labore ea illo nemo voluptatum ipsam. Possimus, recusandae ipsam. Perspiciatis, quas facilis laboriosam repellat ipsa tempore.</p>
        
            <button className="btn btn-outline mt-3 ">Read More</button>
           </div>
        </div>
        </div>
    );
};

export default Featured;