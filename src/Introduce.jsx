import profile from './assets/profile-picture.jpeg';

export default function Introduce() {
  return (
    <article className="flex flex-col justify-center items-center md:flex-row">
      <div className="m-4 w-3/4 drop-shadow-2xl bg-[#8c7851] rounded-lg -rotate-12
        md:w-3/4 md:basis-2/4 md:mx-7
        lg:w-1/4 lg:basis-1/4">
        <img
          id="img-profile"
          src={profile}
          className="p-3 object-center rounded-lg rotate-12 w-auto h-auto"
          alt="profile-img"
        />
      </div>
      <div className="m-4 
        md:basis-3/4
        lg:w-3/4 lg:basis-3/4">
        <h2 className="h2">SOBRE MÍ 👋</h2>
        <p className="whitespace-pre-line leading-relaxed">
          Mi nombre es Arturo Morales, soy <a className="font-bold text-lg">Desarrollador Full Stack</a> 💻, tengo +5 años
          de experiencia en el desarrollo, mantenimiento de sitios y aplicaciones web.
          <br />
          Mi experiencia laboral también abarca temas de <a className='font-bold text-lg'>SEO</a>, analisis de sitios web, posicionamiento, análisis y auditorias web, keywords, meta tags, tracking, performance, accesibilidad;
          manejo de herramientas como Google Analytics y Tag Manager Google Search Console, Google trends, entre otros.
          <br />
          Como <a className="font-bold text-lg">Front End </a>tengo conocimeintos en <a className='font-bold text-lg'>HTML 5, Vanilla JS, CSS3, Bootstrap, Tailwind, Angular</a>
          <br />
          Como <a className='font-bold text-lg'>Back End </a>tengo conocimientos en <a className='font-bold text-lg'>PHP, Laravel, manejo de MySQL.</a>
          <br />
          Dentro de mi ruta de aprendizaje tomo cursos de Node JS, React y Vue.JS
        </p>
      </div>
    </article>
  );
}
