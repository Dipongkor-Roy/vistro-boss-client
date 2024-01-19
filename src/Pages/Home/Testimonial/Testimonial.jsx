import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'



// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

const Testimonial = () => {
    const [reviews,setReviews]=useState([])

    useEffect(()=>{
        fetch('http://localhost:2000/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
  return (
    <section className="mb-5">
      <SectionTitle
        heading="Testimonial"
        subheading="From Our Clients"
      ></SectionTitle>
      <div className="my-36 px-10">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper px-36">
       
    
      {
        reviews.map(review=><SwiperSlide key={review._id}>
            <div className="flex flex-col items-center ">
            <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      className="mb-2"
      readOnly
    />
                <p className="mb-2  pt-3 md:px-36 pb-3">{review.details}</p>
                <p className="text-2xl text-orange-500">{review.name}</p>
            </div>
            
            </SwiperSlide>)
      }
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
