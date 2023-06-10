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
                    info(0);
                    localidade();
        
                } else if (empresas[1].selected) {
                    //daf
                    imagem[1].style.display = "block";
                    imagem[0].style.display = "none";
                    imagem[2].style.display = "none";
                    imagem[3].style.display = "none";
                    imagem[4].style.display = "none";
                    info(1);
                    localidade();
                    
                } else if (empresas[2].selected) {
                    //asf
                    imagem[2].style.display = "block";
                    imagem[0].style.display = "none";
                    imagem[1].style.display = "none";
                    imagem[3].style.display = "none";
                    imagem[4].style.display = "none";
                    info(2);
                    localidade();
        
                } else if (empresas[3].selected) {
                    //eng
                    imagem[3].style.display = "block";
                    imagem[0].style.display = "none";
                    imagem[1].style.display = "none";
                    imagem[2].style.display = "none";
                    imagem[4].style.display = "none";
                    info(3);
                    localidade();

                } else if (empresas[4].selected) {
                    //pav
                    imagem[4].style.display = "block";
                    imagem[0].style.display = "none";
                    imagem[1].style.display = "none";
                    imagem[2].style.display = "none";
                    imagem[3].style.display = "none";
                    info(4);
                    localidade();
                }
        }
        empresa();

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

            } else if (n == 1) {
                    var nome = document.getElementById('nome').value;
                    document.getElementById('namedaf').innerHTML = nome
        
                    var funcao = document.getElementById('funcao').value;
                    document.getElementById('cargodaf').innerHTML = funcao
        
                    var email = document.getElementById('email').value;
                    document.getElementById('maildaf').innerHTML = email
        
                    var number = document.getElementById('numero').value;
                    document.getElementById('telefonedaf').innerHTML = number
        
            } else if (n == 2) {
                    var nome = document.getElementById('nome').value;
                    document.getElementById('nameasf').innerHTML = nome
        
                    var funcao = document.getElementById('funcao').value;
                    document.getElementById('cargoasf').innerHTML = funcao
        
                    var email = document.getElementById('email').value;
                    document.getElementById('mailasf').innerHTML = email
        
                    var number = document.getElementById('numero').value;
                    document.getElementById('telefoneasf').innerHTML = number
        
            } else if (n == 3) {
                    var nome = document.getElementById('nome').value;
                    document.getElementById('nameeng').innerHTML = nome
                
                    var funcao = document.getElementById('funcao').value;
                    document.getElementById('cargoeng').innerHTML = funcao
                
                    var email = document.getElementById('email').value;
                    document.getElementById('maileng').innerHTML = email
                
                    var number = document.getElementById('numero').value;
                    document.getElementById('telefoneeng').innerHTML = number
                
            } else if (n == 4) {
                    var nome = document.getElementById('nome').value;
                    document.getElementById('namepav').innerHTML = nome
        
                    var funcao = document.getElementById('funcao').value;
                    document.getElementById('cargopav').innerHTML = funcao
        
                    var email = document.getElementById('email').value;
                    document.getElementById('mailpav').innerHTML = email
        
                    var number = document.getElementById('numero').value;
                    document.getElementById('telefonepav').innerHTML = number
        
                }
            } //função que vai chamar as informações de estilos diferentes

        function localidade() {
            var localizacao = document.querySelectorAll('.location')
            if (localizacao[0].selected) {
                enderecos(0);
        }   else if (localizacao[1].selected) {
                enderecos(1)
        }   else if (localizacao[2].selected) {
                enderecos(2);
        } else if (localizacao[3].selected) {
                enderecos(3);
        } else if (localizacao[4].selected) {
                enderecos(4);
        }
        }
        function enderecos(base) {
            if (base == 0) {
            document.getElementById('localizacaoagr').innerHTML = "Rodovia BR 116, 2524 - Km 65 - Cajazeiras, Fortaleza - CE"
            document.getElementById('cep').innerHTML = "60864-440"
            document.getElementById('localizacaodaf').innerHTML = "Rodovia BR 116, 2524 - Km 65 - Cajazeiras, Fortaleza - CE"
            document.getElementById('localizacaoasf').innerHTML = "Rodovia BR 116, 2524 - Km 65 - Cajazeiras, Fortaleza - CE"
            document.getElementById('localizacaoeng').innerHTML = "Rodovia BR 116, 2524 - Km 65 - Cajazeiras, Fortaleza - CE"
            document.getElementById('localizacaopav').innerHTML = "Rodovia BR 116, 2524 - Km 65 - Cajazeiras, Fortaleza - CE"
        }   else if(base == 1) {
            document.getElementById('localizacaoagr').innerHTML = "Avenida Engenheiro Emiliano Macieira, 100 - Tibiri, São Luís - MA"
            document.getElementById('cep').innerHTML = "65095-601"
            document.getElementById('localizacaodaf').innerHTML = "Avenida Engenheiro Emiliano Macieira, 100 - Tibiri, São Luís - MA"
            document.getElementById('localizacaoasf').innerHTML = "Avenida Engenheiro Emiliano Macieira, 100 - Tibiri, São Luís - MA"
            document.getElementById('localizacaoeng').innerHTML = "Avenida Engenheiro Emiliano Macieira, 100 - Tibiri, São Luís - MA"
            document.getElementById('localizacaopav').innerHTML = "Avenida Engenheiro Emiliano Macieira, 100 - Tibiri, São Luís - MA"
        } else if(base == 2) {
            document.getElementById('localizacaoagr').innerHTML = "Rua Dom Nivaldo Monte, 103 - Emaús, Parnamirim - RN"
            document.getElementById('cep').innerHTML = "59149-070"
            document.getElementById('localizacaodaf').innerHTML = "Rua Dom Nivaldo Monte, 103 - Emaús, Parnamirim - RN"
            document.getElementById('localizacaoasf').innerHTML = "Rua Dom Nivaldo Monte, 103 - Emaús, Parnamirim - RN"
            document.getElementById('localizacaoeng').innerHTML = "Rua Dom Nivaldo Monte, 103 - Emaús, Parnamirim - RN"
            document.getElementById('localizacaopav').innerHTML = "Rua Dom Nivaldo Monte, 103 - Emaús, Parnamirim - RN"
        } else if(base == 3) {
            document.getElementById('localizacaoagr').innerHTML = "Avenida Prefeito Wall Ferraz, 9247 - Lourival Parente, Teresina - PI"
            document.getElementById('cep').innerHTML = "64022-800"
            document.getElementById('localizacaodaf').innerHTML = "Avenida Prefeito Wall Ferraz, 9247 - Lourival Parente, Teresina - PI"
            document.getElementById('localizacaoasf').innerHTML = "Avenida Prefeito Wall Ferraz, 9247 - Lourival Parente, Teresina - PI"
            document.getElementById('localizacaoeng').innerHTML = "Avenida Prefeito Wall Ferraz, 9247 - Lourival Parente, Teresina - PI"
            document.getElementById('localizacaopav').innerHTML = "Avenida Prefeito Wall Ferraz, 9247 - Lourival Parente, Teresina - PI"
        } else if(base == 4) {
            document.getElementById('localizacaoagr').innerHTML = "Avenida Ademar Diogenes, 583 - BR 135, KM 349 - São Pedro, Bom Jesus - PI"
            document.getElementById('cep').innerHTML = "64900-000"
            document.getElementById('localizacaodaf').innerHTML = "Avenida Ademar Diogenes, 583 - BR 135, KM 349 - São Pedro, Bom Jesus - PI"
            document.getElementById('localizacaoasf').innerHTML = "Avenida Ademar Diogenes, 583 - BR 135, KM 349 - São Pedro, Bom Jesus - PI"
            document.getElementById('localizacaoeng').innerHTML = "Avenida Ademar Diogenes, 583 - BR 135, KM 349 - São Pedro, Bom Jesus - PI"
            document.getElementById('localizacaopav').innerHTML = "Avenida Ademar Diogenes, 583 - BR 135, KM 349 - São Pedro, Bom Jesus - PI"
        }
        }
    }