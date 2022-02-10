function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaRandom;

	//Math.floor(Math.random() * (10 - 1)) + 1;
	notaRandom=Math.floor(Math.random() * (10 - 1)) + 1;
console.log(notaRandom);
	if(notaRandom>8)
	{
		alert("excelente");
	}
	else if(notaRandom<4)
	{
		alert("vamos la proxima se puede");
	}
	else
	{
		alert ("aprobo");
	}
}//FIN DE LA FUNCIÓN