const botonJv= document.getElementById("boton");

botonJv.onclick = function()
{
    let numero01 = document.getElementById("input01").value;
    let numero02 = document.getElementById("input02").value;
    let numero03 = document.getElementById("input03").value;
    let password = numero01 + numero02 + numero03;
    if(password == "911")
        {
           document.getElementById("salida").innerHTML= "Password 1 correcto"   ;   
           document.querySelector("#salida").style="color: blue; font-weight: bold";
        }
    else if(password=="714")
        { 
            document.getElementById("salida").innerHTML="password 2 correcto";
            document.getElementById("salida").style="color: green;font-weight: bold";
        }
    else
        {
            document.querySelector("#salida").innerHTML="Password Incorrecto"
           document.querySelector("#salida").style="color: orange; font-weight: bold"
        }
}