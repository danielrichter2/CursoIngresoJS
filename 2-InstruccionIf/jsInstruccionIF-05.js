//Daniel Richter div E ej if 05
function mostrar()

{
	var edad
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	//if(!(edad>12 && edad<18 ))

	if(edad<12||edad>17)
	{
		alert ("usted no es adolescente");
	}
}//FIN DE LA FUNCIÓN