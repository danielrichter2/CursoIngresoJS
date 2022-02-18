//Daniel Richter Div E ej switch 02
function mostrar()
{
	//tomo el mes
	var mes;
	mes=document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("falta para el invierno");
			break;
		case "Julio":
		case "Agosto":
			alert("abrigate que hace frio");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("ya pasamos el frio ahora calor");
			break;

	}




}//FIN DE LA FUNCIÓN