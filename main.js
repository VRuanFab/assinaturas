    function clicar() {
        function empresa() {
            var empresas = document.querySelectorAll('.emp')
            let imagem = document.querySelectorAll('.esc')
                if (empresas[0].selected) {
                    //agro
                    imagem[0].style.display = "block";
                    imagem[1].style.display = "none";
                    imagem[2].style.display = "none";
                    imagem[3].style.display = "none";
                    imagem[4].style.display = "none";
                    info(0)
                    localidade()
        
                } else if (empresas[1].selected) {
                    //daf
                    imagem[1].style.display = "block";
                    imagem[0].style.display = "none";
                    imagem[2].style.display = "none";
                    imagem[3].style.display = "none";
                    imagem[4].style.display = "none";
                    info(1)
                    localidade()
                    
                } else if (empresas[2].selected) {
                    //asf
                    imagem[2].style.display = "block";
                    imagem[0].style.display = "none";
                    imagem[1].style.display = "none";
                    imagem[3].style.display = "none";
                    imagem[4].style.display = "none";
                    info(2)
                    localidade()
        
                } else if (empresas[3].selected) {
                    //eng
                    imagem[3].style.display = "block";
                    imagem[0].style.display = "none";
                    imagem[1].style.display = "none";
                    imagem[2].style.display = "none";
                    imagem[4].style.display = "none";
                    info(3)
                    localidade()

                } else if (empresas[4].selected) {
                    //pav
                    imagem[4].style.display = "block";
                    imagem[0].style.display = "none";
                    imagem[1].style.display = "none";
                    imagem[2].style.display = "none";
                    imagem[3].style.display = "none";
                    info(4)
                    localidade()
                }
        }
        empresa()

        function info(n) {
            if (n == 0) {
                    var nome = document.getElementById('nome').value;
                    document.getElementById('nameagr').innerHTML = nome
    
                    var funcao = document.getElementById('funcao').value;
                    document.getElementById('cargoagr').innerHTML = funcao
    
                    var email = document.getElementById('email').value;
                    document.getElementById('mailagr').innerHTML = email
    
                    var number = document.getElementById('numero').value;
                    document.getElementById('telefoneagr').innerHTML = number
    
                    /*var endereco = document.getElementById('endereco').value;
                    document.getElementById('localizacaoagr').innerHTML = endereco*/
            } else if (n == 1) {
                    var nome = document.getElementById('nome').value;
                    document.getElementById('namedaf').innerHTML = nome
        
                    var funcao = document.getElementById('funcao').value;
                    document.getElementById('cargodaf').innerHTML = funcao
        
                    var email = document.getElementById('email').value;
                    document.getElementById('maildaf').innerHTML = email
        
                    var number = document.getElementById('numero').value;
                    document.getElementById('telefonedaf').innerHTML = number
        
                    var endereco = document.getElementById('endereco').value;
                    document.getElementById('localizacaodaf').innerHTML = endereco
            } else if (n == 2) {
                    var nome = document.getElementById('nome').value;
                    document.getElementById('nameasf').innerHTML = nome
        
                    var funcao = document.getElementById('funcao').value;
                    document.getElementById('cargoasf').innerHTML = funcao
        
                    var email = document.getElementById('email').value;
                    document.getElementById('mailasf').innerHTML = email
        
                    var number = document.getElementById('numero').value;
                    document.getElementById('telefoneasf').innerHTML = number
        
                    var endereco = document.getElementById('endereco').value;
                    document.getElementById('localizacaoasf').innerHTML = endereco
            } else if (n == 3) {
                    var nome = document.getElementById('nome').value;
                    document.getElementById('nameeng').innerHTML = nome
                
                    var funcao = document.getElementById('funcao').value;
                    document.getElementById('cargoeng').innerHTML = funcao
                
                    var email = document.getElementById('email').value;
                    document.getElementById('maileng').innerHTML = email
                
                    var number = document.getElementById('numero').value;
                    document.getElementById('telefoneeng').innerHTML = number
                
                    var endereco = document.getElementById('endereco').value;
                    document.getElementById('localizacaoeng').innerHTML = endereco
            } else if (n == 4) {
                    var nome = document.getElementById('nome').value;
                    document.getElementById('namepav').innerHTML = nome
        
                    var funcao = document.getElementById('funcao').value;
                    document.getElementById('cargopav').innerHTML = funcao
        
                    var email = document.getElementById('email').value;
                    document.getElementById('mailpav').innerHTML = email
        
                    var number = document.getElementById('numero').value;
                    document.getElementById('telefonepav').innerHTML = number
        
                    var endereco = document.getElementById('endereco').value;
                    document.getElementById('localizacaopav').innerHTML = endereco
                }
            } //função que vai chamar as informações de estilos diferentes

        function localidade() {
            var localizacao = document.querySelectorAll('.location')
            if (localizacao[0]) {
                enderecos(0)
        }   else if (localizacao[1]) {
                
        }
        }
    }

    function enderecos(base) {
        if (base == 0)
        document.getElementById('localizacaoagr').innerHTML = "Rua Serpa, 255-5 - Cajazeiras, Fortaleza - CE, 60864-440"
        document.getElementById('localizacaodaf').innerHTML = "Rua Serpa, 255-5 - Cajazeiras, Fortaleza - CE, 60864-440"
        document.getElementById('localizacaoasf').innerHTML = "Rua Serpa, 255-5 - Cajazeiras, Fortaleza - CE, 60864-440"
        document.getElementById('localizacaoeng').innerHTML = "Rua Serpa, 255-5 - Cajazeiras, Fortaleza - CE, 60864-440"
        document.getElementById('localizacaopav').innerHTML = "Rua Serpa, 255-5 - Cajazeiras, Fortaleza - CE, 60864-440"
    }