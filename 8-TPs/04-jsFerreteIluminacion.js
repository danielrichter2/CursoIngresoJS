//Daniel Richter div E tp 4 switch/switch
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

function CalcularPrecio () 
{
 	
var cantidadDeLamparitas;
var precioLamparitas=35
var precioTotalDeLamparas;
var precioFinal;
var marca;
var descuento;
var ingresosBrutos;



cantidadDeLamparitas=document.getElementById("txtIdCantidad").value;
cantidadDeLamparitas=parseInt(cantidadDeLamparitas);
marca=document.getElementById("Marca").value;

precioTotalDeLamparas=precioLamparitas*cantidadDeLamparitas;


 switch(cantidadDeLamparitas)
  {
    case 1:
    case 2:
      descuento=0;
      break;
   
    case 3:
      switch(marca)
      {
        case "ArgentinaLuz":
          descuento=15;
          break;
        case "FelipeLamparas":
          descuento=10;
          break;
        default:
          descuento=5;
          break;
      }
      break;
   
    case 4:
      switch(marca)
      {
        case "ArgentinaLuz":
        case "FelipeLamparas":
          descuento=25;
          break;
        default:
          descuento=20;
          break;
      }
      break;
    
    case 5:
      switch(marca)
      {
        case "ArgentinaLuz":
          descuento=40;
          break;
        default:
          descuento=30;
          break;
      }
      break;
    
    default:
      descuento=50;
      
  }

precioFinal=precioTotalDeLamparas-(precioTotalDeLamparas*descuento/100);

if(precioFinal>120)
{
  ingresosBrutos=precioFinal*10/100;
  precioFinal=precioFinal+ingresosBrutos;
  alert("IIBB usted pago "+precioFinal+" siendo "+ingresosBrutos+" el impuesto que se pago")
}

document.getElementById("txtIdprecioDescuento").value=precioFinal;



























/*
  if(cantidadDeLamparitas>5)
  {
    descuento=50
  }
  else if(cantidadDeLamparitas==5)
  {
      switch(marca)
      {
        case "ArgentinaLuz":
          descuento=40;
          break;
        default:
          descuento=30;
          break;
      }
  }
  else if(cantidadDeLamparitas==4)
  {
      switch(marca)
      {
        case "ArgentinaLuz":
        case "FelipeLamparas":
          descuento=25;
          break;
        default:
          descuento=20;
          break;

      }
  }
  else if(cantidadDeLamparitas==3)
  {
    switch(marca)
    {
      case "ArgentinaLuz":
        descuento=15;
        break;
      case "FelipeLamparas":
        descuento=10;
        break;
      default:
        descuento=5;
        break;
    }
  }
  else
  {
    descuento=0;
  }

  precioFinal=precioTotalDeLamparas-(precioTotalDeLamparas*descuento/100);

if(precioFinal>120)
{
  ingresosBrutos=precioFinal*10/100;
  precioFinal=precioFinal+ingresosBrutos;
alert("IIBB usted pago "+precioFinal+" siendo "+ingresosBrutos+" el impuesto que se pago");
}

document.getElementById("txtIdprecioDescuento").value=precioFinal;

*/




























/*precioLamparitas=35;

precioTotalDeLamparas=precioLamparitas*cantidadDeLamparitas;

	if (cantidadDeLamparitas>5)
		{	
		precioConDescuento=precioTotalDeLamparas-(precioTotalDeLamparas*50/100);
		
		}

  	else if(cantidadDeLamparitas==5)

  	{
  		if(marca=="ArgentinaLuz")
  		{
  			precioConDescuento=precioTotalDeLamparas-(precioTotalDeLamparas*40/100);
 		}
  	    else
  		{
 		 precioConDescuento=precioTotalDeLamparas-(precioTotalDeLamparas*30/100);
  		}
  	}

  	else if(cantidadDeLamparitas==4)
  	{
  		if(marca=="ArgentinaLuz"|| marca=="FelipeLamparas")
  		{
  			precioConDescuento=precioTotalDeLamparas-(precioTotalDeLamparas*25/100);
  		}
  		else
  		{
  			precioConDescuento=precioTotalDeLamparas-(precioTotalDeLamparas*20/100);
  		}
  	}

  	else if(cantidadDeLamparitas==3)
  	{
  		if(marca=="ArgentinaLuz")
  		{
  			precioConDescuento=precioTotalDeLamparas-(precioTotalDeLamparas*15/100);
  		}
  		else if(marca=="FelipeLamparas")
  		{
  			precioConDescuento=precioTotalDeLamparas-(precioTotalDeLamparas*10/100);
  		}
  		else
  		{
  			precioConDescuento=precioTotalDeLamparas-(precioTotalDeLamparas*5/100);
  		}
  	}
  	
  	else 
  	{
  		precioConDescuento=precioTotalDeLamparas;
  	}
  
  
	if(precioConDescuento>120)
	{
		ingresosBrutos=precioConDescuento*10/100;
		precioFinal=precioConDescuento+ingresosBrutos;
		alert("IIBB Usted pago "+precioFinal+" siendo "+ingresosBrutos+" el impuesto que se pago");
	}

document.getElementById("txtIdprecioDescuento").value=precioConDescuento;
*/
}





















