console.log("Ejecutando JS...");

const secretkey = []; //Array vacio para almacenar la clave

function getRandomInt(max) { //Genera un numero entero aleatorio 

  return Math.floor(Math.random() * max); 
}

for (let i = 0; i<4; i++){ //se ejecuta 4 veces, ya que queremos una clave de 4 numeros 

  let rnum = getRandomInt(10); //En cada iteraccion se genera un numero entre el 0 y el 9 (el 10 no se incluye)
  secretkey.push(rnum.toString());//Se convierte en una cadena de texto antes de añadirlo al array

}

for (let j = 0; j < secretkey.length; j++) { //Se imprime en la consola el numero generado
  console.log(j + ' Secret Key '  + secretkey[j])
}

//Elementos de la interfaz del juego
const elemento = {
  clave1: document.getElementById("clave1"),
  clave2: document.getElementById("clave2"),
  clave3: document.getElementById("clave3"),
  clave4: document.getElementById("clave4"),
  start: document.getElementById("start"),
  display: document.getElementById("display"),
}
clave1.innerHTML = "*";
clave2.innerHTML = "*";
clave3.innerHTML = "*";
clave4.innerHTML = "*";

clave1.style.color = "red";
clave2.style.color = "red";
clave3.style.color = "red";
clave4.style.color = "red";

//Estados del Juego
const ESTADO = {
  INIT: 0,
  ADIVINANDO: 1,
  CORRECTO: 2,
}

let estado = ESTADO.INIT;

function juego(ev) {
  if (estado == ESTADO.INIT){

    estado = ESTADO.ADIVINANDO;
    console.log("El juego ha comenzado");  
    display.innerHTML = crono.start();
    
  } else {

   if(estado == ESTADO.ADIVINANDO){
      if (secretkey[0] == ev.target.value) {

        elemento.clave1.innerHTML = secretkey[0];
        clave1.style.color = "green";

      } 
      if (secretkey[1] == ev.target.value) {

        elemento.clave2.innerHTML = secretkey[1];
        clave2.style.color = "green";
          
      } 
      if (secretkey[2] == ev.target.value) {

        elemento.clave3.innerHTML = secretkey[2];
        clave3.style.color = "green";

      }
      if (secretkey[3] == ev.target.value) {

        elemento.clave4.innerHTML = secretkey[3];
        clave4.style.color = "green";
      } 

      if (elemento.clave1.innerHTML === secretkey[0] &&
      elemento.clave2.innerHTML === secretkey[1] &&
      elemento.clave3.innerHTML === secretkey[2] &&
      elemento.clave4.innerHTML === secretkey[3]) {
      console.log("¡Has adivinado la clave!");
      crono.stop();
      }
    }
  }
}









digitos = document.getElementsByClassName("digito")

for (let boton of digitos) {

  boton.onclick = (ev) => {
    juego(ev);
  }
}

reset.onclick = () => {
  // Generar una nueva clave
  console.log("Nueva clave")
  secretkey.length = 0; // Vaciar el array de la clave actual
  for (let i = 0; i < 4; i++) {
    let rnum = getRandomInt(10);
    secretkey.push(rnum.toString());
    console.log(i + ' Secret Key '  + secretkey[i]);
  }

  crono.reset();

  // Reiniciar la interfaz
  elemento.clave1.innerHTML = "*";
  elemento.clave2.innerHTML = "*";
  elemento.clave3.innerHTML = "*";
  elemento.clave4.innerHTML = "*";
  elemento.clave1.style.color = "red";
  elemento.clave2.style.color = "red";
  elemento.clave3.style.color = "red";
  elemento.clave4.style.color = "red";
  
  // Volver al estado inicial
  estado = ESTADO.INIT;
};


