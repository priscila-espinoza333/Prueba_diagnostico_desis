<?php 
$servername = 'localhost';
$username = 'root';
$password = '';
$database = 'prueba_desis';

$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    echo json_encode(array('respuesta' => 'Error de conexión: ' . $conn->connect_error));
}

?>

