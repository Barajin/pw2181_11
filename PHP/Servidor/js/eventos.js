var inicioApp = function() {

    function aceptar() {
        var user = $("#txtUsuario").val(),
            pass = $("#txtClave").val();

        if (!user || !pass)
            alert("Faltan datos");
        else {
            var parametros = "opc=validaentrada" +
                "&usuario=" + user + "&clave=" + pass +
                "&aleatorio=" + Math.random();

            $.ajax({
                cache: false,
                type: "POST",
                dataType: "json",
                url: "php/validaentrada.php",
                data: parametros,
                success: function(response) {
                    console.log(response);

                    if (response.respuesta) {
                        $("#secInicio").hide("slow");
                        $("#frmUsuarios").show("slow");
                        // Posiciona el cursor en el cuadro de texto
                        $("#txtNombreUsuario").focus();

                    } else
                        alert("Datos incorrectos");

                },
                error: function(xhr, ajaxOptions, thrown) {
                    console.log(xhr + ajaxOptions + thrown);
                }
            })
        }
    }

    var buscaUsuario = function() {
        var usuario = $("#txtNombreUsuario").val();
        var parametros = "opc=buscarUsuario" +
            "&usuario=" + usuario +
            "&aleatorio=" + Math.random();

        console.log(parametros);
        if (usuario) {
            $.ajax({
                cache: false,
                type: "POST",
                dataType: "json",
                url: "php/buscausuario.php",
                data: parametros,
                success: function(response) {
                    console.log(response);
                    if (response.respuesta) {
                        $("#txtNombre").val(response.nombre);
                        $("#txtClaveUsuario").val(response.clave);
                    } else {
                        $("#txtNombre").val('');
                        $("#txtClaveUsuario").val('');
                        $("#txtNombre").focus();
                    }

                },
                error: function(xhr, ajaxOptions, thrown) {
                    console.log(xhr + ajaxOptions + thrown);
                }
            })
        }
    }


    var guardar = function() {
        var usuario = $("#txtNombreUsuario").val(),
            nombre = $("#txtNombre").val(),
            clave = $("#txtClave").val();

        if (usuario && nombre && clave) {

            var parametros = "opc=guardarUsuario" +
                "&usuario=" + usuario +
                "&nombre=" + nombre +
                "&clave=" + clave +
                "&aleatorio=" + Math.random();

            console.log(parametros);

            $.ajax({
                cache: false,
                type: "POST",
                dataType: "json",
                url: "php/guardausuario.php",
                data: parametros,
                success: function(response) {
                    console.log(response);
                    if (response.respuesta) {
                        alert("Éxito");
                        $("#frmUsuarios > input").val("");
                    } else {
                        alert("Error");
                    }

                },
                error: function(xhr, ajaxOptions, thrown) {
                    console.log(xhr + ajaxOptions + thrown);
                }
            })

        } else {
            alert("Llene todos los campos");
        }
    }

    var borrar = function() {
        var usuario = $("#txtNombreUsuario").val(),
            nombre = $("#txtNombre").val();

        var pregunta = prompt("¿Seguro de borrar a " + nombre + "? (Sí/No)", "No");

        if (usuario && nombre && pregunta && pregunta == "Sí") {

            var parametros = "opc=borrarUsuario" +
                "&usuario=" + usuario +
                "&aleatorio=" + Math.random();

            console.log(parametros);

            $.ajax({
                cache: false,
                type: "POST",
                dataType: "json",
                url: "php/borrausuario.php",
                data: parametros,
                success: function(response) {
                    console.log(response);
                    if (response.respuesta) {
                        alert("Éxito");
                        $("#frmUsuarios > input").val("");
                        $("#txtNombreUsuario").focus();
                    } else {
                        alert("Error");
                    }

                },
                error: function(xhr, ajaxOptions, thrown) {
                    console.log(xhr + ajaxOptions + thrown);
                }
            })

        }
    }
    

    var teclaNombreUsuario = function(tecla) {
        if (tecla.which == 13) {
            buscaUsuario();
        }
    }

    $("#btnAceptar").on("click", aceptar);
    $("#btnGuardar").on("click", guardar);
    $("#btnBorrar").on("click", borrar);
    $("#txtNombreUsuario").on("keypress", teclaNombreUsuario);
    $("#frmUsuarios").hide();


}

$(document).ready(inicioApp);