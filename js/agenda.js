document.addEventListener('DOMContentLoaded', function() {
    const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const horarios = ['09:00', '12:30', '17:30', '21:00'];

    const diasSemanaElement = document.getElementById('diasSemana');

    diasSemana.forEach(function(dia) {
        const diaElement = document.createElement('div');
        diaElement.classList.add('dia');
        diaElement.innerHTML = `<h2>${dia}</h2>`;
        horarios.forEach(function(horario) {
            const comidaElement = document.createElement('p');
            comidaElement.textContent = `${horario}: ${generarComidaAleatoria()}`;
            diaElement.appendChild(comidaElement);
        });
        diasSemanaElement.appendChild(diaElement);
    });

    document.getElementById('btnSalir').addEventListener('click', function() {
        window.location.href = 'inicio.html';
    });

    const stars = document.querySelectorAll('.star');
    let puntuacionGuardada = ''; 

    stars.forEach(function(star, index) {
        star.addEventListener('click', function() {
            const value = parseInt(star.getAttribute('data-value'));
            stars.forEach(s => {
                if (parseInt(s.getAttribute('data-value')) <= value) {
                    s.classList.add('selected');
                } else {
                    s.classList.remove('selected');
                }
            });
            puntuacionGuardada = value;
            mostrarNotificacion('¡Gracias por evaluarnos!');
        });
    });

    document.getElementById('btnEnviar').addEventListener('click', function() {
        const experiencia = document.getElementById('experienciaText').value;

        if (puntuacionGuardada && experiencia) {
            console.log('Puntuación:', puntuacionGuardada);
            console.log('Experiencia:', experiencia);
            limpiarFormulario();
            mostrarNotificacion('¡Gracias por tu mensaje!');
        } else {
            mostrarMensajeError('Por favor, selecciona una puntuación y escribe tu experiencia.');
        }
    });
});

function generarComidaAleatoria() {
    const comidas = ['Pollo', 'Arroz', 'Batata', 'Huevos'];
    return comidas[Math.floor(Math.random() * comidas.length)];
}

function limpiarFormulario() {
    document.getElementById('experienciaText').value = '';
}

function mostrarMensajeError(mensaje) {
}

function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.textContent = mensaje;
    notificacion.classList.add('notificacion');
    document.body.appendChild(notificacion);

    setTimeout(function() {
        notificacion.remove();
    }, 3000);
}
























