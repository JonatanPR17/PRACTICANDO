
const codigosValidos = ["123456", "654321", "789012"]; // Agrega más códigos según sea necesario

document.getElementById("registroSalidaForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const codigo = document.getElementById("codigo").value;

    if (codigo.length !== 6) {
        
        
        const agregar = document.getElementById('agregar');
        
        if (agregar.firstChild) {
            agregar.removeChild(agregar.firstChild);
        }

        const p = document.createElement('p');
        p.textContent = "Solo acepta 6 caracteres";
        agregar.appendChild(p);
    } else {
        validarCampo();
    }



});

function validarCampo() { 
    if (codigosValidos.includes(codigo)) {
        // Si el código coincide, mostrar mensaje de despedida
        mostrarMensajeDespedida();
    } else {
        // Si el código no coincide, mostrar botón para intentar de nuevo
        mostrarBotonIntentar();
    }
}
function mostrarMensajeDespedida() {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.innerHTML = `<h2>¡Adiós, hasta luego!</h2>`;
}

function mostrarBotonIntentar() {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.innerHTML = `<button onclick="location.reload()">Intentar de Nuevo</button>`;
}