/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
var numUno;
var numDos;
var resultado;
//entrada
numUno=document.getElementById("txtIdNumeroUno").value;
numDos=document.getElementById("txtIdNumeroDos").value;
//proceso
numUno=parseInt(numUno);
numDos=parseInt(numDos);
resultado= numUno + numDos;
//Salida
alert("el resultado es " + resultado)

}

function restar()
{
	var numUno;
	var numDos;
	var resultado;
	numUno=document.getElementById("txtIdNumeroUno").value;
    numDos=document.getElementById("txtIdNumeroDos").value;
    numUno=parseInt(numUno);
    numDos=parseInt(numDos);
resultado = numUno-numDos;
alert ("el resultado es " + resultado);
}

function multiplicar()
{ 
var numUno;
	var numDos;
	var resultado;
	numUno=document.getElementById("txtIdNumeroUno").value;
    numDos=document.getElementById("txtIdNumeroDos").value;
    numUno=parseInt(numUno);
    numDos=parseInt(numDos);
resultado = numUno*numDos;
alert ("el resultado es " + resultado);
}

function dividir()
{
	var numUno;
	var numDos;
	var resultado;
	numUno=document.getElementById("txtIdNumeroUno").value;
    numDos=document.getElementById("txtIdNumeroDos").value;
    numUno=parseInt(numUno);
    numDos=parseInt(numDos);
resultado = numUno/numDos;
alert("el resultado es "+resultado);
}

// txtIdNumeroUno
//txtIdNumeroDos



