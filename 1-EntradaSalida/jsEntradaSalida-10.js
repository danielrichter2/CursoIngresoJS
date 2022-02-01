/*
DANIEL RICHTER DIV E
Ej E/S 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;
var descuento;

importe=document.getElementById("txtIdImporte").value;

importe=parseFloat(importe);

descuento=25/100;
resultado= importe - (importe*descuento);

document.getElementById("txtIdResultado").value=resultado;

}
