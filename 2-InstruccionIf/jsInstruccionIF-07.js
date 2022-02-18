//DANIEL RICHTER DIV E EJ IF 07


//Ejercicio 7 bis Daniel Richter div E
function mostrar()
{

var edad;
var estadoCivil;
var mensaje;
var resto;
var nombre;


edad=document.getElementById("txtIdEdad").value;
edad=parseInt(edad);
estadoCivil=document.getElementById("estadoCivil").value;
resto=edad%2;
nombre=prompt("ingrese su nombre");
nombre=nombre.toLowerCase();


	if(edad<13)
	{
		mensaje="feliz dia";
		if(nombre=="ricardo")
		{
			mensaje=mensaje+" / muy chiquito para ese nombre";
		}

	}
	else
	{
	
		if(edad<18)
		{
			mensaje=mensaje+"usted es adolescente";
		}
		if(edad==17)
		{
			mensaje=mensaje+" / ultimo año!!";
		}
		if(nombre=="violeta")
		{
			mensaje=mensaje+" / como un color";
		}
		else
		{
			mensaje="tenes edad para laburar";
			if(edad==33)
			{
				mensaje=mensaje+ " / como cristo";
			}
			if(edad==88)
			{
				mensaje=mensaje+ " / lindo numero";
		}
			}
			if(edad>60)
			{
				mensaje=mensaje+ " / a jubilarse";
				if(nombre=="alfredo")
				{
					mensaje=mensaje+" / como el de queen";
				}
			}

	}
	if(resto==0)
	{
		mensaje=mensaje+ " / sos par!!";
	}


alert(mensaje);
}

































/*
if(edad<13)
{
	mensaje="feliz dia";

	if(nombre=="ricardo")
	{
		mensaje=mensaje+", muy chiquito para ese nombre";
	}

}

else if (edad<18)
{
	mensaje="usted es adolescente";
	else
	{
		if(nombre=="violeta")
		{
			mensaje=mensaje+ " y su nombre es "+nombre +", como un color!!";
		}
	}


	if(edad==17)
	{
	mensaje=mensaje+ "y es tu ultimo año!!";
	}
	
}
else
{
	mensaje="tenes edad para laburar";
	if(edad==33)
	{
		mensaje=mensaje+ "como cristo";
	}
	else
	{
		if(edad>60)
		{
		mensaje=mensaje+", a jubilarse";

			if(nombre=="alfredo")
			{
				mensaje=mensaje+", "+nombre+ " como el de QUEEN";
			}
		}
		if(edad==88)
		{
		mensaje=mensaje+ ", lindo numero";
		}
	}
}
if(resto==0)
{
	mensaje=mensaje+" y tenes edad par!!";
}
alert (mensaje)

}//FIN DE LA FUNCIÓN
*/

/////////////////////////////////////////////////////

/*var edad;
	var estadoCivil;
	

	estadoCivil=document.getElementById("estadoCivil").value;
	
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(edad<18&&estadoCivil!="Soltero")

	{
		alert("usted es muy pequeño para no ser soltero")
	}

//estadoCivil=estadoCivil.toLowerCase()
// == != < > >= <= 
*/
// EJERCICIO 7 BIS Daniel Richter div E 


/////////////////////////////////////////////////

// NO ESTA TOTALMENTE BIEN
/*
function mostrar()
{
	let edad;
	let mensaje;
	let nombre;
	let estadoCivil;

	edad= document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	nombre=prompt("Ingrese su nombre");

	estadoCivil=document.getElementById('estadoCivil').value;

	if (edad<13) //Ejercicio A
	{
		mensaje= "Feliz dia";

		if (nombre=="Ricardo") //Parte de ejercicio D
		{
			mensaje= mensaje + " / Muy chiquito para ese nombre";
		}
	}
	else
	{
		if (edad<18) //Ejercicio B
		{
			mensaje= "Usted es adolescente";

			if (edad ==17) 
			{
     			mensaje= mensaje +" / Ultimo año";
			}
			if (nombre=="Violeta") //Parte de ejercicio D
			{
				mensaje= mensaje + " / como un color!!";
			}
			if (estadoCivil=="Divorciado") //Ejercicio j
			{
				mensaje= mensaje + " / Toda una vida por delante";
			}
		}
		else //Ejercicio C
		{
			mensaje= "Tenes edad de laburar";

			if (edad==33) 
			{
				mensaje= mensaje + " / Como cristo";
			}
			if (estadoCivil=="Soltero") //Ejercicio i
			{
				mensaje= mensaje + " / a salir";
			}
			else
				if (edad>60) 
				{
					mensaje= mensaje+" / A jubilarse";

					if (edad==88) 
					{
						mensaje= mensaje+ " / Lindo número";
					}

					if (nombre=="Alfredo") //Parte de ejercicio D
					{
						mensaje = mensaje+ " / Como el de QUEEN";
					}
				}
		}
		if(estadoCivil=="Casado") //Ejercicio H
		{
			mensaje= mensaje + " /casada quiere casa";
		}
	}
	if(edad%2==0) //Ejercicio D
	{
		mensaje= mensaje+" / Es par";
	}

	alert(mensaje);
}
*/