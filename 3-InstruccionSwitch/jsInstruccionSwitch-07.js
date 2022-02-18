//Daniel Richter Div E Ej switch 07
function mostrar()
{
	var destino;
	var mensaje;
	destino=document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
			mensaje="Oeste";
			break;
		case "Cataratas":
			mensaje= "norte";
			break;
		case "Mar del plata":
			mensaje="este";
			break;
		case "Ushuaia":
			mensaje="sur";

	}

alert(mensaje);
	

}//FIN DE LA FUNCIÓN