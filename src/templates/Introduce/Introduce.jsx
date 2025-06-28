import profile from '../../assets/profile-picture.jpeg';

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
          <strong>Mid Full-Stack Web Developer</strong> con más de 5 años de experiencia construyendo, manteniendo y optimizando aplicaciones web, tanto en Frontend como Backend. <br />
          🚀 He participado en proyectos integrales, colaborando también en UX/UI y alineando soluciones técnicas con áreas como Marketing, Infraestructura y SEO, lo que me permite aportar valor en todo el ciclo de vida digital de un producto. <br />
          💻 Como Backend Developer, he desarrollado APIs REST, funciones Lambda, plugins para WordPress, módulos en Drupal y microservicios escalables en Laravel y Laminas API Tools. También he colaborado en arquitecturas híbridas con React, VueJS, Shopify y GraphQL, así como en el despliegue y versionado con Git y Docker. Mi experiencia incluye la automatización de procesos, integración de servicios externos, y una fuerte orientación a performance y mantenibilidad del código. <br />
          📈 Como Especialista en SEO, he liderado auditorías técnicas, análisis de keywords, optimización de performance, accesibilidad, implementación de tracking codes y configuraciones avanzadas de herramientas como Google Analytics 4, Tag Manager, Search Console y Trends. <br />
        </p>
      </div>
    </article>
  );
}
