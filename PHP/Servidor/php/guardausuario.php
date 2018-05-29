<?php 

    include 'conexiones.php';

    function guarda() {

        $respuesta = false;
        $user = GetSQLValueString($_POST["usuario"], "text");
        $name = GetSQLValueString($_POST["nombre"], "text");
        var_dump($_POST["nombre"]);
        $clave = GetSQLValueString(md5($_POST["clave"]), "text");
        
        // Conectarnos al servidor de BD
        $con = conecta();
        $consulta = sprintf("SELECT usuario FROM usuarios WHERE usuario = %s LIMIT 1;", $user);

        $res_consulta = mysqli_query($con, $consulta);
        $consulta_guarda = "";

        if (mysqli_num_rows($res_consulta) > 0) {
            $consulta_guarda = sprintf("UPDATE usuarios SET nombre = %s, clave = %s WHERE usuario = %s;", $name, $clave, $user);
        } else {
            $consulta_guarda = sprintf("INSERT INTO usuarios VALUES(default, %s, %s, %s);", $user, $name, $clave);
        }

        mysqli_query($con, $consulta_guarda);

        if(mysqli_affected_rows($con) > 0) {
            $respuesta = true;
        }

        $salida = array('respuesta' => $respuesta);
        print json_encode($salida);
    }

    $opc = $_POST["opc"];
    switch ($opc) {
        case 'guardarUsuario':
            guarda();
            break;
        
        default:
            # code...
            break;
    }
?>