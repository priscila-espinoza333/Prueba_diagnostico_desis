/** Función que trae los datos para rellenar el select de regiones, se ejecuta una vez que el documento este cargado.  */

$(document).ready(function() {
    $.ajax({
        url: 'php/select.php',
        type: 'GET',
        dataType: 'json',
        data: { proceso: 'SELECT_REGION' },
        success: function(data) {
            console.log(data);
            var select = $('#select_region');
            select.empty();
            select.append($('<option></option>').attr('value', '').text('Selecciona una opción'));
            $.each(data, function(index, value) {
                select.append($('<option></option>').attr('value', value.id_region).text(value.nombre_region));
            });
        },
        error: function(error) {
            console.error("Tenemos un error en la primera solicitud", error);
        }
    });

/** Función que trae los datos para rellenar el select de candidatos, se ejecuta una vez que el documento este cargado.  */
    $.ajax({
        url: 'php/select.php',
        type: 'GET',
        dataType: 'json',
        data: { proceso: 'SELECT_CANDIDATO' }, 
        success: function(data) {
            console.log("Aquí vienen los candidatos", data);
            var select = $('#select_candidato');
            select.empty();
            select.append($('<option></option>').attr('value', '').text('Selecciona una opción'));
            $.each(data, function(index, value) {
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