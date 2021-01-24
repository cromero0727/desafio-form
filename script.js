let mensajealerta = document.getElementsByClassName("mensaje_alerta");


function validar() {
    var nombre, apellido, correo, usuario, pass, telefono, expresion;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    pass = document.getElementById("pass").value;
    telefono = document.getElementById("telefono").value;

    alert('Bienvenido(a) ' + nombre + " " + apellidos + " " + 'Tu nombre de usuario será ' + usuario + " " + 'y tu contraseña será ' + pass);

    if (nombre === "" || apellidos === "" || correo === "" || usuario === "" || pass === "" || telefono === "") {
        alert("Todos los campos son obligatorios");
        return false;
    } else if (nombre.length > 30) {
        mensaje_alerta[0].textContent = "";
        alert("El nombre debe contener menos de 30 caracteres");
        return false;
    } else if (apellidos.length > 80) {
        alert("los apellidos deben contener menos de 80 caracteres");
        return false;
    } else if (correo.length > 100) {
        alert("El correo debe contener menos de 100 caracteres");
        return false;
    } else if (usuario.length > 100) {
        alert("El nombre de usuario debe contener menos de 100 caracteres");
        return false;
    } else if (usuario.length > 20) {
        alert("La contraseña debe contener menos de 20 caracteres");
        return false;
    } else if (telefono.length > 15) {
        alert("El telefono debe contener menos de 15 caracteres");
        return false;
    } else if (isNaN(telefono)) {
        alert("El telefono ingresado debe ser solo numeros");
        return false;
    }

}