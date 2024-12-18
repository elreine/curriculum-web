// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    console.log('Currículum web cargado con éxito');

    // Reemplaza estos valores con los reales de tu cuenta de EmailJS
    const emailJSUserID = "l_oHh35SqwrZOfzMD"; // User ID de tu cuenta EmailJS
    const emailJSServiceID = "service_7xu1p7a";   // ID del servicio EmailJS configurado
    const emailJSTemplateID = "template_gmppc0g"; // ID de la plantilla de EmailJS

    // Inicializar EmailJS
    emailjs.init(emailJSUserID);

    // Manejar envío del formulario
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm(emailJSServiceID, emailJSTemplateID, this)
            .then(function () {
                alert("¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.");
                event.target.reset(); // Limpiar el formulario después de enviar
            })
            .catch(function (error) {
                alert("Error al enviar el mensaje: " + error.text);
                console.error("EmailJS error:", error);
            });
    });
});

// Animación al hacer scroll para mostrar el botón CTA
const ctaButton = document.querySelector(".cta-button");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        ctaButton.classList.add("visible");
    } else {
        ctaButton.classList.remove("visible");
    }
});

// Manejo del botón flotante para descargar el PDF
const pdfButton = document.querySelector(".cta-button");
pdfButton.addEventListener("click", (event) => {
    event.preventDefault();

    // Descarga directa del archivo PDF desde public
    window.open('curriculum_reiniel.pdf', '_blank');
});
