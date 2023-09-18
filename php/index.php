<?php 
include '../connect.php'; // Se incluye el archivo connect.php que contiene la conexion a la base de datos

$proceso = $_POST['proceso'];
if (isset($proceso)) // Si la variable proceso esta seteada o existe, se reciben todos los datos enviados mediante el ajax
{
    $nombre = $_POST['nombre'];
    $alias = $_POST['alias'];
    $rut = $_POST['rut'];
    $email = $_POST['email'];
    $region = $_POST['region'];
    $comuna = $_POST['comuna'];
    $candidato = $_POST['candidato'];
    $web =$_POST['web'];
    $tv =$_POST['tv'];
    $rrss=$_POST['rrss'];
    $amigo=$_POST['amigo'];

    $rut_bd= '';
    $resultlist = $conn->query("SELECT rut FROM registros WHERE rut='$rut' "); // Se revisa que el rut enviado no se encuentre en la base de datos
    if ($row2=$resultlist->fetch_assoc()) 
		{
			$rut_bd=$row2['rut']; // Se almacena el rut en una variable 
		}
    
    if ($rut_bd == $rut) // Si el rut existe se devuelve la respuesta 'Rut existente en la base de datos'
    {
        $respuesta = 'Rut existente en la base de datos';
    }
    else // Si no existe se hace el insert 
    {
        $resultlist2 = $conn->query("INSERT INTO registros (nombre,alias,rut,email,region,comuna,candidato,web,tv,rrss,amigo)
        VALUES('$nombre','$alias','$rut','$email','$region','$comuna','$candidato','$web','$tv','$rrss','$amigo')");

        $respuesta = 'OK';
    }
    
    $datos = array('respuesta' => $respuesta); // Se crea un array con la respuesta 
    echo json_encode($datos);  // Se pasa a json para enviarlo al AJAX
    
}


?>
