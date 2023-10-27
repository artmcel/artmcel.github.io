import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="w-full divide-y mt-5">

        <div className="flex p-3 xs:flex-col sm:flex-col md:flex-row text-[#f25042]">
            
            <div className="text-md font-semibold font-mono text-center md:w-1/2">
                Contactame
                <div className="flex justify-center">
                    <a href="https://github.com/artmcel" target="_blank" rel="noopener noreferrer">
                        <Icon icon="logos:github-octocat" height="24" width="48" className="m-3"/>
                    </a>
                    <a href="https://www.linkedin.com/in/arturo-morales-celis-a76761112" target="_blank" rel="noopener noreferrer">
                        <Icon icon="logos:linkedin-icon" height="24" width="48" className="m-3"/>
                    </a>
                    <a href="mailto:artmcel@hotmail.com" target="_blank" rel="noopener noreferrer">
                        <Icon icon="logos:google-inbox" height="24" width="48" className="m-3"/>
                    </a>
                </div>
            </div>

            <div className="text-lg font-semibold font-mono items-center flex justify-center md:w-1/2">
                <p>Creado con ❤️</p>
            </div>

        </div>

        <div className="mx-auto text-center text-xs font-mono divide-y-reverse p-3 text-[#020826]">
            <p>Este portafolio fue creado por Arturo Morales Celis con:</p>
            <div className="flex justify-center">
                <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
                    <Icon icon="logos:vitejs" height="24" width="48" className="m-3" />
                </a>
                <a href="https://es.react.dev/">
                    <Icon icon="logos:react" height="24" width="48" className="m-3" />
                </a>
                <a href="https://tailwindcss.com/">
                    <Icon icon="logos:tailwindcss-icon" height="24" width="48" className="m-3" />
                </a>
            </div>
        </div>

    </footer>
  )
}
