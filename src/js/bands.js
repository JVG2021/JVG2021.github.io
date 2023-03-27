var timer = 1000;
var segundos = 1;
var Banda = 0;

var contador = -1;
var ChangeIndex = 1;

var slidePosition = 1;

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

function Zeus(n){
  //Cuento las bandas
  var slides = document.getElementsByClassName("Containers");

  switch (n){
    case 1:
      Banda++;
      contador=0;
      break;

    case 2:
      Banda--;
      contador=0;
      break;

    default:
      contador++;
  }

  if (contador==2){
    //console.log("Yo vine a hacer mi laburo");
    SlideShow();
    contador=0;
    Banda++;

    if (ChangeIndex==1){
      SlideShow();
    }

    ChangeIndex = 2;
  }

  if(n!=0){
    //console.log("Printame Esta");
    SlideShow();

    if (ChangeIndex==2){
      SlideShow();
    }

    ChangeIndex = 1;
  }

}

function Cronos(){
  Zeus(0);
  setTimeout(()=>{Cronos()},timer*segundos);
}


function SlideShow() {
  //Inicializo
  var i;

  //Cuento las bandas
  var slides = document.getElementsByClassName("Containers");

    console.log(Banda);

  if (Banda > slides.length-1) {
    Banda = 0;
  }

  if (Banda < 0){
    Banda = 2;
  }

  //Insivilizo las fotos
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  //Muestro la foto
  slides[Banda].style.display = "block";

} 

function funciona(){
  SlideShow();
  Cronos();
}
