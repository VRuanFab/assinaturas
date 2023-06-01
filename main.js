var nome = document.getElementById('nome');
var email = document.getElementById('email');
var number = document.getElementById('numero');
var endereco = document.getElementById('endereco');

function empresa() {
    var empresas = document.querySelectorAll('.emp')

    do
        if (empresas[0].selected) {
            let imagem = document.querySelectorAll('.img')
            imagem[0].style.display = "block";
            imagem[1].style.display = "none";
            imagem[2].style.display = "none";
            imagem[3].style.display = "none";

        } else if (empresas[1].selected) {
            let imagem = document.querySelectorAll('.img')
            imagem[1].style.display = "block";
            imagem[0].style.display = "none";
            imagem[2].style.display = "none";
            imagem[3].style.display = "none";
            
        } else if (empresas[2].selected) {
            let imagem = document.querySelectorAll('.img')
            imagem[2].style.display = "block";
            imagem[0].style.display = "none";
            imagem[1].style.display = "none";
            imagem[3].style.display = "none";

        } else if (empresas[3].selected) {
            let imagem = document.querySelectorAll('.img')
            imagem[3].style.display = "block";
            imagem[0].style.display = "none";
            imagem[1].style.display = "none";
            imagem[2].style.display = "none";
        } 
    while (empresa())
}

