// Utilicé la libreria Jquery Validation Plugin para las validaciones

$(document).ready(function () {
    $("#form_votacion").validate({
        rules: {
            nombre: {
                required: true,
            },
            alias: {
                minlength: 5,
                alphanumeric: true
            },
            rut: {
                required: true,
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            nombre: {
                required: " Por favor, ingresa tu nombre y apellido",
            },
            alias: {
                minlength: " Por favor, ingresa al menos 5 caracteres",
                alphanumeric: " Solo puede contener letras y números"
            },
            rut: {
                required: " Por favor, ingresa tu RUT",
            },
            email: {
                required: " Por favor, ingresa tu correo electrónico",
                email: " Ingresa un correo electrónico válido"
            }
        },
    
    });
    // Añadí función onClick al boton votar
    $("#votar").click(function () {
        // Aquí valido el formulario
        if ($("#form_votacion").valid()) {
          // Si el formulario es válido, lo envío
          sendFormulario()
        } else {
          // Si no es válido, muestro un alert 
          alert('Por favor, completa todos los campos requeridos');
        }
      });
});

/*  Alphanumeric acepta "_" por defecto, este codigo transforma "_" en un carácter inválido */

$.validator.addMethod("alphanumeric", function(value, element) {
    return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
}, "Solo puede contener letras y números"); 