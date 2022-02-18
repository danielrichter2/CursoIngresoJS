//Daniel Richter Div E ej switch 08
function mostrar()
{
	var destino;
	var mensaje;

	destino=document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje="Frio";
			break;
		case "Mar del plata":
		case "Cataratas":
			mensaje="Calor";
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN