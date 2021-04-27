function calculaDias(){
	var mes = document.getElementById("mes").value;
	var agno = document.getElementById("agno").value;


	if(mes == 'febrero'){
		document.getElementById("op31").style.display = 'none';
		document.getElementById("op30").style.display = 'none';
		if(!esBisiesto(agno)){
			document.getElementById("op29").style.display = 'none';
		}else{
			document.getElementById("op29").style.display = 'block';
		}
	}else if(mes == 'abril' || mes == 'junio' || mes == 'septiembre' || mes == 'noviembre'){
		document.getElementById("op31").style.display = 'none';
	}else{
		document.getElementById("op31").style.display = 'block';
		document.getElementById("op30").style.display = 'block';
		document.getElementById("op29").style.display = 'block';
	}

	//alert("Dia cambiado..."+mes+" "+agno);
}

function esBisiesto(agno){
	if((agno%4 == 0 && agno%100 != 0) || agno%400 == 0){
		return true;
	}else{
		return false;
	}

}

function calculaLetra(){
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

	var dni = document.getElementById("dni").value;
	var posicion = dni%23;
	var let = letras[posicion];

	document.getElementById("letra").value = let;

}