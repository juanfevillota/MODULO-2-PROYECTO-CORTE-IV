document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();  

        // Obtener el elemento al que se quiere desplazar
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Desplazar la página suavemente a la sección objetivo
        window.scrollTo({
            top: targetSection.offsetTop - 50,  // Ajuste para el menú fijo
            behavior: 'smooth'
        });
    });
});
