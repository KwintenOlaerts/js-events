let hover = document.querySelectorAll(".hoverMe")

function hoveroverdiv (evt) {evt.currentTarget.style.background="white"}

for (i=0; i < hover.length; i++)
{

hover[i].addEventListener("mouseover", hoveroverdiv);
}


// Uitleg: eerst maak je je variabele, en zeg je dat hij
// alle, in dit geval classes moet nemen (.hoverMe")
// Dan creeer je uw functie, 2 opties: ofwel zoals het hier staat.
// Ofwel doe je => en benoem je erna u functie.
// => hoveroverdiv


let appear = document.getElementById("reset")

// function reset (rst) {
//  = "black";
// }


appear.addEventListener("click", function(){
// hover[i].style.backgroundColor = "black";

for (i=0; i < hover.length; i++){
    

 hover[i].style.backgroundColor = "aqua";

}

})




// let appear = document.getElementById("#reset")


// function reset (rst) {

// for (i=0; i < hover.length; i++)
// {
// appear[i].style.background="aqua"
// }
// }
// appear.addEventListener("click", reset)



// }



