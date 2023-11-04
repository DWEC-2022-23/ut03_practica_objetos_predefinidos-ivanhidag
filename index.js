

document.getElementById("reyesMagos").onclick = function(){
    reyesMagos(new Date());
}

function reyesMagos(date){
    var finalDate = new Date('2024-1-5');
    
    var day_as_milliseconds = 86400000;
    var diff_in_millisenconds = finalDate - date;
    var diff_in_days = diff_in_millisenconds / day_as_milliseconds;
    
    document.getElementById("dias").innerHTML = "Faltan: " + Math.round(diff_in_days) + " días";
}

document.getElementById("fechaHora").onclick = function(){
    document.getElementById("fecha").innerHTML = getTimeString();
    alert(getTimeString());
}

function getTimeString()
{
    let timeString = "Hoy es "+dayOfWeek()+", "+todayInNumber()+" de "+currentMonth() + " de "+currentYear()+" y son las "+currentTime()+" horas";
    return timeString;
}

function dayOfWeek()
{
    const d = new Date();
    let day = d.getDay()
    switch(day){
        case 1: return "lunes";
        case 2: return "martes";
        case 3: return "miercoles";
        case 4: return "jueves";
        case 5: return "viernes";
        case 6: return "sabado";
        case 0: return "domingo";
    }
}

function todayInNumber(){
    const d = new Date();
    if(d.toLocaleDateString().slice(1,2) == "/"){return d.toLocaleDateString().slice(0,1);}
    else{return d.toLocaleDateString().slice(0,2);}
}

function currentMonth(){
    const d = new Date();
    let month= d.getMonth();
    switch(month){
        case 1: return "Enero";
        case 2: return "Febrero";
        case 3: return "Marzo";
        case 4: return "Abril";
        case 5: return "Mayo";
        case 6: return "Junio";
        case 7: return "Julio";
        case 8: return "Agosto";
        case 9: return "Septiembre";
        case 10: return "Octubre";
        case 11: return "Noviembre";
        case 0: return "Diciembre";
    }
}

function currentYear()
{
    const d = new Date();
    return d.getFullYear();
}

function currentTime()
{
    const d = new Date();
    return d.toTimeString().slice(0,5);
}

document.getElementById("calcular").onclick = function()
{
    if(!isNaN(document.getElementById("radio").value))
    {
        let area = calcularAreaCirculo(document.getElementById("radio").value);
        document.getElementById("area").innerHTML = "Area = "+area;
        alert(calcularAreaCirculo(document.getElementById("radio").value));
    }else
    {
        alert("Introduzca un numero");
    }
}

function calcularAreaCirculo(radio)
{
    radio = Math.PI * radio * radio;
    return radio.toFixed(2);
}

document.getElementById("aleatorio").onclick = function()
{
    let num1 = document.getElementById("comienzo").value;
    let num2 = document.getElementById("fin").value;
    if(!isNaN(num1) && !isNaN(num2) && num1 < num2)
    {
        document.getElementById("resultado").innerHTML = ""+numeroAleatorio(num1,num2);
    }else
    {
        alert("Introduzca correctamente los numeros");
    }
}

function numeroAleatorio(min, max)
{
    return Math.round(Math.random() * (max - min) + min)+1;
}

document.getElementById("primeraMitad").onclick = function()
{   
    let cadena = document.getElementById("cadena").value;
    document.getElementById("respuesta").innerHTML = primeraMitad(cadena);
}

function primeraMitad(cadena)
{
    return  cadena.slice(0,cadena.length/2);
}

document.getElementById("ultimoCaracter").onclick = function()
{
    let cadena = document.getElementById("cadena").value;
    document.getElementById("respuesta").innerHTML = ultimoCaracter(cadena);
}

function ultimoCaracter(cadena)
{
    return  cadena.slice(cadena.length-1,cadena.length);
}

document.getElementById("reverse").onclick = function()
{
    let cadena = document.getElementById("cadena").value;
    document.getElementById("respuesta").innerHTML = invertir(cadena);
}

function invertir(cadena) 
{
    var separar = cadena.split("");
    var reverse = separar.reverse();
    var juntar = reverse.join("");
    return juntar;
}

document.getElementById("guiones").onclick = function()
{
    let cadena = document.getElementById("cadena").value;
    document.getElementById("respuesta").innerHTML = cadenaGuiones(cadena);
}

function cadenaGuiones(cadena) 
{
    var separar = cadena.split("");
    var juntar = "";
    for(let i=0;i<cadena.length;i++)
    {
        if(i==0)
        {
            juntar = juntar  + separar[i];
        }else
        {
            juntar = juntar  + "-" + separar[i];
        }
    }
    return juntar;
}

document.getElementById("vocales").onclick = function()
{
    let cadena = document.getElementById("cadena").value;
    document.getElementById("respuesta").innerHTML = contarVocales(cadena);
}

function contarVocales(cadena)
{ 
    const count = cadena.match(/[aeiou]/gi).length;
    return count;
}

