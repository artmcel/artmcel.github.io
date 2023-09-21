import {Swiper, SwiperSlide} from 'swiper/react';
import { EffectCoverflow, Pagination } from "swiper/modules";
import prodDevs from './assets/online-prod.svg'
import { productionDevs } from './libs/data'

//swiper css
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


export default function ProdDevs() {

  const GetProdDevs = ()=>{
    
    return(
      <Swiper
        autoplay={{
          delay:3000,
          pauseOnMouseEnter: true
        }}
        loop={true}
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        modules={[Pagination, EffectCoverflow]}
        pagination={true}
        slidesPerView={'auto'}
        centeredSlides={true}
      >
        {
          productionDevs.map( ({id, title, description, link, imagen})=>{
            return(
              <SwiperSlide key={id}>
                <div className='flex flex-col justify-center text-center'>
                  <h3 className='font-sans text-2xl font-extrabold text-[#f25042]'>{title}</h3>
                  <div>
                    <img className="rounded-xl p-4" src={imagen} alt={title} />
                    <p className='text-lg'>
                      {description}
                    </p>
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
            )
          })
        }
      </Swiper>
    )
    
  }

  return (
    <article>
      <div className='m-2'>
        <img
          id="img-profile"
          src={prodDevs}
          className="mx-auto md:w-2/4 lg:w-1/2"
          alt=""
        />
      </div>
      <h2 className="h2">DESARROLLOS ON-LINE 🖥️🌎</h2>
      <div className="flex flex-col m-2">
        <p className='leading-relaxed'>
          Estos son algunos proyectos que se encuentran en un ambiente productivo.<br />
          En la mayoría de estos proyectos se consumen Servicios Web tanto SOAP como API REST,
          se realizan peticiones POST y GET. <br />
          En la parte del Back end se utliza PHP, y en el Front end HTML, Vanilla JS, Angular, CSS con Bootstrap; 
          y como dato adicional el diseño en algunas ocasiones fue hecho por mí, 
          y en otras eran diseños realizados por un área especifica y me encargaba de plasmarlos en el proyecto.
        </p>
        <div
          id="production-devs"
          className="all-projects m-2"
        >
          <GetProdDevs/>
        </div>
      </div>
    </article>
  );
}
