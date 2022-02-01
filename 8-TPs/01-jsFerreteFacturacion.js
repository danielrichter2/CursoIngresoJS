/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precioUno;
	var precioDos;
	var precioTres;
	var resultado;
	var iva
	
function Sumar () 
{

	precioUno=document.getElementById("txtIdPrecioUno").value;
	precioDos=document.getElementById("txtIdPrecioDos").value;
	precioTres=document.getElementById("txtIdPrecioTres").value;
	
	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);
	
	resultado=precioUno+precioDos+precioTres;
	
	alert("la suma de los productos es "+resultado);


	
}
function Promedio () 
{
	precioUno=document.getElementById("txtIdPrecioUno").value;
	precioDos=document.getElementById("txtIdPrecioDos").value;
	precioTres=document.getElementById("txtIdPrecioTres").value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);
    resultado=(precioUno+precioDos+precioTres)/3;
    alert("el promedio es "+resultado);

	
}
function PrecioFinal () 
{
	
precioUno=document.getElementById("txtIdPrecioUno").value;
precioDos=document.getElementById("txtIdPrecioDos").value;
precioTres=document.getElementById("txtIdPrecioTres").value

precioUno=parseFloat(precioUno);
precioDos=parseFloat(precioDos);
precioTres=parseFloat(precioTres);
iva=21/100
resultado=(precioUno+precioDos+precioTres)+((precioUno+precioDos+precioTres)*iva);
alert("precio final "+ resultado);
}

