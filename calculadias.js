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

function validar(){
	var isChecked = document.getElementById("terminos").checked;
	var tlf = document.getElementById("tlfn").value;
	var mov = document.getElementById("movil").value;
	var cPost = document.getElementById("cPost").value;
	var mail = document.getElementById("email").value;
	var mensaje = "";

	var correcto=true;
		if(isChecked){
  			//alert('checkbox esta seleccionado');
		}else{
			mensaje = mensaje+"Acepta los terminos de uso \n";
			correcto=false;
		}


		if(!validarTlfn(tlf)){
			mensaje = mensaje+"Numero de telefono No valido \n";
			correcto=false;
		}

		if(!validarTlfn(mov)){
			mensaje = mensaje+"Numero de movil No valido \n";
			correcto=false;
		}

		if(!validarCPost(cPost)){
			mensaje = mensaje+"Codigo postal No valido \n";
			correcto=false;
		}

		if(!validarEmail(mail)){
			mensaje = mensaje+"E-mail no valido\n";
			correcto=false;
		}

		if(correcto){
			return true;
		}else{
			alert(mensaje);
			return false;
		}
		
}

function validarTlfn(num){
	if(num.length < 9 || num.length > 9){
		//alert("Numero no valido");
		return false;
	}

	 if (isNaN(parseInt(num))) {
        //alert('No es un numero valido');
        return false;
     }  

     return true;
}

function validarCPost(num){
	if(num.length < 5 || num.length > 5){
		//alert("Numero no valido");
		return false;
	}

	 if (isNaN(parseInt(num))) {
        //alert('No es un numero valido');
        return false;
     }  

     return true;
}

function validarEmail(mail){
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(mail)){
		return false;
	}else{
		return true;
	} 
}