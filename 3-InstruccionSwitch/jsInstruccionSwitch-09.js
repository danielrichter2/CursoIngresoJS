//Daniel Richter Div E ej 09 switch
function mostrar()
{

	var destino;
	var estacion;
	const tarifa=15000;
	var porcentaje;
	var precioFinal;
	

	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;


switch(estacion)
{
	case "Invierno":
		switch(destino)
		{
			case "Bariloche":
				porcentaje=20
				break;
			
			case "Mar del plata":
				porcentaje=(-20);
				break;
			default:
				porcentaje=(-10);
				break;
		}

	break;
	
	case "Verano":
		switch(destino)
		{
			case "Bariloche":
				porcentaje=(-20)
				break;
			case "Mar del plata":
				porcentaje=20;
				break;
			default:
				porcentaje=10;
				break;
		}

	break;
	
	default:
		switch(destino)
		{
			case "Cordoba":
				porcentaje=0
				break;	
			default:
				porcentaje=10;
				break;
		}
	break;

}

precioFinal=tarifa+(tarifa*porcentaje/100);


alert("el precio es "+precioFinal);



























/*	switch(estacion)
	{
		case "Invierno":
			if(destino=="Bariloche")
			{
				aumento=20;
			}
			else if(destino=="Mar de plata")
			{
				descuento=20;
			}
			else
			{
				descuento =10;
			}
		break;

			
		case "Verano":
			if(destino=="Bariloche")
			{
				descuento=20;
			}
			else if(destino=="Mar del plata")
			{
				aumento=20;
			}
			else
			{
				aumento=10;
			}
		break;

		case "Primavera":
		case "Otoño":
			if(destino=="Cordoba")
			{
				precioFinal=tarifa;
			}
			else
				aumento=10;

		break;


	}

	if (aumento!=0)
	{
		precioFinal=tarifa+(tarifa*aumento/100);
	}
	else if (descuento!=0)
	{
		precioFinal=tarifa-(tarifa*descuento/100);
	}

mensaje="el precio es "+precioFinal;

alert(mensaje);
*/




}//FIN DE LA FUNCIÓN