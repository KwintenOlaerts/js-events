// reeks 3 oefening 2

// function loseFocus (){ 
//     alert("Bedankt voor uw deelname")
// }

// reeks 3 oefening 3

// document.addEventListener("keydown", keyPress);

// function keyPress(){
//    alert(gegevenNaam.value)
//  }

// reeks 3 oefening 4

// Zorg ervoor dat in het meegeleverde 
// HTML-bestand met de reset-knop de gegevens uit de formuliervelden worden gewist.

// function resetKnop() {
//     name1.value = ""
//     city.value = ""
//     firstName.value = ""
// }

// reeks 3 oefening 5 

let imgs = document.querySelectorAll("img");

imgs.forEach(img =>{
  img.addEventListener("mouseover", change)
})

function change(evt){
  for( var i = 0 ; i < imgs.length ; i++ ){
    if(evt.currentTarget == imgs[i]){
      j = i + 1;
      imgs[i].src = "assets/image" + j + "_2.jpg";
    }
  }
}
