const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');

const relogio = setInterval(function time() {

    let Horas = new Date();
    let hr = Horas.getHours();
    let min = Horas.getMinutes();
    let sec = Horas.getSeconds();

    if(hr < 10) {
        hr = '0' + hr;
    }

    if(min < 10) {
        min = '0' + min;
    }

    if(sec < 10) {
        sec = '0' + sec;
    }

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
})