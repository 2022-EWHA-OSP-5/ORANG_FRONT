import Img1 from '../../assets/Swiper/img1.png';
import Img2 from '../../assets/Swiper/img2.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './Swiper.style.css';

SwiperCore.use([Pagination, Autoplay]);

function CustomSwiper() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>';
    },
  };
  return (
    <div className="container">
      <div className="veil"></div>
      <Swiper
        className="banner"
        spaceBetween={0} //slide 사이 간격
        slidesPerView={1} // 한번에 보여지는 slide 개수
        pagination={pagination}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <div id="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <div id="img2" />
        </SwiperSlide>
        <SwiperSlide>
          <div id="img3" />
        </SwiperSlide>
        <SwiperSlide>
          <div id="img4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CustomSwiper;
