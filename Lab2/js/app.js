
var dato1 = document.getElementById("dato1");
var dato2 = document.getElementById("dato2");
var suma = document.getElementById("suma"); //botton de suma - evento click
var resta=document.getElementById("resta");
var multip=document.getElementById("multip");
var division=document.getElementById("division");

var resul = document.getElementById("result");
var resultado;




suma.addEventListener("click",sumar);
resta.addEventListener("click", restar);
multip.addEventListener("click",multiplicacion);
division.addEventListener("click",dividir);

function sumar(){

resultado = Number(dato1.value) + Number(dato2.value);

resul.innerHTML = resultado;
dato1.value="";
dato2.value="";
dato1.focus();

}


function restar(){

resultado=Number(dato1.value)-Number(dato2.value);
resul.innerHTML=resultado;
dato1.value="";
dato2.value="";
dato1.focus();

}


function multiplicacion(){

resultado=Number(dato1.value)*Number(dato2.value);
resul.innerHTML=resultado;
dato1.value="";
dato2.value="";
dato1.focus();
}



function dividir(){

resultado=Number(dato1.value)/Number(dato2.value);
resul.innerHTML=resultado.toFixed();
dato1.value="";
dato2.value="";
dato1.focus();

}





