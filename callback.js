function siguiente(x, done) {
  done(x + 1)
}

function doble(x,done) {
  done(x*2)
}

function imprimir(resultado) {
  console.log("resultado =>" , resultado)
}

function calcularSiguienteEImprimir(resultado){
  r2 = resultado+1
  console.log("siguente del doble de 8 =>" , r2)
}

function calcularDobleEImprimir(resultado){
  r2 = resultado*2
  console.log("doble del siguiente de 8 =>" , r2)
}


siguiente(8, resultado => { 
  console.log('Siguiente de 8 =>', resultado)
})

doble(8, resultado => {
  console.log("Doble de 8 =>" , resultado)
})

doble(8, calcularSiguienteEImprimir)

siguiente(8, calcularDobleEImprimir)

doble(8, calcularDobleEImprimir)