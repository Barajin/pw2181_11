<?php 
    include 'conexiones.php';
    function buscaUsuario () {
        $respuesta = false;
        $user = $_POST["usuario"];
        
        // Conectarnos al servidor de BD
        $con = conecta();
        $consulta = "SELECT usuario FROM usuarios WHERE usuario = '".$user."' LIMIT 1";
        $res_consulta = mysqli_query($con, $consulta);
        $nombre="";
        $clave="";
        if (mysqli_num_rows($res_consulta) > 0) {
            $respuesta = true;
            while($regConsulta=mysqli_fetch_array($res_consulta)){
                $nombre=$regConsulta["nombre"];
                $clave =$regConsulta["clave"];
            }
        }
        $salida = array('respuesta' => $respuesta),'nombre' => $nombre,'clave' => $clave,
        print json_encode($salidaJSON);
    }
    $opc = $_POST["opc"];
    switch ($opc) {
        case 'buscaUsuario':
            buscaUsuario();
            break;
        
        default:
            # code...
            break;
    }
?>