var numPregunta = 0; //Contador incremental de las preguntas respondidas
var flagPrivado = 0; //Flags que usaremos para saber qué se responde a cada pregunta

function prueba(numPregunta){
  //Usar el valor numPregunta para añadir HTML distinto según convenga

  switch(numPregunta){
  case 1:
      console.log("Hola1");
      document.getElementsByClassName("container").innerHTML = "";
    break;

  default:
      console.log("Hola2");
      document.getElementsByClassName("container").innerHTML += "<button type=\"button\" onClick=\"clic(1);\" id=\"col-1\">"+
        "<h1>This is half of a page</h1>"+
        "<img class=\"static\" src=\"https://lh4.googleusercontent.com/-gZiu96oTuu4/Uag5oWLQHfI/AAAAAAAABSE/pl1W8n91hH0/w140-h165-no/Homer-Static.png\">"+
        "<img class=\"active\" src=\"https://lh4.googleusercontent.com/i1RprwcvxhbN2TAMunNxS4RiNVT0DvlD9FNQCvPFuJ0=w140-h165-no\">"+
        "</button>"+
        "<button type=\"button\" onClick=\"clic(2);\" id=\"col-2\">"+
        "<h1>This is another half of a page</h1>"+
        "</button>";
    break;
  }

}

function clic(opcion){
  numPregunta++;
  console.log(opcion);

  if(numPregunta == 1){
    flagPrivado += opcion;
  }

  console.log(flagPrivado);

  prueba(numPregunta);
}