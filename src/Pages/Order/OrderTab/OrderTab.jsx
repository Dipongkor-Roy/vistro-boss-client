
import MenuCard from "../../../Components/MenuCard/MenuCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OrderTab = ({ item }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <div>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="grid md:grid-cols-3 gap-10">
              {item.map((item) => (
                <MenuCard key={item._id} item={item}></MenuCard>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default OrderTab;
