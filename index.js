let timer = document.getElementById("temp")
var inicio = document.getElementById("iniciar")
var pause = document.getElementById("pausar")
var zero = document.getElementById("zera")
let horas = '00'
let minutos = '00'
let segundos = '00'
let centesimos = '00'

let cron;


timer.innerHTML = '00:00:00:00'


function iniciar(){
  cron = setInterval(() => { tempo() }, 10)
  inicio.style.cursor = "not-allowed"
  pause.style.cursor = 'pointer'
  zero.style.cursor = 'pointer'
  inicio.disabled = false
  pause.disabled = false
  zero.disabled = false
}

function pausar(){
  clearInterval(cron)
  inicio.style.cursor = 'pointer'
  pause.style.cursor = 'not-allowed'
  inicio.disabled = false
  pause.disabled = true
 
}

function zerar(){
  inicio.style.cursor = 'pointer'
  pause.style.cursor = 'not-allowed'
  zero.style.cursor = 'not-allowed'
  inicio.disabled = false
  pause.disabled = true

  timer.innerHTML = `${horas = '00'}:${minutos = '00'}:${segundos = '00'}:${centesimos = '00'}`
  pausar()
}





function tempo(){
  if(centesimos < 100){
    centesimos++
    if(centesimos < 10){
      centesimos = '0' + centesimos
    }
    timer.innerHTML = `${horas}:${minutos}:${segundos}:${centesimos}`
  }

  if(centesimos == 99){
    centesimos = 0
    segundos++
    if(segundos < 10){
      segundos = '0'+segundos

    }


    if(segundos == 60 ){
      segundos = '00'
      minutos++
      if(minutos < 10){
        minutos = '0' + minutos
    }

    if(minutos == 60){
      minutos = '00'
      horas++
      if(horas < 10){
        horas = '0' + horas
      }
    }
    }

  }



 




}
