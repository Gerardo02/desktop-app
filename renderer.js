const pixels = document.getElementById('pixels-text');

const getWidth = () =>{
    let width = document.documentElement.clientWidth;
    pixels.innerText = `${width}px`;
}

getWidth();
window.addEventListener('resize', getWidth);
const infoVacas = document.getElementById('info-input');
const numVacas = document.getElementById('vacas')
const vacas = 5;
if(infoVacas === 'pene'){
    numVacas.innerHTML = `chingas a tu puta madre`;
}
