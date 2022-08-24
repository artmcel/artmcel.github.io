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
        description : 'Landing page desarrollada con Angular v13, CSS, Bootstrap, GIT',
        link : 'https://aula.unimex.edu.mx/',
        imagen : './assets/aula.png'
    
    },
    {
        title : 'Día UNIMEX',
        description : 'Formulario de registro desarrollado con PHP, JS, CSS, Bootstrap, GIT',
        link : 'https://unimex.edu.mx/dia-unimex/',
        imagen: './assets/dia-unimex.png'
    
    },
    {
        title : 'Nuevo Ingreso',
        description : 'Aplicación Web para mostrar videos de inducción, desarrollado con PHP, JS, jQuery, CSS, Bootstrap, GIT',
        link : 'https:/nuevoingreso.unimex.edu.mx/',
        imagen: './assets/nuevo-ingreso.png'
    
    },
    {
        title : 'Proyección Profesional',
        description : 'Formulario de registro para prospectos de Posgrado desarrollado con PHP, JS, CSS, Bootstrap, GIT',
        link : 'https://unimex.edu.mx/proyeccion-profesional/',
        imagen: './assets/proyeccion.png'
    
    },
    {
        title : 'Prospectación',
        description : 'Formulalrio para registro de prospectos, desarrollado con PHP, JS, CSS, Bootstrap, GIT',
        link : 'https://unimexver.edu.mx/prospectacion/',
        imagen: './assets/prospectacion.png'
    
    },
    {
        title : 'Licenciaturas UNIMEX',
        description : 'Grupo de 8 formularios de registro conectadas con campañas de Google, desarrollados PHP, JS, CSS, Bootstrap, GIT, Webpack',
        link : 'https://landings.unimex.edu.mx/licenciatura-izcalli/',
        imagen: './assets/landings.png'
    
    }
];


const developmentDevs = [

    {
        title : 'Prospectación Update',
        description : 'Proyecto de prospectación pero ahora con Webpack, PHP y Bootstrap',
        link : 'https://github.com/artmcel/prospectacion',
        imagen : './assets/prospectacion.png'
    
    },
    {
        title : 'Proyeccion Update',
        description : 'Proyecto de proyección pero ahora con Webpack, PHP, Bootstrap',
        link : 'https://github.com/artmcel/proyeccion',
        imagen : './assets/proyeccion.png'
    
    },
    {
        title : 'Webpack v5',
        description : 'Mi configuración para crear aplicaciones web con WebPack v5',
        link : 'https://github.com/artmcel/webpack-inicio',
        imagen : './assets/code.svg'
    
    },
    {
        title : 'Construyendo un SOAP Client',
        description : 'Consumiendo un WS con SoapClient en PHP 7.X',
        link : 'https://github.com/artmcel/soap',
        imagen : './assets/code.svg'
    
    },
    {
        title : 'Backend en Node',
        description : 'Un backend con Node and Express and MongoDB',
        link : 'https://github.com/artmcel/prueba2_backend',
        imagen : './assets/code.svg'
    
    },
    {
        title : 'Chat en tiempo real',
        description : 'Proyecto de un chat en tiempo real con Node and Socket.io y Bulba.io',
        link : 'https://github.com/artmcel/Local-chat',
        imagen : './assets/code.svg'
    
    },
    {
        title : 'CRUD con Angular',
        description : 'Creando un CRUD con Angular, API REST ReqRes y Tailwind',
        link : 'https://artmcel.github.io/NGUserList/',
        imagen : './assets/lista-usuarios.png'
    
    },
    {
        title : 'CRUD con PHP y SQL Server',
        description : 'CRUD con PHP, SQLServer, Webpack, Bootstrap con una DB Local (examen de desarrollo web)',
        link : 'https://github.com/artmcel/agrega-alumnos',
        imagen : './assets/code.svg'
    
    },
    {
        title : 'Formulario de registro página web',
        description : 'Formulario de registro de prospectos, desarrollado con PHP7, WebPack, Bootstrap',
        link : 'https://github.com/artmcel/registro-prosp',
        imagen : './assets/registro-prosp.png'
    
    },
    {
        title : 'Graduaciones',
        description : 'Aplicación web para creación de boletos de graduación y registro de entrada, desarrollada con Angular, PHP, MySQL',
        link : 'https://github.com/artmcel/graduaciones',
        imagen : './assets/code.svg'
    
    }

    

];


export {
    getUser,
    productionDevs,
    developmentDevs,
}