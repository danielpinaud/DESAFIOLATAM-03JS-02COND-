let sticker01 = document.getElementById("input01");
let sticker02 = document.getElementById("input02");
let sticker03 = document.getElementById("input03");

sticker01.onchange= function()
{
    sumar();
}
sticker02.onchange= function()
{
    sumar();
}
sticker03.onchange= function()
{
    sumar();
}
function sumar()
{
    let suma = parseInt(sticker01.value) + parseInt(sticker02.value) + parseInt(sticker03.value);
    let parrafo= document.getElementById("salida");

    if(suma == 0)
    {
        parrafo.innerHTML ="ingresa alguna cantidad";
        parrafo.style="color: black; font-weight: medium";
    }
    else if(suma<=10)
    {
        parrafo.innerHTML="llevas "+suma+"  stickers" ;  
        parrafo.style="color: black; font-weight: medium";
    }
    else
    {
      parrafo.innerHTML="llevas muchos sticker";
      parrafo.style="color: black; font-weight: bold";
    }

}