<?php
include '../connect.php'; // Se incluye el archivo connect.php que contiene la conexion a la base de datos

$proceso = $_GET['proceso']; // Se recibe el proceso para identificar que select rellenar 
if ($proceso=='SELECT_REGION') 
{

$query = $conn->query("SELECT id_region, nombre_region FROM regiones ORDER BY id_region"); // Query para traer las regiones 
$regions = array(); // Se crea arreglo para almacenarlas

while ($valores = mysqli_fetch_array($query)) {  // Se recorren y almacenan los datos obtenidos de la query en el arreglo 
    $region = array( // Se crea un arreglo con los valores a utilizar
        'id_region' => $valores['id_region'],
        'nombre_region' => $valores['nombre_region']
    );
    $regions[] = $region; // Se almacenan los datos en el arreglo principal
}

echo json_encode($regions); // se devuelve un json con los datos

}

if ($proceso=='SELECT_COMUNA') 
{
    $region = $_GET['region']; // Se recibe el id de la region para poder buscar las ciudades que pertenezcan a esa region
    $query = $conn->query("SELECT id_ciudad, nombre_ciudad FROM ciudades WHERE id_region='$region' ORDER BY id_ciudad"); // Query para traer las coidades según región 
    $ciudades = array(); // Se crea arreglo para almacenarlas
    while ($valores = mysqli_fetch_array($query)) {  // Se recorren y almacenan los datos obtenidos de la query en el arreglo 
        $ciudad = array( // Se crea un arreglo con los valores a utilizar
            'id_comuna' => $valores['id_ciudad'],
            'nombre_comuna' => $valores['nombre_ciudad']
        );
        $ciudades[] = $ciudad; // Se almacenan los datos en el arreglo principal
    }
    echo json_encode($ciudades);  // se devuelve un json con los datos
}


if ($proceso=='SELECT_CANDIDATO') 
{
    $query = $conn->query("SELECT id_candidato, nombre_candidato FROM candidatos ORDER BY id_candidato");
    $candidatos = array();
    while ($valores = mysqli_fetch_array($query)) {
        $candidato = array(
            'id_candidato' => $valores['id_candidato'],
            'nombre_candidato' => $valores['nombre_candidato']
        );
        $candidatos[] = $candidato;
    }
    echo json_encode($candidatos);
}
?>