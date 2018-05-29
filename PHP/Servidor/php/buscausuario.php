<?php 

    include 'conexiones.php';

    function busca() {

        $respuesta = false;
        $user = GetSQLValueString($_POST["usuario"], "text");
        
        // Conectarnos al servidor de BD
        $con = conecta();
        $consulta = sprintf("SELECT * FROM usuarios WHERE usuario = %s LIMIT 1;", $user);

        $res_consulta = mysqli_query($con, $consulta);
        $name = "";
        $clave = "";

        if (mysqli_num_rows($res_consulta) > 0) {
            $respuesta = true;
            while($regConsulta = mysqli_fetch_array($res_consulta)) {
                $name =  utf8_encode($regConsulta["nombre"]);
                $clave = $regConsulta["clave"];
            }
        }

        // var_dump($consulta);
        $salida = array('respuesta' => $respuesta, 'nombre' => $name, 'clave' => $clave);
        print json_encode($salida);
    }

    $opc = $_POST["opc"];
    switch ($opc) {
        case 'buscarUsuario':
            busca();
            break;
        
        default:
            # code...
            break;
    }
?>