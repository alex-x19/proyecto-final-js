document.addEventListener('DOMContentLoaded', function() {
    const ingresarForm = document.getElementById('ingresarForm');
    const mensajeError = document.getElementById('mensaje');

    if (ingresarForm) {
        ingresarForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (verificarCredenciales(username, password)) {
                console.log('Inicio de sesión exitoso:', username);
                window.location.href = 'agenda.html'; 
            } else {
                mostrarMensajeError('Nombre de usuario o contraseña incorrectos.');
            }
        });
    }

    const registroForm = document.getElementById('registroForm');

    if (registroForm) {
        registroForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (usuarioValido(username)) {
                mostrarMensajeError('El nombre de usuario ya está en uso.');
            } else {
                const nuevoUsuario = {
                    username: username,
                    password: password
                };

                guardarUsuario(nuevoUsuario);
                console.log('Usuario registrado:', nuevoUsuario);
                window.location.href = 'agenda.html'; 
            }
        });
    }
});

function verificarCredenciales(username, password) {
    const usuariosRegistrados = obtenerUsuariosRegistrados();
    return usuariosRegistrados.some(u => u.username === username && u.password === password);
}

function usuarioValido(username) {
    const usuariosRegistrados = obtenerUsuariosRegistrados();
    return usuariosRegistrados.some(u => u.username === username);
}

function obtenerUsuariosRegistrados() {
    return JSON.parse(localStorage.getItem('usuarios')) || [];
}

function guardarUsuario(usuario) {
    let usuarios = obtenerUsuariosRegistrados();
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function mostrarMensajeError(mensaje) {
    const mensajeError = document.getElementById('mensaje');
    mensajeError.textContent = mensaje;
}





