/*
DANIEL RICHTER DIV E
TP 2
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

var largo;
	var ancho;
	var resultado;
function Rectangulo () 
{
	

	largo=document.getElementById("txtIdLargo").value;
	ancho=document.getElementById("txtIdAncho").value;
	largo=parseFloat(largo);
	ancho=parseFloat(ancho);
resultado= (largo+ancho+largo+ancho)*3;


alert("se utilizaran "+ resultado+ " metros de alambre");


}
function Circulo () 
{
	var radio

	radio=document.getElementById("txtIdRadio").value;
	radio=parseFloat(radio);

	resultado=(2*3.14*radio)*3
	alert("la cantidad de alambre sera "+resultado+" metros");


}
function Materiales () 
{
	var bolsasCal
	var bolsasCemento
	largo=document.getElementById("txtIdLargo").value;
	ancho=document.getElementById("txtIdAncho").value;
	largo=parseFloat(largo);
	ancho=parseFloat(ancho);
	bolsasCal=(largo*ancho)*2;
	bolsasCemento=(largo*ancho)*3;
	alert("se utilizaran "+bolsasCal+" bolsas de cal y "+bolsasCemento+" de cemento");
	
}