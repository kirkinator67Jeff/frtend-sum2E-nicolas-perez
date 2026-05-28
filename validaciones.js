// validaciones.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita envío por defecto

    let errores = [];

    // Nombre
    const nombre = document.getElementById("nombre").value.trim();
    if (nombre.length < 3) {
      errores.push("El nombre debe tener al menos 3 caracteres.");
    }

    // Email
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
      errores.push("Ingresa un correo electrónico válido.");
    }

    // Teléfono
    const telefono = document.getElementById("telefono").value.trim();
    const telRegex = /^[0-9]{8,}$/; // mínimo 8 dígitos
    if (!telRegex.test(telefono)) {
      errores.push("El teléfono debe contener al menos 8 dígitos numéricos.");
    }

    // Especialidad
    const especialidad = document.getElementById("especialidad").value;
    if (!especialidad) {
      errores.push("Selecciona una especialidad.");
    }

    // Fecha
    const fecha = document.getElementById("fecha").value;
    const hoy = new Date().toISOString().split("T")[0];
    if (!fecha || fecha < hoy) {
      errores.push("Selecciona una fecha válida (no anterior a hoy).");
    }

    // Mostrar errores o enviar
    if (errores.length > 0) {
      alert("Errores encontrados:\n\n" + errores.join("\n"));
    } else {
      alert("¡Solicitud enviada con éxito! Nos pondremos en contacto contigo.");
      form.reset();
    }
  });
});
