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
    
    },
    {
        title : 'Nuevo Ingreso',
        description : 'Web application with PHP backend, JS, jQuery, CSS, Bootstrap, GIT',
        link : 'https:/nuevoingreso.unimex.edu.mx/',
    
    },
    {
        title : 'Proyección Profesional',
        description : 'Registration form, with PHP, JS, CSS, Bootstrap, GIT',
        link : 'https://unimex.edu.mx/proyeccion-profesional/',
    
    },
    {
        title : 'Prospectación',
        description : 'Registration form, with PHP, JS, CSS, Bootstrap, GIT',
        link : 'https://unimexver.edu.mx/prospectacion/',
    
    }
];


const developmentDevs = [

    {
        title : 'Prospectación Update',
        description : 'This is Prospectacion project but with Webpack, I mean is the same project but bulding with other technology as Webpack the backend with PHP',
        link : 'https://prueba.unimex.edu.mx/',
    
    },
    {
        title : 'otro update',
        description : 'Form project with Webpack and a Backend in PHP, here I do not use WS so I created a Object to consuming with JS and I send the data with fetch',
        link : '',
    
    },
    {
        title : 'My webpack v5',
        description : 'This is my webpack config for webpack v5 projects',
        link : 'https://github.com/artmcel/webpack-inicio',
    
    },
    {
        title : 'Bulding a SOAP',
        description : 'Bulding a soapCall and consuming with anonymous functions in PHP',
        link : '',
    
    },
    {
        title : 'Backend whit Node',
        description : 'Simple backend with Node and Express and MongoDB',
        link : 'https://github.com/artmcel/prueba2_backend',
    
    },
    {
        title : 'Local realtime chat',
        description : 'Local real time chat with Node and Socket.io',
        link : 'https://github.com/artmcel/Local-chat',
    
    },
    {
        title : 'Consuming API REST',
        description : 'A simple landign to get users from API REST',
        link : '',
    
    },
    {
        title : 'Webpack form',
        description : 'Web form with webpack and PHP backend, CSS, Bootstrap, GIT',
        link : '',
    
    }

];


export {
    getUser,
    productionDevs,
    developmentDevs,
}