import {Swiper, SwiperSlide} from 'swiper/react';
import { EffectCoverflow, Pagination } from "swiper/modules";
import personalDevs from './assets/programador.svg'
import { developmentDevs } from './libs/data';

//swiper css
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function PersonalDevs() {

  const GetPersonalDevs = ()=>{

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
          developmentDevs.map( ({id, title, description, link, imagen})=>{
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
    <article className="m-2">
      <img
        id="img-profile"
        src={personalDevs}
        className="mx-auto md:w-2/4 lg:w-1/2"
        alt=""
      />
      <h2 className="h2">
        DESARROLLOS PERSONALES
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-2 fill-orange-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
            clipRule="evenodd"
          />
        </svg>
      </h2>

      <div className="flex flex-col m-2">
        <p className='leading-realxed'>
          Estos son algunas migraciones, códigos, proyectos de cursos, entre
          otros; desarrollados con el fin de poner en práctica lo aprendido a lo
          largo de mi experiencia laboral así como de los cursos, o por aprender
          sobre una tecnología, algunos también son algunas migraciones de una tecnología a otra.
        </p>

        <div
          id="personal-devs"
          className="all-projects m-2"
        >
            <GetPersonalDevs/>
        </div>
      </div>
    </article>
  );
}
