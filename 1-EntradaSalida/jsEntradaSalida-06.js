/*
DANIEL RICHTER DIV E
ej e/s 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
//declaro variable
var numUno;
var numDos;
var resultado;

numUno=document.getElementById("txtIdNumeroUno").value;
numDos=document.getElementById("txtIdNumeroDos").value;
//parseInt para convertir el valor text a valor numerico
//parseFloat para num decimales
numUno= parseInt(numUno);
numDos=parseInt(numDos);



resultado= numUno + numDos;
alert ("el resultado es " + resultado);


//txtIdNumeroUno
//txtIdNumeroDos


}

