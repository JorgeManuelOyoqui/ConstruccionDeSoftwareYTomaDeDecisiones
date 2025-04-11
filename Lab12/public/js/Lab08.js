document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos las referencias de los elementos de la página.
    const password = document.getElementById("password"); // Campo de contraseña
    const confirmPassword = document.getElementById("confirm-password"); // Campo para confirmar la contraseña
    const matchMessage = document.getElementById("match-message"); // Mensaje que indica si las contraseñas coinciden
    const strengthMeter = document.querySelector(".strength-meter span"); // Indicador de la fuerza de la contraseña (o sea, que tan buena es)
    const passwordRequirements = document.getElementById("password-requirements"); // Requisitos de la contraseña
    const helpText = document.createElement("small"); // Cro un elemento pequeño para mostrar el mensaje de ayuda
    helpText.id = "help-text"; // Le doy un id para poder manipularlo después
    helpText.style.color = "gray"; // Defino el color gris para el mensajes de ayuda
    confirmPassword.parentNode.insertBefore(helpText, confirmPassword.nextSibling); // Inserto el texto de ayuda debajo del campo de confirmar contraseña
    
    const draggableItem = document.getElementById("draggable"); // Para el objeto arrastrable
    const dropZone = document.getElementById("drop-zone"); // La zona donde debe caer el objeto arrastrable
    const verificationMessage = document.getElementById("verification-message"); // Mensaje de verificación para asegurar que el usuario es humano
    let isHumanVerified = false; // Variable que indica si el usuario ha verificado la acción de "ser humano"

    // Inicialmente oculto el objeto arrastrable, el mensaje de verificación y la zona de drop, 
    // para que luego de validar la contraseña se haga de esta parte la acción final
    draggableItem.style.display = 'none'; 
    verificationMessage.style.display = 'none';
    dropZone.style.display = 'none'; 

    let reminderTimeout; // Variable para controlar el recordatorio de completar la contraseña

    // Event listener para detectar cambios en el campo de la contraseña
    password.addEventListener("input", function () {
        validarSeguridad(password.value); // Valido la seguridad de la contraseña
        reiniciarRecordatorio(); // Reinicio el temporizador del recordatorio
    });

    // Event listener para cuando el usuario hace focus en el campo de confirmación de contraseña
    confirmPassword.addEventListener("focus", function () {
        helpText.textContent = "Confirmar la contraseña asegura que no haya errores tipográficos y que coincida con la original."; // Muestro un mensaje de ayuda
    });

    // Event listener para cuando el usuario pierde el focus en el campo de confirmación de contraseña
    confirmPassword.addEventListener("blur", function () {
        helpText.textContent = ""; // Borro el mensaje de ayuda cuando el campo pierde el focus
    });

    // Event listener para detectar cambios en el campo de confirmar contraseña
    confirmPassword.addEventListener("input", function () {
        // Verifico si las contraseñas coinciden
        if (password.value === confirmPassword.value) {
            matchMessage.textContent = "Las contraseñas coinciden ✔"; // Muestro el mensaje de éxito
            matchMessage.style.color = "green"; // Pongo el texto en verde si las condiciones de la contraseña se cumplen
            
            // Si las contraseñas coinciden, muestro el objeto arrastrable, el mensaje y la zona de drop
            draggableItem.style.display = 'block'; 
            verificationMessage.style.display = 'block';
            dropZone.style.display = 'block';
        } else {
            matchMessage.textContent = "Las contraseñas no coinciden ✖"; // Muestro el mensaje de error
            matchMessage.style.color = "red"; // Pongo el texto en rojo
            
            // Si las contraseñas no coinciden, mantengo todo oculto
            draggableItem.style.display = 'none';
            verificationMessage.style.display = 'none';
            dropZone.style.display = 'none';
        }
    });

    // Función para validar la seguridad de la contraseña
    function validarSeguridad(pass) {
        let fuerza = 0; // Variable que almacena el nivel de seguridad de la contraseña
        let requisitosCumplidos = []; // Lista de requisitos cumplidos por la contraseña
        
        // Valido los diferentes requisitos de seguridad
        if (pass.length >= 8) { fuerza++; requisitosCumplidos.push(0); } // Mínimo 8 caracteres
        if (/[A-Z]/.test(pass)) { fuerza++; requisitosCumplidos.push(1); } // Al menos 1 mayúscula
        if (/[a-z]/.test(pass)) { fuerza++; requisitosCumplidos.push(2); } // Al menos 1 minúscula
        if (/[0-9]/.test(pass)) { fuerza++; requisitosCumplidos.push(3); } //Al menos 1 número
        if (/[^a-zA-Z0-9]/.test(pass)) { fuerza++; requisitosCumplidos.push(4); } //Al menos 1 símbolo
        
        // Establezco los colores del medidor de fuerza según el nivel de seguridad
        let colores = ["red", "orange", "yellow", "lightgreen", "green"];
        strengthMeter.style.width = (fuerza * 20) + "%"; // Ajusto el ancho del medidor
        strengthMeter.style.background = colores[fuerza - 1] || "red"; // Establezco el color basado en el nivel de fuerza

        // Defino los requisitos de la contraseña
        let requisitos = [
            "Mínimo 8 caracteres",
            "Al menos una letra mayúscula",
            "Al menos una letra minúscula",
            "Al menos un número",
            "Al menos un símbolo (!@#$%^&*)"
        ];
        
        // Creo un mensaje para mostrar si cada requisito fue cumplido
        let mensajes = requisitos.map((req, index) =>
            `<span style="color: ${requisitosCumplidos.includes(index) ? 'green' : 'red'}">${requisitosCumplidos.includes(index) ? '✔' : '✖'} ${req}</span>`
        ).join("<br>");
        
        // Muestro los mensajes en el HTML
        passwordRequirements.innerHTML = mensajes;
    }

    // Función para reiniciar el temporizador de recordatorio de contraseña segura
    function reiniciarRecordatorio() {
        clearTimeout(reminderTimeout); // Limpio cualquier recordatorio anterior
        reminderTimeout = setTimeout(() => {
            alert("No olvides completar tu contraseña de manera segura"); // Recordatorio de completar la contraseña
        }, 15000); // Se esperan 15 segundos antes de mostrar el recordatorio
    }

    // Evento para cuando el objeto arrastrable comienza a ser arrastrado
    draggableItem.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text", event.target.id); // Se establece el ID del objeto que se está arrastrando
    });

    // Evento para cuando el ratón está sobre la zona de drop (arrastre)
    dropZone.addEventListener("dragover", function (event) {
        event.preventDefault(); // Permito el arrastre sobre la zona
    });

    // Evento para cuando el objeto es soltado sobre la zona de drop
    dropZone.addEventListener("drop", function (event) {
        event.preventDefault(); // Para prevenir el comportamiento por defecto

        // Obtengo el ID del objeto arrastrado
        const data = event.dataTransfer.getData("text");

        // Si el objeto arrastrado es el correcto (el rectángulo arrastrable)
        if (data === "draggable") {
            isHumanVerified = true; // Marco que el usuario es verificado
            verificationMessage.textContent = "Verificación completada ✔ Eres humano."; // Mensaje de verificación exitoso
            verificationMessage.style.color = "green"; // Pongo el texto en verde
        }
    });
});
