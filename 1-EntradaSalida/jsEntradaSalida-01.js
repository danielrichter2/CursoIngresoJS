
/*
Daniel Richter DIV E
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	//alert("esto funciona de maravillas");
var productoUno;
var productoDos;
var productoTres;
var precioUno;
var precioDos;
var precioTres;
var precioBruto;
var precioPromedio;
var precioTotal;
var descuento;
var precioFinal;
var mensaje;

productoUno=prompt("ingrese el primer producto");
precioUno=prompt("ingrese precio de "+productoUno);
productoDos=prompt("ingrese segundo producto");
precioDos=prompt("ingrese precio de "+productoDos);
productoTres=prompt("ingrese tercer producto");
precioTres=prompt("ingrese precio de "+productoTres);
descuento=prompt("ingrese descuento");
descuento=parseInt(descuento);
precioUno=parseInt(precioUno);
precioDos=parseInt(precioDos);
precioTres=parseInt(precioTres);

precioBruto=precioUno+precioDos+precioTres;
precioPromedio=precioBruto/3;
precioTotal=precioBruto*1.21;

precioFinal=precioTotal-(precioTotal*descuento/100);
mensaje= ("productos: "+productoUno+" $"+precioUno+
	" "+productoDos+" $"+precioDos+" "+productoTres+" $"+precioTres);


alert(mensaje+" el precio bruto es "+precioBruto+" el precio promedio es de "+
	precioPromedio+" el precio total es "+precioTotal+
	" y el precio final es "+precioFinal);
/*
let nombreUno;
	let nombreDos;
	let nombreTres;
	let precioUno;
	let precioDos;
	let precioTres;
	let precioBruto;
	let promedioDePrecios;
	let precioFinalIva;
	let iva;
	let ivaCalculado;
	let porcentajeDeDescuento;
	let descuentoCalculado;
	let precioFinalIvaConDescuento;
	let mensaje;

	iva = 21;
	nombreUno = prompt("Ingrese el nombre del Primer Producto");
	precioUno = prompt("Ingrese el Precio de "+nombreUno);
	precioUno = parseInt(precioUno);
	
	nombreDos = prompt("Ingrese el nombre del Segundo Producto");
	precioDos = prompt("Ingrese el Precio de "+nombreDos);
	precioDos = parseInt(precioDos);

	nombreTres = prompt("Ingrese el nombre del Tercer Producto");
	precioTres = prompt("Ingrese el Precio de "+nombreTres);
	precioTres = parseInt(precioTres);

	porcentajeDeDescuento = prompt("Indique el % de Descuento que desea aplicar al precio");
	porcentajeDeDescuento = parseInt(porcentajeDeDescuento);//dato que ingresa el usuario y lo usamos para operar

	precioBruto = precioUno + precioDos + precioTres;

	promedioDePrecios = precioBruto / 3;

	ivaCalculado = (precioBruto/100)*iva;

	precioFinalIva = precioBruto + ivaCalculado;

	descuentoCalculado = (precioFinalIva/100)*porcentajeDeDescuento;

	precioFinalIvaConDescuento = precioFinalIva - descuentoCalculado;

	mensaje = "Los productos con su precio son: ";
	mensaje = mensaje + nombreUno+" $"+precioUno+" ,";
	mensaje = mensaje + nombreDos+" $"+precioDos+" ,";
	mensaje = mensaje + nombreTres+" $"+precioTres+" ,";
	mensaje = mensaje + "Precio Bruto: $"+precioBruto+" ,";
	mensaje = mensaje + "Promedio: $"+promedioDePrecios+" ,";
	mensaje = mensaje + "El Precio Más IVA: $"+precioFinalIva+" ,";
	mensaje = mensaje + "El Precio Final con el"+porcentajeDeDescuento+"% de Descuento: "+precioFinalIvaConDescuento;

	alert(mensaje);
	*/
}

