/** Función que trae los datos para rellenar el select de regiones, se ejecuta una vez que el documento este cargado.  */

$(document).ready(function() {
    $.ajax({ // Se utiliza ajax, en este caso usamos un GET para poder traer los datos desde el php.
        url: 'php/select.php',
        type: 'GET',
        dataType: 'json',
        data: { proceso: 'SELECT_REGION' }, // Se envia un proceso para poder identificar que select vamos a completar
        success: function(data) { // Se recibe la data proveniente del php. 
            console.log(data);
            var select = $('#select_region');
            select.empty(); // Se vacia el select_region
            select.append($('<option></option>').attr('value', '').text('Selecciona una opción')); // Se carga la primera opcion que esta vacia. 
            $.each(data, function(index, value) { // Se recorre la data que viene desde el php para almacenar los datos en el select
                select.append($('<option></option>').attr('value', value.id_region).text(value.nombre_region));
            });
        },
        error: function(error) {
            console.error("Tenemos un error en la primera solicitud", error);
        }
    });

/** Función que trae los datos para rellenar el select de candidatos, se ejecuta una vez que el documento este cargado.  */
    $.ajax({  // Se utiliza ajax, en este caso usamos un GET para poder traer los datos desde el php.
        url: 'php/select.php', 
        type: 'GET',
        dataType: 'json',
        data: { proceso: 'SELECT_CANDIDATO' }, // Se envia un proceso para poder identificar que select vamos a completar
        success: function(data) { // Se recibe la data proveniente del php. 
            console.log("Aquí vienen los candidatos", data);
            var select = $('#select_candidato');
            select.empty(); // Se vacia el select_candidato
            select.append($('<option></option>').attr('value', '').text('Selecciona una opción')); // Se carga la primera opcion que esta vacia. 
            $.each(data, function(index, value) { // Se recorre la data que viene desde el php para almacenar los datos en el select
                select.append($('<option></option>').attr('value', value.id_candidato).text(value.nombre_candidato));
            });
        },
        error: function(error) {
            console.error("Tenemos un error en la segunda solicitud", error);
        }
    });
});


/** Función que trae los datos para rellenar el select de comunas según la region seleccionada, se ejecuta una vez que el documento este cargado.*/
function select_comunas()
{
    var region = document.getElementById("select_region").value;
    console.log("region seleccionada" , region);
   $.ajax({
        url: 'php/select.php',
        type: 'GET',
        dataType: 'json',
        data: {proceso:'SELECT_COMUNA',region:region}, 
        success:function(data) 
        {
            console.log("Aqui vienen las comunas ",data);
            var select = $('#select_comuna');
            select.empty();
            select.append($('<option></option>').attr('value', '').text('Selecciona una opción'));
            $.each(data, function(index, value) {
                select.append($('<option></option>').attr('value', value.id_comuna).text(value.nombre_comuna));
            });
        },
        error: function(error) 
        {
            console.error("tenemos un error", error);
        }
    }) 
};  

function select_candidatos()
{

};  