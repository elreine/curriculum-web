// generate_pdf.js

// Función para descargar el PDF estático
document.querySelector('.download-pdf').addEventListener('click', (event) => {
    event.preventDefault();
    window.open('Moderno Profesional Currículum.pdf', '_blank'); // Abre el PDF en una nueva pestaña
});
