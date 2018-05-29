<?php 
    include 'conexiones.php';
    function valida () {
        $respuesta = false;
        $user = $_POST["usuario"];
        $pass = md5($_POST["clave"]);
        
        // Conectarnos al servidor de BD
        $con = conecta();
        $consulta = "SELECT usuario, clave FROM usuarios WHERE usuario = '".$user."' AND CLAVE = '".$pass."' LIMIT 1;";
        $res_consulta = mysqli_query($con, $consulta);
        if (mysqli_num_rows($res_consulta) > 0) {
            $respuesta = true;
        }
        $salida = array('respuesta' => $respuesta);
        print json_encode($salida);
    }
    $opc = $_POST["opc"];
    switch ($opc) {
        case 'validaentrada':
            valida();
            break;
        
        default:
            # code...
            break;
    }
?>