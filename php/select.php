<?php
include '../connect.php';

$proceso = $_GET['proceso'];
if ($proceso=='SELECT_REGION') 
{

$query = $conn->query("SELECT id_region, nombre_region FROM regiones ORDER BY id_region");
$regions = array();

while ($valores = mysqli_fetch_array($query)) {
    $region = array(
        'id_region' => $valores['id_region'],
        'nombre_region' => $valores['nombre_region']
    );
    $regions[] = $region;
}

echo json_encode($regions);

}

if ($proceso=='SELECT_COMUNA') 
{
    $region = $_GET['region'];
    $query = $conn->query("SELECT id_ciudad, nombre_ciudad FROM ciudades WHERE id_region='$region' ORDER BY id_ciudad");
    $ciudades = array();
    while ($valores = mysqli_fetch_array($query)) {
        $ciudad = array(
            'id_comuna' => $valores['id_ciudad'],
            'nombre_comuna' => $valores['nombre_ciudad']
        );
        $ciudades[] = $ciudad;
    }
    echo json_encode($ciudades);
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