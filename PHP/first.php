<?php
    $p1 = $_GET["parametro1"];

    for ($i = 0; $i < 9; $i++) {
        print("Hola " . $i . "<br>");
    }
?>

<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php
        print($p1); 
    ?>
</body>
</html>