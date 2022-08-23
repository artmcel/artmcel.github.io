/**
 * archivo para peticiones fetch...
 */
const getUser = async () => {

    const response = await fetch(`https://api.github.com/users/artmcel`);
    return  await response.json();
};

const productionDevs = [
    
    {
        title : 'Aula UNIMEX',
        description : 'Landing page developed whit Angular v13, CSS, Bootstrap, GIT',
        link : 'https://aula.unimex.edu.mx/',
        imagen : './assets/aula.png'
    
    },
    {
        title : 'Día UNIMEX',
        description : 'Registration form, with PHP, JS, CSS, Bootstrap, GIT',
        link : 'https://unimex.edu.mx/dia-unimex/',
        imagen: './assets/dia-unimex.png'
    
    },
    {
        title : 'Nuevo Ingreso',
        description : 'Web application with login PHP, JS, jQuery, CSS, Bootstrap, GIT',
        link : 'https:/nuevoingreso.unimex.edu.mx/',
        imagen: './assets/nuevo-ingreso.png'
    
    },
    {
        title : 'Proyección Profesional',
        description : 'Registration form, with PHP, JS, CSS, Bootstrap, GIT',
        link : 'https://unimex.edu.mx/proyeccion-profesional/',
        imagen: './assets/proyeccion.png'
    
    },
    {
        title : 'Prospectación',
        description : 'Registration form, with PHP, JS, CSS, Bootstrap, GIT',
        link : 'https://unimexver.edu.mx/prospectacion/',
        imagen: './assets/prospectacion.png'
    
    },
    {
        title : 'Licenciaturas UNIMEX',
        description : 'A group of Registration forms for google campaings, are about 8 forms; with PHP, JS, CSS, Bootstrap, GIT, Webpack',
        link : 'https://landings.unimex.edu.mx/licenciatura-izcalli/',
        imagen: './assets/landings.png'
    
    }
];


const developmentDevs = [

    {
        title : 'Prospectación Update',
        description : 'This is Prospectacion project but with Webpack and backend with PHP',
        link : 'https://github.com/artmcel/prospectacion',
        imagen : './assets/prospectacion.png'
    
    },
    {
        title : 'Proyeccion Update',
        description : 'Proyección project with Webpack, PHP, Bootstrap',
        link : 'https://github.com/artmcel/proyeccion',
        imagen : './assets/proyeccion.png'
    
    },
    {
        title : 'Webpack v5',
        description : 'This is my webpack config',
        link : 'https://github.com/artmcel/webpack-inicio',
        imagen : './assets/code.svg'
    
    },
    {
        title : 'Bulding a SOAP',
        description : 'Bulding a soapCall and consuming with anonymous functions in PHP 7.X',
        link : 'https://github.com/artmcel/soap',
        imagen : './assets/code.svg'
    
    },
    {
        title : 'Backend whit Node',
        description : 'Simple backend with Node and Express and MongoDB',
        link : 'https://github.com/artmcel/prueba2_backend',
        imagen : './assets/code.svg'
    
    },
    {
        title : 'Local realtime chat',
        description : 'Local real time chat with Node and Socket.io',
        link : 'https://github.com/artmcel/Local-chat',
        imagen : './assets/code.svg'
    
    },
    {
        title : 'CRUD with Angular',
        description : 'Consuming API RESt with Angular and ReqRes(Fake API), Tailwind',
        link : 'https://artmcel.github.io/NGUserList/',
        imagen : './assets/lista-usuarios.png'
    
    },
    {
        title : 'CRUD with PHP SQLServer',
        description : 'A CRUD with PHP, SQLServer, Webpack, Bootstrap in a local DB',
        link : 'https://github.com/artmcel/agrega-alumnos',
        imagen : './assets/code.svg'
    
    },
    {
        title : 'Registration Form',
        description : 'A form to register prospects; PHP7, WebPack, Bootstrap',
        link : 'https://github.com/artmcel/registro-prosp',
        imagen : './assets/registro-prosp.png'
    
    },
    {
        title : 'Graduaciones',
        description : 'WebAplication to create tikets with Angular, PHP, MySQL',
        link : 'https://github.com/artmcel/graduaciones',
        imagen : './assets/code.svg'
    
    }

    

];


export {
    getUser,
    productionDevs,
    developmentDevs,
}