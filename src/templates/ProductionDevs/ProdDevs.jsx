import prodDevs from '../../assets/online-prod.svg'
import Slider from '../../components/Slider';
import { productionDevs } from '../../libs/data'

export default function ProdDevs() {
  return (
    <article>
      <div className='m-2'>
        <img
          id="img-profile"
          src={prodDevs}
          className="mx-auto lg:w-2/5 md:w-2/4 sm:w-3/4 xs:w-full"
          alt=""
        />
      </div>
      <h2 className="h2">DESARROLLOS ON-LINE 🖥️🌎</h2>
      <div className="flex flex-col m-2">
        <p className='leading-relaxed lg:text-lg'>
          Estos son algunos proyectos que se encuentran en un ambiente productivo.<br />
          En la mayoría de estos proyectos se consumen Servicios Web tanto SOAP como API REST,
          se realizan peticiones POST y GET. <br />
          En la parte del Back end se utliza PHP, y en el Front end HTML, Vanilla JS, Angular, CSS con Bootstrap; 
          y como dato adicional el diseño en algunas ocasiones fue hecho por mí, 
          y en otras eran diseños realizados por un área especifica y me encargaba de plasmarlos en el proyecto.
        </p>
        <div
          id="production-devs"
          className="all-projects m-2 mx-auto lg:w-1/2 md:w-3/4 sm:w-full xs:w-full"
        >
          <Slider data={productionDevs} />
        </div>
      </div>
    </article>
  );
}
