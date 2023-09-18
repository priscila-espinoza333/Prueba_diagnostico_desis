<?php
include '../connect.php';

$proceso = $_POST['proceso'];
if (isset($proceso)) 
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
    $resultlist = $conn->query("SELECT rut FROM registros WHERE rut='$rut' ");
    if ($row2=$resultlist->fetch_assoc())
		{
			$rut_bd=$row2['rut'];
		}
    
    if ($rut_bd == $rut)
    {
        $respuesta = 'Rut existente en la base de datos';
    }
    else
    {
        $resultlist2 = $conn->query("INSERT INTO registros (nombre,alias,rut,email,region,comuna,candidato,web,tv,rrss,amigo)
        VALUES('$nombre','$alias','$rut','$email','$region','$comuna','$candidato','$web','$tv','$rrss','$amigo')");

        $respuesta = 'OK';
    }
    
    $datos = array('respuesta' => $respuesta);
    echo json_encode($datos);
    
}


?>
