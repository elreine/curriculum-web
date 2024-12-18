// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    console.log('Currículum web cargado con éxito');
    // Inicializa EmailJS
    emailjs.init("YOUR_USER_ID");

    // Manejar envío del formulario
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm("service_7xu1p7a", "Gmail", this)
            .then(function () {
                alert("Mensaje enviado con éxito.");
                event.target.reset(); // Limpiar formulario después de enviar
            })
            .catch(function (error) {
                alert("Error al enviar el mensaje: " + error);
            });
    });
});

// Animación al hacer scroll
const ctaButton = document.querySelector(".cta-button");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        ctaButton.classList.add("visible");
    } else {
        ctaButton.classList.remove("visible");
    }
});

// Generar PDF estático usando jsPDF
document.querySelector(".cta-button").addEventListener("click", (event) => {
    event.preventDefault(); // Evita que el enlace recargue la página

    const doc = new jsPDF();

    // Título principal
    doc.setFontSize(22);
    doc.text('Currículum de Reiniel', 10, 20);

    // Sección: Sobre mí
    doc.setFontSize(16);
    doc.text('Sobre mí', 10, 40);
    doc.setFontSize(12);
    doc.text('Soy un desarrollador apasionado por la tecnología, las matemáticas y la impresión 3D...', 10, 50);

    // Sección: Habilidades Técnicas
    doc.setFontSize(16);
    doc.text('Habilidades Técnicas', 10, 80);
    doc.setFontSize(12);
    doc.text([
        '- Python, JavaScript, SQL',
        '- Node.js, Vue.js, Bootstrap',
        '- Git, Firebase',
        '- Windows Server y Máquinas Virtuales'
    ].join('\n'), 10, 90);

    // Sección: Trayectoria Profesional
    doc.setFontSize(16);
    doc.text('Trayectoria Profesional', 10, 140);
    doc.setFontSize(12);
    doc.text([
        '2023-2025: Universae - Ciclo Medio en Microinformática y Redes',
        '2024-2025: Higher Education Software, SL - Desarrollo de aplicaciones web personalizadas.',
        '2023: Prácticas en Overstand (Barcelona) - Algoritmos de inteligencia artificial.',
        '2023: Curso de Programación en Python (Deusto Formación).',
        '2018: Bachiller en IPU República de Panamá (homologado en España).'
    ].join('\n'), 10, 150);

    // Descargar el PDF
    doc.save('curriculum_reiniel.pdf');
});
