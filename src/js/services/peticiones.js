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
        description : 'PWA desarrollada con Angular v13, CSS, Bootstrap, GIT',
        link : 'https://aula.unimex.edu.mx/',
        imagen : 'https://artmcel.github.io/assets/aula.png'
    
    },
    {
        title : 'Día UNIMEX',
        description : 'Formulario de registro; desarrollado con PHP, JS, CSS, Bootstrap, GIT',
        link : 'https://unimex.edu.mx/dia-unimex/',
        imagen: 'https://artmcel.github.io/assets/dia-unimex.png'
    
    },
    {
        title : 'Nuevo Ingreso',
        description : 'Aplicación Web para mostrar videos (YT) de inducción; desarrollado con PHP, JS, jQuery, CSS, Bootstrap, GIT',
        link : 'https:/nuevoingreso.unimex.edu.mx/',
        imagen: 'https://artmcel.github.io/assets/nuevo-ingreso.png'
    
    },
    {
        title : 'Proyección Profesional',
        description : 'Formulario de registro para prospectos de Posgrado; desarrollado con PHP, JS, CSS, Bootstrap, GIT',
        link : 'https://unimex.edu.mx/proyeccion-profesional/',
        imagen: 'https://artmcel.github.io/assets/proyeccion.png'
    
    },
    {
        title : 'Prospectación',
        description : 'Formulalrio para registro de prospectos; desarrollado con PHP, JS, CSS, Bootstrap, GIT',
        link : 'https://unimexver.edu.mx/prospectacion/',
        imagen: 'https://artmcel.github.io/assets/prospectacion.png'
    
    },
    {
        title : 'Licenciaturas UNIMEX',
        description : 'Grupo de 8 landings de registro para campañas de Google; desarrollado con PHP, JS, CSS, Bootstrap, GIT, Webpack',
        link : 'https://landings.unimex.edu.mx/licenciatura-izcalli/',
        imagen: 'https://artmcel.github.io/assets/landings.png'
    
    }
];


const developmentDevs = [

    {
        title : 'Prospectación Update',
        description : 'Proyecto de prospectación; update con Webpack, PHP y Bootstrap',
        link : 'https://github.com/artmcel/prospectacion',
        imagen : 'https://artmcel.github.io/assets/prospectacion.png'
    
    },
    {
        title : 'Proyeccion Update',
        description : 'Proyecto de proyección; update con Webpack, PHP, Bootstrap',
        link : 'https://github.com/artmcel/proyeccion',
        imagen : 'https://artmcel.github.io/assets/proyeccion.png'
    
    },
    {
        title : 'Webpack v5',
        description : 'Configuración para crear aplicaciones web con Webpack v5',
        link : 'https://github.com/artmcel/webpack-inicio',
        imagen : 'https://artmcel.github.io/assets/code.svg'
    
    },
    {
        title : 'Construyendo un SOAP Client',
        description : 'Consumiendo un WS con SoapClient en PHP 7',
        link : 'https://github.com/artmcel/soap',
        imagen : 'https://artmcel.github.io/assets/code.svg'
    
    },
    {
        title : 'Backend en Node',
        description : 'Un backend con Node and Express and MongoDB',
        link : 'https://github.com/artmcel/prueba2_backend',
        imagen : 'https://artmcel.github.io/assets/code.svg'
    
    },
    {
        title : 'Chat en tiempo real',
        description : 'Proyecto de un chat en tiempo real con Node and Socket.io y Bulba.io',
        link : 'https://github.com/artmcel/Local-chat',
        imagen : 'https://artmcel.github.io/assets/code.svg'
    
    },
    {
        title : 'CRUD con Angular',
        description : 'CRUD con Angular, API REST ReqRes y Tailwind',
        link : 'https://artmcel.github.io/NGUserList/',
        imagen : 'https://artmcel.github.io/assets/lista-usuarios.png'
    
    },
    {
        title : 'CRUD con PHP y SQL Server',
        description : 'CRUD con PHP 7, SQLServer, Webpack, Bootstrap con una DB Local (examen de desarrollo web)',
        link : 'https://github.com/artmcel/agrega-alumnos',
        imagen : 'https://artmcel.github.io/assets/code.svg'
    
    },
    {
        title : 'Formulario de registro página web',
        description : 'Formulario de registro de prospectos; desarrollado con PHP7, WebPack, Bootstrap',
        link : 'https://github.com/artmcel/registro-prosp',
        imagen : 'https://artmcel.github.io/assets/registro-prosp.png'
    
    },
    {
        title : 'Graduaciones',
        description : 'Aplicación web para creación de boletos de graduación y registro de entrada; desarrollado con Angular, PHP, MySQL',
        link : 'https://github.com/artmcel/graduaciones',
        imagen : 'https://artmcel.github.io/assets/code.svg'
    
    },
    {
        title : 'Laravel + MySQL',
        description : 'Primeros pasos con Laravel; conectando Laravel + MySQL con Eloquent ORM y creando API REST ',
        link : 'https://github.com/artmcel/first-laravel-api',
        imagen : 'https://artmcel.github.io/assets/code.svg'
    },
    {
        title : 'SOAP to Laravel API',
        description : 'Convirtiendo SOAP service a una API REST con Laravel',
        link : 'https://github.com/artmcel/soap-laravel',
        imagen : 'https://artmcel.github.io/assets/code.svg'
    }

    

];


export {
    getUser,
    productionDevs,
    developmentDevs,
}