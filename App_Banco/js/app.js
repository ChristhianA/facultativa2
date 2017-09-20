

    

/*Elementos para calcular el interes anual y mensual*/
/*gey elementbyid es para tomar variables del html*/
/*addevetnlisterner es para agregar un evento y aplicar la funcion*/
/*let es para declarar una variabe*/
/*ineerhtml es para ralcionar el html con las variable*/

//APLICA EL EVENTO IMPUT A LA CANTIDAD CON INTERES DE 2%
document.getElementById('monto').addEventListener('input', function (e) {
let m = e.target.value;
 document.getElementById('interes').innerHTML=(m*0.02).toFixed(2);
 document.getElementById('rev').innerHTML=(m*0.05).toFixed(2);
 document.getElementById('total').innerHTML=((m*0.02)+(m*0.05)).toFixed(2);

 document.getElementById('interesm').innerHTML=((m*0.02)/12).toFixed(2);
 document.getElementById('revm').innerHTML=((m*0.05)/12).toFixed(2);
 document.getElementById('totalm').innerHTML=(((m*0.02)+(m*0.05))/12).toFixed(2);
});

/*var monto = document.getElementById("monto");
var CDP1 = document.getElementById("CDP1");
var CDP2 = document.getElementById("CDP2");
CDP1.addEventListener("click",CDP1);*/

/*//CDP para un año
document.getElementById('checkbox1').addEventListener('click',function(e){
 let d=e.target.checkbox1;
 var monto = document.getElementById('monto').value;
 document.getElementById('interes').innerHTML=(monto*0.0392).toFixed(2);
 document.getElementById('rev').innerHTML=(monto*0.05).toFixed(2);
document.getElementById('total').innerHTML=((monto*0.0392)+(monto*0.05)).toFixed(2);

 document.getElementById('interesm').innerHTML=((monto*0.392)/12).toFixed(2);
 document.getElementById('revm').innerHTML=((m*0.05)/12).toFixed(2);
 document.getElementById('totalm').innerHTML=(((monto*0.0392)+(monto*0.05))/12).toFixed(2);
});

//CDP para 2 años
document.getElementById('checkbox2').addEventListener('click',function(e){
 let d=e.target.checkbox2;
 var monto = document.getElementById('monto').value;
 document.getElementById('interes').innerHTML=(monto*0.0488).toFixed(2);
 document.getElementById('rev').innerHTML=(monto*0.05).toFixed(2);
 document.getElementById('total').innerHTML=((monto*0.0488)+(monto*0.05)).toFixed(2);

  document.getElementById('interesm').innerHTML=((monto*0.0488)/12).toFixed(2);
 document.getElementById('revm').innerHTML=((monto*0.05)/12).toFixed(2);
 document.getElementById('totalm').innerHTML=(((monto*0.0488)+(monto*0.05))/12).toFixed(2);
});*/

//APLICA EL EVENTO CHANGE A LOS CHECKBOX PARA APLICAR EL CDP1 O CDP2 A LA CANTIDAD
//CDP1
const CDP1=document.querySelector('#checkbox1');
CDP1.addEventListener('change', function(e){
    if(CDP1.checked)
        {
            var monto = document.getElementById('monto').value;
            document.getElementById('interes').innerHTML=(monto*0.0392).toFixed(2);
            document.getElementById('rev').innerHTML=(monto*0.05).toFixed(2);
            document.getElementById('total').innerHTML=((monto*0.0392)+(monto*0.05)).toFixed(2);
            
            document.getElementById('interesm').innerHTML=((monto*0.392)/12).toFixed(2);
            document.getElementById('revm').innerHTML=((m*0.05)/12).toFixed(2);
            document.getElementById('totalm').innerHTML=(((monto*0.0392)+(monto*0.05))/12).toFixed(2);
        }
else
    {
    var monto = document.getElementById('monto').value; 
    document.getElementById('interes').innerHTML=(monto*0.02).toFixed(2);
    document.getElementById('rev').innerHTML=(monto*0.05).toFixed(2);
    document.getElementById('total').innerHTML=((monto*0.02)+(monto*0.05)).toFixed(2);

    document.getElementById('interesm').innerHTML=((monto*0.02)/12).toFixed(2);
    document.getElementById('revm').innerHTML=((monto*0.05)/12).toFixed(2);
    document.getElementById('totalm').innerHTML=(((monto*0.02)+(monto*0.05))/12).toFixed(2);
}
});

//CDP2
const CDP2=document.querySelector('#checkbox2');
CDP2.addEventListener('change', function(e){
    if(CDP2.checked)
        {
            var monto = document.getElementById('monto').value;
            document.getElementById('interes').innerHTML=(monto*0.0488).toFixed(2);
            document.getElementById('rev').innerHTML=(monto*0.05).toFixed(2);
            document.getElementById('total').innerHTML=((monto*0.0488)+(monto*0.05)).toFixed(2);

            document.getElementById('interesm').innerHTML=((monto*0.0488)/12).toFixed(2);
            document.getElementById('revm').innerHTML=((monto*0.05)/12).toFixed(2);
            document.getElementById('totalm').innerHTML=(((monto*0.0488)+(monto*0.05))/12).toFixed(2);
        }
else
    {
    var monto = document.getElementById('monto').value; 
    document.getElementById('interes').innerHTML=(monto*0.02).toFixed(2);
    document.getElementById('rev').innerHTML=(monto*0.05).toFixed(2);
    document.getElementById('total').innerHTML=((monto*0.02)+(monto*0.05)).toFixed(2);

    document.getElementById('interesm').innerHTML=((monto*0.02)/12).toFixed(2);
    document.getElementById('revm').innerHTML=((monto*0.05)/12).toFixed(2);
    document.getElementById('totalm').innerHTML=(((monto*0.02)+(monto*0.05))/12).toFixed(2);
}
});




