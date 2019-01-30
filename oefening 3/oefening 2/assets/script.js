// Zorg ervoor dat in de meegeleverde HTML-bestand
// , de ene afbeelding wordt vervangen door de andere afbeelding zodra je over de afbeelding hovert.


// function change () {
//     var getFoto = document.getElementById("image1");
//     getFoto.src = "./assets/image1_2.jpg"
    
// }

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
