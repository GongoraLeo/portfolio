const button = document.querySelector('button'),
    menu = document.querySelector('#menu');

button.addEventListener('click', () => {
    button.classList.toggle('activo');
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    
    
})
