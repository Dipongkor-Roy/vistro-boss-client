import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Catagory = () => {
    return (
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-12"
      >
        <SwiperSlide> <img src={slide1} alt="" /> 
        <h2 className='text-4xl text-center text-white  font-semibold uppercase -mt-16'>Salads</h2> </SwiperSlide>
        <SwiperSlide> <img src={slide2} alt="" />
        <h2 className='text-4xl text-center text-white font-semibold uppercase -mt-16'>Pizza</h2>  </SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
         <h2 className='text-4xl text-center text-white  font-semibold uppercase -mt-16'>Deserts</h2> </SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /> 
        <h2 className='text-4xl text-center text-white -mt-16 font-semibold uppercase'>Cake</h2> </SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /> 
        <h2 className='text-4xl text-center text-white -mt-16 font-semibold uppercase'>Salads</h2> </SwiperSlide>
        
      </Swiper>
    );
};

export default Catagory;