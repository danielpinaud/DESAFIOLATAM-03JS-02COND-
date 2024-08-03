let imgJv= document.getElementById("Img01");
let visualizar = false;

imgJv.onclick =function()
    {
        if(!visualizar)
            {
                imgJv.style.border = "2px solid #ff0000";
             }
        else
             { 
                imgJv.style.border = "0px solid #ff0000";

             }

        visualizar = !visualizar;

      

    }