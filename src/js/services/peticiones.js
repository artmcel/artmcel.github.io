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
        link : 'http://',
    
    },
    {
        title : 'Día UNIMEX',
        description : 'Landing page developed whit Angular v13, CSS, Bootstrap, GIT',
        link : 'http://',
    
    },
    {
        title : 'Nuevo Ingreso',
        description : 'Landing page developed whit Angular v13, CSS, Bootstrap, GIT',
        link : 'http://',
    
    },
    {
        title : 'Proyección Profesional',
        description : 'Landing page developed whit Angular v13, CSS, Bootstrap, GIT',
        link : 'http://',
    
    },
    {
        title : 'Prospectación',
        description : 'Landing page developed whit Angular v13, CSS, Bootstrap, GIT',
        link : 'http://',
    
    }
];


const developmentDevs = [

    {
        title : 'Prospectación Update',
        description : 'This is Prospectacion project but with Webpack, I mean is the same project but bulding with other technology as Webpack the backend with PHP',
        link : 'http://',
    
    },
    {
        title : 'otro update',
        description : 'Form project with Webpack and a Backend in PHP, here I do not use WS so I created a Object to consuming with JS and I send the data with fetch',
        link : 'http://',
    
    },
    {
        title : 'My webpack v5',
        description : 'This is my webpack config for webpack v5 projects',
        link : 'http://',
    
    },
    {
        title : 'Bulding a SOAP',
        description : 'Bulding a soapCall and consuming with anonymous functions in PHP',
        link : 'http://',
    
    },
    {
        title : 'Backend whit Node',
        description : 'Simple backend with Node and Express and MongoDB',
        link : 'http://',
    
    },
    {
        title : 'Local chat',
        description : 'Local real time chat with Node and Socket.io',
        link : 'http://',
    
    },
    {
        title : 'Consuming API REST',
        description : 'A simple landign to get users from API REST',
        link : 'http://',
    
    }

];


export {
    getUser,
    productionDevs,
    developmentDevs,
}