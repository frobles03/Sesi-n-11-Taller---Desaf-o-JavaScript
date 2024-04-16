Mis disculpas por el error anterior. Aquí tienes el código corregido para validar que el campo de teléfono contenga solo números y que tenga al menos 11 dígitos antes de enviar el formulario:
// Validar el correo electrónico
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Validar el formulario antes de enviarlo
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var errorFlag = false;

    if (name === '' || email === '' || phone === '') {
        alert('Por favor, complete todos los campos del formulario.');
        errorFlag = true;
    }
    if (!isValidEmail(email)) {
        alert('Por favor, ingrese un correo electrónico válido (Nombredeusuario@dominio.extensión).');
        errorFlag = true;
    }
    if (!/^\d{11}$/.test(phone)) {
        alert('Por favor, ingrese un número de teléfono válido con exactamente 11 dígitos.');
        errorFlag = true;
    }

    if (errorFlag) {
        // Mostrar mensaje de error
        var errorMessage = document.createElement('div');
        errorMessage.textContent = '¡Fallo en el formulario! Por favor, revise los campos.';
        errorMessage.style.color = 'red';
        document.body.appendChild(errorMessage);
    } else {
        // Mostrar mensaje de confirmación
        var confirmationMessage = document.createElement('div');
        confirmationMessage.textContent = '¡Formulario enviado correctamente!';
        confirmationMessage.style.color = 'green';
        document.body.appendChild(confirmationMessage);

        // Mostrar los datos del usuario
        var userList = document.getElementById('userList');
        if (!userList) {
            userList = document.createElement('ol'); 
            userList.setAttribute('id', 'userList');
            document.body.appendChild(userList);
        }
        var userItem = document.createElement('li');
        userItem.textContent = 'Nombre: ' + name + ', Correo electrónico: ' + email + ', Número de teléfono: ' + phone;
        userList.appendChild(userItem);
    }
});
Este código valida que el campo de teléfono contenga exactamente 11 dígitos y que todos sean números antes de enviar el formulario. Si hay algún error en la validación, se mostrará un mensaje de error. De lo contrario, se mostrará un mensaje de confirmación y se agregarán los datos del usuario a la lista.

Espero que este código funcione correctamente para ti. Si tienes más preguntas o necesitas más ayuda, ¡estaré aquí para asistirte!