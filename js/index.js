// Función para validar RUT chileno
function validarRut(rut) {
    if (!/^[0-9]+-[0-9kK]{1}$/.test(rut)) {
        return false;
    }

    const rutSinGuion = rut.split('-')[0];
    const digitoVerificador = rut.slice(-1).toLowerCase();

    let suma = 0;
    let multiplicador = 2;

    for (let i = rutSinGuion.length - 1; i >= 0; i--) {
        suma += parseInt(rutSinGuion.charAt(i)) * multiplicador;
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }

    const resto = suma % 11;
    const resultado = 11 - resto;

    if (resultado === 10) {
        return digitoVerificador === 'k';
    } else if (resultado === 11) {
        return digitoVerificador === '0';
    } else {
        return resultado === parseInt(digitoVerificador);
    }
}

// Función que verifica si al menos dos checkboxes están marcados, si vienen mas de 2 marcados devuelve true 
function alMenosDosCheckboxMarcados() {
    var checkboxes = [
        document.getElementById("web"),
        document.getElementById("tv"),
        document.getElementById("rrss"),
        document.getElementById("amigo")
    ];
    var checkedCount = checkboxes.filter(function(checkbox) { // Revisa cuales son los checkbox que estan clickeados mediante .checked
        return checkbox.checked;
    }).length; // Sacamos la cantidad de checkbox
    return checkedCount >= 2; // Si la cantidad es mayor a 2 devuelve true, si es menor devuelve false
}

// Función que hace envio del formulario mediante AJAX 
function sendFormulario() {
    var nombre = document.getElementById("nombre").value;
    var alias = document.getElementById("alias").value;
    var rut = document.getElementById("rut").value;
    // Se valida que el rut sea chileno
    var rut_validado = validarRut(rut);
    if (rut_validado)
    {
        rut_validado =rut
    }
    else
    {
        alert("El rut ingresado no es válido, intente nuevamente")
    }
    var email = document.getElementById("email").value;
    var region = document.getElementById("select_region").value; 
    var comuna = document.getElementById("select_comuna").value;
    var candidato = document.getElementById("select_candidato").value;

    // Se valida que hayan 2 checkbox clickeados
    if (!alMenosDosCheckboxMarcados()) // Si alMenosDosCheckboxMarcados() es falso devuele un alert
    {
        alert("Cómo se enteró de nosotros: Debe seleccionar al menos dos opciones.");
        return; 
    }
    // Uso de ajax para el envío de datos
    $.post("php/index.php", {        
        nombre: nombre,
        alias: alias,
        rut: rut,
        email: email,
        region: region,
        comuna: comuna,
        candidato: candidato,
        // Si el checkbox esta clickeado devuelve 1, en caso contrario devuelve 0 
        web: document.getElementById("web").checked ? 1 : 0,
        tv: document.getElementById("tv").checked ? 1 : 0,
        rrss: document.getElementById("rrss").checked ? 1 : 0,
        amigo: document.getElementById("amigo").checked ? 1 : 0,
        proceso: 'ENVIAR_FORMULARIO' // Se envia el proceso para identificar que hacer
    }, function(result) {
        console.log(result);
        var obj = JSON.parse(result);
        try {
            if (obj.respuesta === 'OK') // Si la respuesta fue exitosa se pasan a vacio los datos y se despliega alert de registro exitoso
            {
                alert("Registro con éxito");
                // Deja en vacio los input
                document.getElementById("nombre").value = "";
                document.getElementById("alias").value = "";
                document.getElementById("rut").value = "";
                document.getElementById("email").value = "";

                // Deja en vacio los select
                document.getElementById('select_region').value= '';
                document.getElementById('select_comuna').value = '';
                document.getElementById('select_candidato').value = '';

                // Desmarca todos los checkboxes
                document.getElementById("web").checked = false;
                document.getElementById("tv").checked = false;
                document.getElementById("rrss").checked = false;
                document.getElementById("amigo").checked = false;
            } 
            else 
            {
                alert("Error al registrar: " + obj.respuesta);
            }
        } catch (error) {
            console.error("Error al analizar la respuesta JSON: " + error);
        }
    }); 
}
