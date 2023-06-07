    function clicar(){
        let nome = document.getElementById('nome').value;
        document.getElementById('name').innerHTML = nome

        var email = document.getElementById('email').value;
        document.getElementById('mail').innerHTML = email

        var number = document.getElementById('numero').value;
        document.getElementById('telefone').innerHTML = number

        var endereco = document.getElementById('endereco').value;
        document.getElementById('localizacao').innerHTML = endereco
    }

function empresa() {
    var empresas = document.querySelectorAll('.emp')
    let imagem = document.querySelectorAll('.img')
        if (empresas[0].selected) {
            imagem[0].style.display = "block";
            imagem[1].style.display = "none";
            imagem[2].style.display = "none";
            imagem[3].style.display = "none";

        } else if (empresas[1].selected) {
            imagem[1].style.display = "block";
            imagem[0].style.display = "none";
            imagem[2].style.display = "none";
            imagem[3].style.display = "none";
            
        } else if (empresas[2].selected) {
            imagem[2].style.display = "block";
            imagem[0].style.display = "none";
            imagem[1].style.display = "none";
            imagem[3].style.display = "none";

        } else if (empresas[3].selected) {
            imagem[3].style.display = "block";
            imagem[0].style.display = "none";
            imagem[1].style.display = "none";
            imagem[2].style.display = "none";
        } 
}