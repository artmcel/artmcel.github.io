//import logo1 from '../assets/logo1.png';
export default function Header() {
  return (
    <header className="bg-[#fffffe]">
      <nav className="flex flex-col md:flex-row">
        <div className="m-1 text-center basis-1/2 md:text-2xl">
          <h1 className="font-sonsie">Arturo Morales</h1>
        </div>
        <div className="m-1 text-center basis-1/2">
          <a href="https://github.com/artmcel" target="_blank" rel="noopener noreferrer">
            <box-icon type='logo' name='github'></box-icon>
          </a>

          <a href="mailto:artmcel@hotmail.com" target="_blank" rel="noopener noreferrer">
            <box-icon type='solid' name='envelope'></box-icon>
          </a>

          <a href="https://www.linkedin.com/in/arturo-mor-celis/" target="_blank" rel="noopener noreferrer">
            <box-icon type='logo' name='linkedin-square'></box-icon>
          </a>
        </div>
      </nav>
    </header>
  );
}
