document.addEventListener('DOMContentLoaded', function () {
    const posterLink = document.querySelector('a[href="poster-design.html"]'); // Seleccionamos el enlace a la página de Poster Design
    
    // Añadimos un evento click al enlace
    posterLink.addEventListener('click', function (event) {
        event.preventDefault(); // Evitamos el comportamiento predeterminado del enlace
        
        // Añadimos la clase de animación al body
        document.body.classList.add('animate-transition');
        
        // Esperamos a que termine la animación (en este caso, 1 segundo) antes de redirigir
        setTimeout(function() {
            window.location.href = 'poster-design.html'; // Redirigimos a la página de Poster Design
        }, 1000); // Esperamos 1 segundo (duración de la animación)
    });
});
