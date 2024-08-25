let botaoNetflix = document.getElementById("botao-netflix");
let menu = document.getElementById("pergunta");
let imgfechar = document.getElementById("img-fechar");

function abacate() {

    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
        imgfechar.id = "img-fechar-girar"
        
    } else {
        menu.style.display = "none";
        imgfechar.id = "img-fechar"
        
    }
}

