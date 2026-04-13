setTimeout(function() {

    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;

        const respuesta = document.getElementById("respuesta");

        if (nombre === "" || email === "" || mensaje === "") {
            respuesta.textContent = "Por favor completa todos los campos";
            respuesta.style.color = "red";
            
        } else {
            respuesta.textContent = "Hemos recibido tu solicitud";
            respuesta.style.color = "green";
        }
    });

}, 1000);