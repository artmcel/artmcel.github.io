import profile from '../assets/profile.svg';
import skills from '../assets/skills.svg'
import certificado from '../assets/certificado.svg'
import ProdDevs from '../ProdDevs';
import PersonalDevs from '../PersonalDevs';

export default function Main() {
  return (
    <main className="container mx-auto px-4 py-4">
        {/*default tailwind responsive xs: sm: md: lg: xl: 2xl:*/}
        <section className="flex flex-col ">

            <article className="m-2 rounded-full sm:flex-col md:flex-row">

                <div className="photo transition-all scale-100 md:w-1/3 md:float-left md:translate-x-6 ">
                    <img id="img-profile" src={ profile } className="static mx-auto h-48 rounded-full xs:w-full sm:w-1/4 md:w-1/2" alt=""/>
                </div>
                <div className="introduce xs:mt-2 sm:mt-2 md:w-2/3 md:float-right">
                    <h2 className="h2">
                        SOBRE MÍ 😁 </h2>
                    <p className="text-base whitespace-pre-line">
                    👋 Mi nombre es Arturo Morales y soy <strong>Desarrollador Full-Stack</strong> 💻, cuento con más de 5 años de experiencia, tengo conocimientos sólidos en HTML5, CSS3, PHP, JavaScript, entre otros.
                        <br/>
                        Además tengo otros conocimientos en el Área de TI, como son: Administrador de redes y soporte técnico.
                    </p>
                    
                </div>
                <div className="md:clear-both"></div>
                
            </article>

            <article className="flex m-2 xs:flex-col sm:flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img id="img-profile" src={ skills } className="static mx-auto h-48 rounded-full xs:w-full sm:w-1/4 md:w-1/2" alt=""/>
                    <h2 className="h2">MIS HABILIDADES 🔥</h2>
                    <p>
                        Como lo mencione anteriormente tengo conocimientos sólidos en HTML5, PHP, JavaScript, CSS y también en SEO, aquí dejo una pequeña lista:
                    </p>

                    <div className="mt-2 mb-2 sm:grid sm:grid-cols-2">
                        <div>
                            <ul>
                                <li className="list-outside text-gray-700 font-medium hover:text-red-500">Angular</li>
                                <li className="list-outside text-gray-700 font-medium hover:text-red-500">CSS
                                    <ul className="list-disc list-inside max-w-max">
                                        <li className="text-gray-700 font-medium hover:text-red-500">Bootstrap</li>
                                        <li className="text-gray-700 font-medium hover:text-red-500">Tailwind</li>
                                        <li className="text-gray-700 font-medium hover:text-red-500">Bulma</li>
                                    </ul>
                                </li>
                                <li className="list-outside text-gray-700 font-medium hover:text-red-500">GIT</li>
                                <li className="list-outside text-gray-700 font-medium hover:text-red-500">Webpack</li>
                                <li className="list-outside text-gray-700 font-medium hover:text-red-500">JavaScript ES 6</li>
                                <li className="list-outside text-gray-700 font-medium hover:text-red-500">jQuery</li>
                            </ul>
                        </div>
    
                        <div>
                            <ul>
                                <li className="list-outside text-gray-700 font-medium hover:text-red-500">PHP</li>
                                <li className="list-outside text-gray-700 font-medium hover:text-red-500">SEO
                                    <ul className="list-disc list-inside max-w-max">
                                        <li className="text-gray-700 font-medium hover:text-red-500">Google Search Console</li>
                                        <li className="text-gray-700 font-medium hover:text-red-500">Datos estructurados</li>
                                        <li className="text-gray-700 font-medium hover:text-red-500">Posicionamiento Web</li>
                                        <li className="text-gray-700 font-medium hover:text-red-500">Web Performance</li>
    
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>


                </div>
                <div className="md:w-1/2 xs:mt-2 sm:mt-2">
                    <img id="img-profile" src={certificado} className="static mx-auto h-48 rounded-full xs:w-full sm:w-1/4 md:w-1/2" alt=""/>
                    <h2 className="h2">CURSOS 🧑‍🎓</h2>
                    <p>
                        Siempre trato de aprender o reforzar sobre las nuevas tecnologías de desarrollo y de TI, es por eso que he tomado algunos cursos.
                    </p>
                    <div className="self-center">
                        <ul className="list-disc list-inside max-w-max">
                            <li className="text-gray-700 font-medium hover:text-yellow-500">Angular (Legacy)</li>
                            <li className="text-gray-700 font-medium hover:text-yellow-500">Git + GitHub</li>
                            <li className="text-gray-700 font-medium hover:text-yellow-500">Modern JavaScript</li>
                            <li className="text-gray-700 font-medium hover:text-yellow-500"> SEO y Posicionamiento Web</li>
                            <li className="text-gray-700 font-medium hover:text-yellow-500">Master en JS: JS, jQuery, Angular, Node</li>
                        </ul>
                    </div>

                </div>

            </article>

            <ProdDevs/>

            <PersonalDevs/>

        </section>
    </main>
  )
}
