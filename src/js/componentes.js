/**
 * logica del proyecto
 */

window.addEventListener('load', () => {

    getUser();
    getDevs();
    getProd();
    
});

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

    await import('./services/peticiones').then( module => {

        const devs = module.productionDevs,
              productionDiv = document.getElementById('production-devs');
        
              
        devs.forEach( ({title, description, link}) => {

            const divs = `
            <div class="m-2 px-1 text-center sm:flex-col sm:max-w-md md:max-w-lg lg:max-w-md">
                <p class="h3 xs:text-base">${description}</p>
                <button class="btn-proyectos">
                    <a class="flex justify-center" href="${link}" target="_blank" rel="noopener noreferrer">
                        ${title}
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                    </a>
                </button>
            </div>`;	

            productionDiv.insertAdjacentHTML('beforeend', divs);

        });

    }).catch(err => console.log(err));

};

const getDevs = async () => {

    await import('./services/peticiones').then( module => {

        const devs = module.developmentDevs,
              personalDiv = document.getElementById('personal-devs');
        
              
        devs.forEach( ({title, description, link}) => {

            const divs = `
            <div class="m-2 px-1 text-center sm:max-w-sm md:flex md:max-w-sm md:justify-self-center">
                <p class="h3 xs:text-base md:w-2/3">${description}</p>
                <button class="btn-learning h-fit self-center text-center p-2 md:w-1/3">
                    <a href="${link}" target="_blank" rel="noopener noreferrer">${title}</a>
                </button>
            </div>`;

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