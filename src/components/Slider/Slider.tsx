import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  EffectCoverflow,
  Autoplay,
  Navigation,
} from "swiper/modules";
import { SliderProps } from "./model";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const Slider: React.FC<SliderProps> = ({ data }) => {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      modules={[Pagination, EffectCoverflow, Autoplay, Navigation]}
      pagination={{
        clickable: false,
        type: "bullets",
      }}
      slidesPerView={"auto"}
      centeredSlides={true}
    >
      {data.map(({ id, title, imagen, description, link }) => (
        <SwiperSlide key={id}>
          <div className="flex flex-col justify-center text-center">
            <h3 className="font-sans text-2xl font-extrabold text-[#f25042]">
              {title}
            </h3>
            <div className="p-2">
              <img className="rounded-xl p-4" src={imagen} alt={title} />
              <p className="text-lg">{description}</p>
            </div>
            <div>
              <button className="btn-proyectos m-4">
                <a
                  className="flex justify-center"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
