function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight- elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth -elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoCursi = document.getElementsByClassName("modo_cursi")[0];

btnNo.addEventListener('mouseenter' , function(e) {moverPosicionRandom(e.target)});

btnSi.addEventListener('click', function(e){
    alert('Sabia que dirías que si, YA QUIERO VERTE DE NUEVO, ACUERDATE QUE NOS TENEMOS QUE CASAR')

    divModoCursi.style.display = 'block';
    const cancion = new Audio('img\\y2mate.com - La Bella y la Bestia  con letra  La Bella y la Bestia.mp3');
    cancion.play();
});