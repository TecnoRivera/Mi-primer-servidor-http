console.log("Hola JS del lado del cliente");

let button = document.getElementById('boton-ocultar');
let button2 = document.getElementById('boton-mostrar');

function hideImage(){
    let image = document.getElementById('logo-fing');
    image.style = 'display:none';
}

function showImage(){
    let image2 = document.getElementById('logo-fing');
    image2.style = 'display:inline';
}

button.onclick = hideImage;
button2.onclick = showImage;