import profile from './assets/profile-picture.jpeg';

export default function Introduce() {
  return (
    <article className="flex flex-col justify-center items-center md:flex-row">
      <div className="">
        <img
          id="img-profile"
          src={profile}
          className="object-center rounded-lg shadow-2xl shadow-[#8c7851]/50 w-auto h-auto"
          alt="profile-img"
        />
      </div>
      <div className="m-4 
        md:basis-3/4
        lg:w-3/4 lg:basis-3/4">
        <h2 className="h2">SOBRE MÍ 👋</h2>
        <p className="whitespace-pre-line leading-relaxed lg:text-lg">
          Mi nombre es Arturo Morales Celis, nací en México y soy un apasionado <a className="font-bold text-lg">FullStack Developer</a> 💻, tengo +5 años
          de experiencia en el desarrollo, mantenimiento de sitios y aplicaciones web.
          <br />
          Tengo experiencia como <a className='font-bold text-lg'>SEO Specialist</a>, análisis de sitios web, posicionamiento y auditorias web, keywords, meta tags, tracking, performance, accesibilidad;
          manejo de herramientas como Google Analytics y Tag Manager Google Search Console, Google trends, entre otros.
          <br />
          Dentro de mi ruta de aprendizaje autodidacta tomo cursos de <a className='font-bold text-lg'>Node JS, React y Vue.JS</a> en Udemy.
        </p>
      </div>
    </article>
  );
}
