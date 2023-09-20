import profile from './assets/profile-picture.jpeg';


export default function Introduce() {
  return (
    <article className="flex flex-col justify-center items-center md:flex-row">
      <div className="m-2 sm:basis-1/4 drop-shadow-2xl">
        <img
          id="img-profile"
          src={profile}
          className="object-center max-h-52 rounded-lg"
          alt="profile-img"
        />
      </div>
      <div className="m-2 sm:basis-3/4">
        <h2 className="h2">SOBRE MÍ 😁 </h2>
        <p className="leading-relaxed">
          👋 Mi nombre es Arturo Morales, soy <a className="font-bold text-lg">Desarrollador Full Stack</a> 💻, tengo +5 años
          de experiencia en el desarrollo, mantenimiento de sitios y aplicaciones web; tengo conocimientos sólidos en <a className='font-bold text-lg'>HTML5, CSS3, PHP,
          Vanilla JS</a>, principalmente.
          <br />
          Mi experiencia laboral también abarca temas de <a className='font-bold text-lg'>SEO</a>, analisis de sitios web, posicionamiento, análisis y auditorias web, keywords, meta tags, tracking, performance, accesibilidad;
          manejo de herramientas como Google Analytics y Tag Manager Google Search Console, Google trends, entre otros.
        </p>
      </div>
    </article>
  );
}
