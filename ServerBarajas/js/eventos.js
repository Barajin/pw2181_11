

var inicioApp = function()
{
	var Aceptar = function(){
		event.preventDefault();
		var usuario=$("#textUsuario").val();
		var clave =$("#textClave").val();
		var parametros="opc=validaentrada"+"&usuario="+usuario+"&clave="+clave+"&id="+Math.random();
		


		$.ajax({
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/validaentrada.php",
			data: parametros,
			success:function(response){
				if(response.respuesta == true){
					alert("bienvenido")
					$("#Secinicio").hide("slow");
					$("#frmUsuarios").show("slow");
					$("#textUsuario").foccus();

				}else{
					alert("Usuario o clave incorrectas(s)");
				}

			},

			error:function(xhr,ajaxOptions,thrownError){


			}	
		});
	}
	var buscaUsuario= function(){

		var usuario= $("#txtNombreUsuario").val();
		var parametros= "opc=buscaUsuario"+"&usuario"+usuario+"&aleatorio="+Math.random();
		if(usuario !=""){

		$.ajax({
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/buscaUsuario.php",
			data: parametros,
			success:function(response){
				if(respose.respuesta==true){
					$("#txtNombre").val(respose.nombre);
					$("#txtClaveUsuario").vak(respose.clave);
				}else{
					$("#txtNombre").foccus();
				}
				

			},

			error:function(xhr,ajaxOptions,thrownError){


			}	
		});

		}
	}
	var teclaNombreUsuario= function(tecla){
		if(tecla.wich==13){
			buscaUsuario();
		}
	}
	$("#btnAceptar").on("click",Aceptar);
	$("#txtNombreUsuario").om("keypress",teclaNombreUsuario);
}




$(document).ready(inicioApp);