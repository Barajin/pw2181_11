<?php 

    include 'conexiones.php';

    function borra() {

        $respuesta = false;
        $user = GetSQLValueString($_POST["usuario"], "text");
        
        // Conectarnos al servidor de BD
        $con = conecta();
        $consulta = sprintf("SELECT usuario FROM usuarios WHERE usuario = %s LIMIT 1;", $user);
        $res_consulta = mysqli_query($con, $consulta);
        $consulta_borra = "";

        if (mysqli_num_rows($res_consulta) > 0) {
            $consulta_borra= sprintf("DELETE FROM usuarios WHERE usuario = %s;",$user);
            mysqli_query($con, $consulta_borra);

        } 

        if(mysqli_affected_rows($con) > 0) {
            $respuesta = true;
        }

        $salida = array('respuesta' => $respuesta);
        print json_encode($salida);
    }

    $opc = $_POST["opc"];
    switch ($opc) {
        case 'borrarUsuario':
            borra();
            break;
        
        default:
            # code...
            break;
    }
?>