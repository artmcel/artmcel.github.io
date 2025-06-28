import personalDevs from '../../assets/programador.svg'
import { developmentDevs } from '../../libs/data';
import Slider from '../../components/Slider/Slider';

export default function PersonalDevs() {
  return (
    <article className="m-2">
      <img
        id="img-profile"
        src={personalDevs}
        className="mx-auto lg:w-2/5 md:w-2/4 sm:w-3/4 xs:w-full"
        alt=""
      />
      <h2 className="h2">DESARROLLOS PERSONALES 👨🏻‍💻🚀</h2>

      <div className="flex flex-col m-2">
        <p className='leading-realxed lg:text-lg'>
          Estos son algunas migraciones, códigos, proyectos de cursos, entre
          otros; desarrollados con el fin de poner en práctica lo aprendido a lo
          largo de mi experiencia laboral así como de los cursos, o por aprender
          sobre una tecnología, algunos también son algunas migraciones de una tecnología a otra.
        </p>

        <div
          id="personal-devs"
          className="all-projects m-2 mx-auto lg:w-1/2 md:w-3/4 sm:w-full xs:w-full"
        >
          <Slider data={developmentDevs} />
        </div>
      </div>
    </article>
  );
}
