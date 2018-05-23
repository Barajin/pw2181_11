<?php
include 'conexiones.php';


function valida(){
	$respuesta = false;
	$usuario= $_POST["usuario"];
	$clave= md5($_POST["clave"]);
	//conectarnos al serverde BD.
	$con=conecta();
	$consulta = "SELECT usuario, clave FROM usuarios WHERE usuario = '".$usuario."' AND CLAVE = '".$clave."' LIMIT 1;";
	$res_consulta = mysqli_query($con, $consulta);


	if(mysqli_num_rows(res_consulta)>0){
		$respuesta= true;
	}
	$salidaJSON=  array('respuesta' => $respuesta);
	print json_encode($salidaJSON);
}


$opc = $_POST["opc"];

	switch($opc){
		case 'validaentrada':
		valida();
		break;

		default:
		break;
	}

?>