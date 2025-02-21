// Función para reservar un tour
function reservarTour(nombreTour) {
    alert(`Has reservado el tour: ${nombreTour}`);
}

// Manejo del formulario de reserva
document.getElementById('reservaForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const tour = document.getElementById('tour').value;
    alert(`Reserva confirmada para ${nombre} (${email}) en el tour: ${tour}`);
});

// Manejo del formulario de contacto
document.getElementById('contactoForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    alert(`Gracias ${nombre}, tu mensaje ha sido enviado.`);
});