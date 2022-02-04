/*
DANIEL RICHTER DIV E
Ej E/S 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
/*
var sueldo;
	var resultado;
    var aumento;


    sueldo=document.getElementById("txtIdSueldo").value;
sueldo=parseFloat(sueldo);

aumento=10/100;
resultado=sueldo+(sueldo*aumento);

document.getElementById("txtIdResultado").value=resultado;

	//txtIdSueldo
	//txtIdResultado
	*/

//9 bis DANIEL RICHTER DIV E
var sueldo;
var resultado;
var aumento;
sueldo=document.getElementById("txtIdSueldo").value;
sueldo=parseFloat(sueldo);
aumento=prompt("ingrese aumento");
resultado=sueldo+(sueldo*aumento/100);
document.getElementById("txtIdResultado").value=resultado;






}
