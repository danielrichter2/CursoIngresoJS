/*
DANIEL RICHTER DIV E
TP 3
3.
Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit;
	var centigrados;

fahrenheit=document.getElementById("txtIdTemperatura").value
	fahrenheit=parseFloat(fahrenheit);
centigrados=(fahrenheit-32)*5/9;
alert(fahrenheit+" fahrenheit son "+centigrados+" centigrados");

}

function CentigradosFahrenheit () 
{
	var centigrados;
	var fahrenheit;
	centigrados=document.getElementById("txtIdTemperatura").value;
	fahrenheit= (centigrados*5/9)+32;
	alert(centigrados+ " centigrados son "+fahrenheit+" fahrenheit");

}
