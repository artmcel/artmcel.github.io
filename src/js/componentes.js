/**
 * logica del proyecto
 */

const peticiones = import(/* webpackChunkName: "peticiones" */ './services/peticiones'),
      productionDiv = document.getElementById('production-devs'),
      personalDiv = document.getElementById('personal-devs');

window.addEventListener('load', () => {

    getUser();
    getDevs();
    getProd();
    
});

/**
 * funciton to get GitHub data
 */
 const getUser = async () => {
 
     await import('./services/peticiones').then( module => {
 
         const user = module.getUser();
 
         user.then( ({avatar_url, ...all}) => {
 
             //console.log(all);
     
             const img = document.getElementById('img-profile');
             img.src = avatar_url;
         });
     }).catch(err => console.log(err));
 
 };


const getProd = async () => {

    await peticiones.then( module => {

        const devs = module.productionDevs;
              
        devs.forEach( ({title, description, link, imagen}) => {

            const divs = `
            <div id="divDevs" class="m-2 relative group rounded-xl shadow-md first-letter:m-2 sm:flex-col sm:max-w-md md:max-w-lg lg:max-w-md">
                <div class="rounded-xl xs:h-1/2 md:shirk-0">
                    <img class="w-full h-auto rounded-xl xs:h-full" src="${imagen}">
                </div>

                <div class="invisible absolute px-2 inset-0 group-hover:z-10 text-center group-hover:visible group-hover:flex-wrap grop-hover:items-center" id="prodContent">
                    <button class="btn-proyectos">
                        <a class="flex justify-center" rel="noopener noreferrer">${title}</a>
                    </button>
                    <p class="h3 py-8 text-gray-800 xs:text-base">${description}</p>
                </div>
            </div>
            `;	

            productionDiv.insertAdjacentHTML('beforeend', divs);

        });

    }).catch(err => console.log(err));

};

const getDevs = async () => {

    await peticiones.then( module => {

        const devs = module.developmentDevs;
              
        
              
        devs.forEach( ({title, description, link, imagen}) => {

            const divs = `
            <div id="divDevs" class="m-2 relative group rounded-xl shadow-md first-letter:m-2 sm:flex-col sm:max-w-md md:max-w-lg lg:max-w-md">
                <div class="rounded-xl xs:h-1/2 md:shirk-0">
                    <img class="w-full h-auto rounded-xl xs:h-full" src="${imagen}">
                </div>

                <div class="flex-wrap inset-0 text-center" id="prodContent">
                    <p class="h3 text-gray-800 xs:text-base">${description}</p>
                    <button class="btn-learning">
                        <a class="flex justify-center" href="${link}" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-1" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                            ${title}
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                <path
                                    d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                        </a>
                    </button>
                </div>
            </div>
            `;

            personalDiv.insertAdjacentHTML('beforeend', divs);

        });

    }).catch(err => console.log(err));

};

const art = document.querySelectorAll('article');

const obs = (entradas, observador) => {
    /*
    console.log('observado');
    console.log(observador);
    console.log(entradas);
    */
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            //console.log('en pantalla');
            //entrada.target.style.display ='block';
            entrada.target.classList.add("op");
            //observador.disconnect();
            observador.unobserve(entrada.target);
        }
    });
}

const observador = new IntersectionObserver(obs, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.1
});

art.forEach(article => {
    observador.observe(article);

});