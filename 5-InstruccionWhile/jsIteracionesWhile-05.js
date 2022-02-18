/* Daniel Richter Div E ej while 05
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	sexoIngresado=sexoIngresado.toLowerCase();
	
	while(!(sexoIngresado=="f"||sexoIngresado=="m"))
	{
		sexoIngresado=prompt("error, ingrese f o m");
		sexoIngresado=sexoIngresado.toLowerCase();
	}
	document.getElementById("txtIdSexo").value=sexoIngresado;


	
}//FIN DE LA FUNCIÓN