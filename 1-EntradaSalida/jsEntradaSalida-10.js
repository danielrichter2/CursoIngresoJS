/*
DANIEL RICHTER DIV E
Ej E/S 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
/*	var importe;
	var resultado;
var descuento;

importe=document.getElementById("txtIdImporte").value;

importe=parseFloat(importe);

descuento=25/100;
resultado= importe - (importe*descuento);

document.getElementById("txtIdResultado").value=resultado;
*/


/*
10 bis 
DANIEL RICHTER DIV E
lo anterior mas.
se debe pedir el % por prompt

mostrar por alert el importe, el descuento, el importe con Descuento
"su importe es 1000 , el Descuento es de 250 y su importe con descuento es 750"
*/

var importe;
var resultado;
var descuento;
importe=document.getElementById("txtIdImporte").value;
importe=parseFloat(importe);
descuento=prompt("ingrese descuento");
resultado=importe-(importe*descuento/100);
alert("su importe es "+importe+" su descuento es "+descuento+" y su importe con descuento es "+resultado);







}
