console.log("Ejecutando js...")
//-- Leer el display del botón 1
const dsp1 = document.getElementById('disp1')

//-- Leer el párrafo identificado como test
//-- Leer el botón identificado como bt1
const btn1 = document.getElementById('bt1') 

//-- Leer el botón identificado como bt2
const btn2 = document.getElementById('bt2')

//-- Configurar el manejador para el evento de
//-- pulsación de botón 1
btn1.onclick = () => {
  //console.log("Click sobre el Botón 1...")

  //dsp1.innerHTML = "Click sobre el Botón 1..."
  dsp1.innerHTML += "  1"

  //dsp1.style.backgroundColor = "Yellow"

    if (dsp1.style.backgroundColor == "") {
        dsp1.style.backgroundColor = "Yellow";
    }
    //si ya tiene color se lo quitamos 
    else {
        dsp1.style.backgroundColor = "";
    }
  
}

btn2.onclick = () => {
    dsp1.innerHTML += "  2"

    dsp1.style.backgroundColor = "red"
}