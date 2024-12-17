// scripts.js

// Mostrar un mensaje en la consola al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    console.log('Currículum web cargado con éxito');
});

// Función: Validar formulario antes de enviar
function validateAndSendForm(event) {
    event.preventDefault();

    // Obtener valores de los campos del formulario
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validar campos obligatorios
    if (!name || !email || !message) {
        alert('Por favor, completa todos los campos antes de enviar.');
        return;
    }

    // Validar formato de correo electrónico
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Configuración para enviar correo
    const recipient = "reinelitosecundaria@gmail.com";
    const subject = `Nuevo mensaje de ${name}`;
    const body = `Mensaje recibido:\n\n${message}\n\nDe: ${name} (${email})`;

    // Abrir cliente de correo predeterminado
    window.open(`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);

    alert('¡Gracias por tu mensaje, ' + name + '! Me pondré en contacto contigo pronto.');
    event.target.reset(); // Limpiar el formulario después de enviar
}

// Asignar evento al formulario
document.querySelector('form').addEventListener('submit', validateAndSendForm);

// Función: Animación al hacer scroll en el botón CTA
const ctaButton = document.querySelector('.cta-button');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        ctaButton.classList.add('visible');
    } else {
        ctaButton.classList.remove('visible');
    }
});

// Configuración y renderización de un gráfico con Chart.js
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('skillsChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Python', 'JavaScript', 'SQL', 'Node.js', 'Firebase'],
                datasets: [{
                    label: 'Nivel de Dominio (%)',
                    data: [85, 80, 75, 70, 60],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});

// Generar PDF dinámico usando jsPDF
document.querySelector('.download-pdf').addEventListener('click', (event) => {
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


// Asignar evento al botón de descarga del PDF
document.querySelector('.download-pdf').addEventListener('click', generatePDF);
