import personalDevs from './assets/programador.svg'
import { developmentDevs } from './libs/data';

export default function PersonalDevs() {

  function GetPersonalDevs(){
      return(
        developmentDevs.map( ({ id, title, description, link, image }) => {
            return (
              <div
                key={id}
                id="divDevs"
                className="m-2 relative group rounded-xl shadow-md first-letter:m-2 sm:flex-col sm:max-w-md md:max-w-lg lg:max-w-md"
              >
                <div className="rounded-xl xs:h-48 md:shirk-0 group-hover:blur-lg">
                  <img
                    className="w-full h-auto rounded-xl xs:h-full"
                    src={image}
                  />
                </div>
                <div
                  className="invisible absolute px-2 inset-0 group-hover:z-10 text-center group-hover:visible group-hover:flex-wrap grop-hover:items-center"
                  id="prodContent"
                >
                  <p className="h3 py-8 text-gray-800 xs:text-base">
                    {description}
                  </p>
                  <button className="btn-learning">
                    <a
                      className="flex justify-center"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mx-1 bi bi-github"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
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
            );
        })
      )
  }

  return (
    <article className="m-2">
      <img
        id="img-profile"
        src={personalDevs}
        className="static mx-auto h-48 rounded-full xs:w-full sm:w-1/4 md:w-1/2"
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

      <div className="flex xs:flex-col sm:flex-col md:flex-col">
        <p>
          Estos son desarrollos personales, códigos, proyectos de cursos, entre
          otros; desarrollados con el fin de poner en práctica lo aprendido a lo
          largo de mi experiencia laboral así como de los cursos, o por aprender
          sobre una tecnología.
        </p>

        <div
          id="personal-devs"
          className="all-projects sm:self-center md:flex md:flex-wrap md:justify-center lg:flex-wrap"
        >
            <GetPersonalDevs/>
        </div>
      </div>
    </article>
  );
}
