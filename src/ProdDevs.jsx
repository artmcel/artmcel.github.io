import prodDevs from './assets/online-prod.svg'
import { productionDevs } from './libs/data'

export default function ProdDevs() {

  function GetProdDevs(){
    return(
      productionDevs.map( ({id, title, description, link, imagen}) => {
        return(
          <div key={id} id="divDevs" className="bg-[#fffffe] m-2 relative group rounded-xl shadow-md first-letter:m-2">
            <div className="rounded-xl group-hover:blur-lg">
              <img className="w-full h-auto rounded-xl" src={imagen} />
            </div>
            <div key={id} className="text-center" id="prodContent">
              <p className="h3 py-8 text-gray-800">{description}</p>
              <button className="btn-proyectos">
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
        )
      })
    )
    }

  return (
    <article>
      <div className='m-2'>
        <img
          id="img-profile"
          src={prodDevs}
          className="fill-bg-sky-800 static mx-auto h-48 rounded-full xs:w-full sm:w-1/4 md:w-1/2"
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
