let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage();
}, 3000)

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

function preencher(string){
var pizza = string+".";
var resultado = document.getElementById("sabor");
resultado.focus();
resultado.innerHTML = "Olá, gostaria de " + pizza;
}
