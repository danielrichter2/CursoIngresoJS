//Daniel Richter Div E ej switch 04
function mostrar()
{
	//tomo el mes
	var mes;
	mes=document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Febrero":
			alert("este mes tiene 28 dias");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert ("este mes tiene 30 dias")
			break;
		default:
			alert("este mes tiene 31 dias");

	}

	



}//FIN DE LA FUNCIÓN