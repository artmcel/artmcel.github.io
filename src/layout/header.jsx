import { Icon } from "@iconify/react";

//import logo1 from '../assets/logo1.png';
export default function Header() {
  return (
    <header className="bg-[#fffffe]">
      <nav className="flex flex-col md:flex-row">
        <div className="m-1 text-center basis-1/2 md:text-2xl">
          <h1 className="font-sonsie">Arturo Morales Celis</h1>
        </div>
        <div className="flex justify-center m-1 text-center basis-1/2">
          <a href="https://github.com/artmcel" target="_blank" rel="noopener noreferrer">
            <Icon icon="logos:github-octocat" height="24" width="48" className="m-3"/>
          </a>

          <a href="mailto:artmcel@hotmail.com" target="_blank" rel="noopener noreferrer">
            <Icon icon="logos:linkedin-icon" height="24" width="48" className="m-3"/>
          </a>

          <a href="https://www.linkedin.com/in/arturo-mor-celis/" target="_blank" rel="noopener noreferrer">
            <Icon icon="logos:google-inbox" height="24" width="48" className="m-3"/>
          </a>
        </div>
      </nav>
    </header>
  );
}
