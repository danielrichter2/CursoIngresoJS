//Daniel Richter div E ej switch 10
function mostrar()
{

	var estacion;
	var destino;
	var mensaje;

	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					mensaje="se viaja";
					break;
				default:
					mensaje="No se viaja";
					break;
			}
			break;
		
		case "Verano":
			switch(destino)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje="se viaja";
					break;
				default:
					mensaje="no se viaja";
					break;
			}

			break;

		case "Otoño":
			mensaje="Se viaja";
			break;

		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					mensaje="no se viaja";
					break;
				default:
					mensaje ="se viaja";
					break;
			}

			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN