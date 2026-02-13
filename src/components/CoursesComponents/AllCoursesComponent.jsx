// react
import React from "react";

// pictures
import IT_Icon from "../../assets/pictures/IT_Icon.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

import { Autoplay } from "swiper/modules";
function AllCoursesComponent({ data, loading, error }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {data &&
          data.map((course) => (
            <SwiperSlide>
              <div className="bg-[#FFC107] w-96 h-56 flex flex-col items-center justify-center gap-2 py-2 rounded-lg mt-10">
                <img src={IT_Icon} alt="rasm bor" className="w-24" />
                <h4 className="text-black font-black text-3xl text-center">{course.course_name}</h4>
                <button className="bg-black text-white font-black text-2xl w-56 rounded-xl py-2">
                  Batafsil
                </button>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default AllCoursesComponent;
