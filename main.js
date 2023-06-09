    function clicar() {
        function empresa() {
            var empresas = document.querySelectorAll('.emp')
            let imagem = document.querySelectorAll('.esc')
                if (empresas[0].selected) {
                    imagem[0].style.display = "block";
                    imagem[1].style.display = "none";
                    imagem[2].style.display = "none";
                    imagem[3].style.display = "none";
                    imagem[4].style.display = "none";
                    agr()
        
                } else if (empresas[1].selected) {
                    imagem[1].style.display = "block";
                    imagem[0].style.display = "none";
                    imagem[2].style.display = "none";
                    imagem[3].style.display = "none";
                    imagem[4].style.display = "none";
                    daf()
                    
                } else if (empresas[2].selected) {
                    imagem[2].style.display = "block";
                    imagem[0].style.display = "none";
                    imagem[1].style.display = "none";
                    imagem[3].style.display = "none";
                    imagem[4].style.display = "none";
                    asf()
        
                } else if (empresas[3].selected) {
                    imagem[3].style.display = "block";
                    imagem[0].style.display = "none";
                    imagem[1].style.display = "none";
                    imagem[2].style.display = "none";
                    imagem[4].style.display = "none";
                    eng()

                } else if (empresas[4].selected) {
                    imagem[4].style.display = "block";
                    imagem[0].style.display = "none";
                    imagem[1].style.display = "none";
                    imagem[2].style.display = "none";
                    imagem[3].style.display = "none";
                    pav()
                }
        }
        empresa()
        
        function agr() {
            var nome = document.getElementById('nome').value;
            document.getElementById('nameagr').innerHTML = nome
    
            var funcao = document.getElementById('funcao').value;
            document.getElementById('cargoagr').innerHTML = funcao
    
            var email = document.getElementById('email').value;
            document.getElementById('mailagr').innerHTML = email
    
            var number = document.getElementById('numero').value;
            document.getElementById('telefoneagr').innerHTML = number
    
            var endereco = document.getElementById('endereco').value;
            document.getElementById('localizacaoagr').innerHTML = endereco
            }
        function daf() {
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
            }
        function asf() {
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
            }
        function eng() {
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
            }
        function pav() {
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
        }