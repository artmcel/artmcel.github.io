import prodDevs from './assets/online-prod.svg'
import { productionDevs } from './libs/data'

export default function ProdDevs() {

  function GetProdDevs(){
    return(
      productionDevs.map( ({id, title, description, link, imagen}) => {
        return(
                <div key={id} id="divDevs" className="m-2 relative group rounded-xl shadow-md first-letter:m-2">
                    <div className="rounded-xl group-hover:blur-lg">
                        <img className="w-full h-auto rounded-xl" src={imagen} />
                    </div>
      
                    <div className="text-center" id="prodContent">
                        <p className="h3 py-8 text-gray-800">{description}</p>
                        <button className="btn-proyectos">
                            <a className="flex justify-center" href={link} target="_blank" rel="noopener noreferrer">
                                {title}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                    <path
                                        d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
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
      <img
        id="img-profile"
        src={prodDevs}
        className="fill-bg-sky-800 static mx-auto h-48 rounded-full xs:w-full sm:w-1/4 md:w-1/2"
        alt=""
      />
      <h2 className="h2">
        DESARROLLOS ACTUALES
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-2 fill-green-900"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
            clipRule="evenodd"
          />
        </svg>
      </h2>

      <div className="flex flex-col p-2">
        <p>
          Estos son algunos desarrollos web en mi trabajo actual, en la mayoría
          de estos se consume un WebService (WSDL), tanto para peticiones POST y
          GET a través del SoapClient de PHP. En estos desarrollos no he usado
          ningún Framework de PHP. Uso JS para las peticiones fetch,
          validaciones de los formularios, alertas, y mostrar la información al
          cliente. En estos desarrollos he usado mayormente Bootstrap y CSS
          puro; el diseño en algunas ocasiones fue hecho por mí, y en otras eran
          diseños ya establecidos.
        </p>
        <div
          id="production-devs"
          className="all-projects"
        >
          <GetProdDevs/>
        </div>
      </div>
    </article>
  );
}
