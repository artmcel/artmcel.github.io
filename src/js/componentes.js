/**
 * logica del proyecto
 */
window.addEventListener('load', () => {

    getUser();
    
});

const getUser = async () => {

    await import('./services/peticiones').then( module => {

        const user = module.getUser();

        user.then( ({avatar_url, ...all}) => {

            console.log(all);
    
            const img = document.getElementById('img-profile');

            img.src = avatar_url;
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