
const usuarios = [
    {
        nombre: "Juan",
        apellidoPaterno: "Pérez",
        apellidoMaterno: "Gómez",
        codigo: "123456",
        sucursal: "Sucursal 1"
    },
    {
        nombre: "María",
        apellidoPaterno: "López",
        apellidoMaterno: "Hernández",
        codigo: "654321",
        sucursal: "Sucursal 2"
    },
    // Agrega más usuarios según sea necesario
];

document.getElementById("registroForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellidoPaterno = document.getElementById("apellidoPaterno").value;
    const apellidoMaterno = document.getElementById("apellidoMaterno").value;
    const codigo = document.getElementById("codigo").value;
    const sucursal = document.getElementById("sucursal").value;

    let usuarioValido = false;

    for (const usuario of usuarios) {
        if (nombre === usuario.nombre &&
            apellidoPaterno === usuario.apellidoPaterno &&
            apellidoMaterno === usuario.apellidoMaterno &&
            codigo === usuario.codigo &&
            sucursal === usuario.sucursal) {
            usuarioValido = true;
            mostrarMensajeBienvenida(nombre);
            break;
        }
    }

    if (!usuarioValido) {
        mostrarBotonIntentar();
    }
});

function mostrarMensajeBienvenida(nombre) {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.innerHTML = `<h2>Bienvenido, ${nombre}!</h2>`;
    // Aquí podrías agregar más información como la foto del usuario si fuera necesario
}

function mostrarBotonIntentar() {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.innerHTML = `<button onclick="location.reload()">Intentar de Nuevo</button>`;
}
