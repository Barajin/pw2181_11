

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
				}else{
					alert("Usuario o clave incorrectas(s)");
				}

			},

			error:function(xhr,ajaxOptions,thrownError){


			}	
		});
	}
	$("#btnAceptar").on("click",Aceptar);
}




$(document).ready(inicioApp);