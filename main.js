window.addEventListener('aberto', clicar())
    function clicar() {
        //função do onchange principal das empresas
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
                    imagem[4].style.display = "none";
                    imagem[5].style.display = "none";
                    info(0);
                    localidade();
                    desbloquear()
                    formato();
        
                } else if (empresas[1].selected) {
                    //agro
                    imagem[1].style.display = "block";
                    imagem[0].style.display = "none";
                    imagem[2].style.display = "none";
                    imagem[3].style.display = "none";
                    imagem[4].style.display = "none";
                    imagem[5].style.display = "none";
                    info(1);
                    localidade();
                    bloquear();
                    formato();
        
                } else if (empresas[2].selected) {
                    //daf
                    imagem[2].style.display = "block";
                    imagem[0].style.display = "none";
                    imagem[1].style.display = "none";
                    imagem[3].style.display = "none";
                    imagem[4].style.display = "none";
                    imagem[5].style.display = "none";
                    info(2);
                    localidade();
                    desbloquear();
                    
                } else if (empresas[3].selected) {
                    //asf
                    imagem[3].style.display = "block";
                    imagem[0].style.display = "none";
                    imagem[1].style.display = "none";
                    imagem[2].style.display = "none";
                    imagem[4].style.display = "none";
                    imagem[5].style.display = "none";
                    info(3);
                    localidade();
                    desbloquear();
        
                } else if (empresas[4].selected) {
                    //eng
                    imagem[4].style.display = "block";
                    imagem[0].style.display = "none";
                    imagem[1].style.display = "none";
                    imagem[2].style.display = "none";
                    imagem[3].style.display = "none";
                    imagem[5].style.display = "none";
                    info(4);
                    localidade();
                    desbloquear();

                } else if (empresas[5].selected) {
                    //pav
                    imagem[5].style.display = "block";
                    imagem[0].style.display = "none";
                    imagem[1].style.display = "none";
                    imagem[2].style.display = "none";
                    imagem[3].style.display = "none";
                    imagem[4].style.display = "none";
                    info(5);
                    localidade();
                    desbloquear();
                }
        }

        //chamada da função acima
        empresa();

        //função que exibe as informações escritas
        function info(n) {
            if (n == 0) {
                var nome = document.getElementById('nome').value;
                document.getElementById('namegrp').innerHTML = nome
        
                var funcao = document.getElementById('funcao').value;
                document.getElementById('cargogrp').innerHTML = funcao
        
                var email = document.getElementById('email').value;
                document.getElementById('mailgrp').innerHTML = email + "@grupofornecedora.com.br"
        
                var number = document.getElementById('numero').value;
                number = number.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
                document.getElementById('telefonegrp').innerHTML = number

                
                if (nome.value === ""){
                    
                }else {
                    var GoogleChartAPI = `https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=${nome}${email}${number}`
                document.getElementById('QRCodeImage').src = GoogleChartAPI;
                }

            } 
            if (n == 1) {
                var nome = document.getElementById('nome').value;
                document.getElementById('nameagr').innerHTML = nome

                var funcao = document.getElementById('funcao').value;
                document.getElementById('cargoagr').innerHTML = funcao

                var number = document.getElementById('numero').value;
                number = number.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
                document.getElementById('telefoneagr').innerHTML = number

            }else if (n == 2) {
                var nome = document.getElementById('nome').value;
                document.getElementById('namedaf').innerHTML = nome
        
                var funcao = document.getElementById('funcao').value;
                document.getElementById('cargodaf').innerHTML = funcao
        
                var email = document.getElementById('email').value;
                document.getElementById('maildaf').innerHTML = email + "@fornecedoracaminhoes.com.br"
        
                var number = document.getElementById('numero').value;
                number = number.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
                document.getElementById('telefonedaf').innerHTML = number

                var GoogleChartAPI = `https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=${nome}${email}${number}`
                document.getElementById('QRCodeImage').src = GoogleChartAPI;
        
            } else if (n == 3) {
                    var nome = document.getElementById('nome').value;
                    document.getElementById('nameasf').innerHTML = nome
        
                    var funcao = document.getElementById('funcao').value;
                    document.getElementById('cargoasf').innerHTML = funcao
        
                    var email = document.getElementById('email').value;
                    document.getElementById('mailasf').innerHTML = email + "@fornecedoraasfaltos.com.br"
        
                    var number = document.getElementById('numero').value;
                    number = number.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
                    document.getElementById('telefoneasf').innerHTML = number

                    var GoogleChartAPI = `https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=${nome}${email}${number}`
                document.getElementById('QRCodeImage').src = GoogleChartAPI;
        
            } else if (n == 4) {
                    var nome = document.getElementById('nome').value;
                    document.getElementById('nameeng').innerHTML = nome
                
                    var funcao = document.getElementById('funcao').value;
                    document.getElementById('cargoeng').innerHTML = funcao
                
                    var email = document.getElementById('email').value;
                    document.getElementById('maileng').innerHTML = email + "@fornecedoraengelog.com.br"
                
                    var number = document.getElementById('numero').value;
                    number = number.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
                    document.getElementById('telefoneeng').innerHTML = number

                    var GoogleChartAPI = `https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=${nome}${email}${number}`
                    document.getElementById('QRCodeImage').src = GoogleChartAPI;
                
            } else if (n == 5) {
                    var nome = document.getElementById('nome').value;
                    document.getElementById('namepav').innerHTML = nome
        
                    var funcao = document.getElementById('funcao').value;
                    document.getElementById('cargopav').innerHTML = funcao
        
                    var email = document.getElementById('email').value;
                    document.getElementById('mailpav').innerHTML = email + "@fornecedorapavimentos.com.br"
        
                    var number = document.getElementById('numero').value;
                    number = number.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
                    document.getElementById('telefonepav').innerHTML = number

                    var GoogleChartAPI = `https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=${nome}${email}${number}`
                    document.getElementById('QRCodeImage').src = GoogleChartAPI;
                }
            }

        //exibe as localidades também na função de onchange
        function localidade() {
            var localizacao = document.querySelectorAll('.location')
            if (localizacao[0].selected) {
                enderecos(0);
        }   else if (localizacao[1].selected) {
                enderecos(1)
        }    else if (localizacao[2].selected) {
                enderecos(2) 
        }   else if (localizacao[3].selected) {
                enderecos(3);
        }   else if (localizacao[4].selected) {
                enderecos(4);
        }   else if (localizacao[5].selected) {
                enderecos(5);
        }
        }

        //descreve qual empresa é para a função localidade
        function enderecos(base) {
            if (base == 0) {
            document.getElementById('localizacaogrp').innerHTML = "Rodovia BR 116, 2524 - Km 65 - Cajazeiras, Fortaleza - CE"
            document.getElementById('localizacaoagr').innerHTML = "Rodovia BR 116, 2524 - Km 65 - Cajazeiras, Fortaleza - CE"
            document.getElementById('cep').innerHTML = "60864-440"
            document.getElementById('localizacaodaf').innerHTML = "Rodovia BR 116, 2524 - Km 65 - Cajazeiras, Fortaleza - CE"
            document.getElementById('localizacaoasf').innerHTML = "Rodovia BR 116, 2524 - Km 65 - Cajazeiras, Fortaleza - CE"
            document.getElementById('localizacaoeng').innerHTML = "Rodovia BR 116, 2524 - Km 65 - Cajazeiras, Fortaleza - CE"
            document.getElementById('localizacaopav').innerHTML = "Rodovia BR 116, 2524 - Km 65 - Cajazeiras, Fortaleza - CE"
        }   else if(base == 1) {
            document.getElementById('localizacaogrp').innerHTML = "Avenida Engenheiro Emiliano Macieira, 100 - Tibiri, São Luís - MA"
            document.getElementById('localizacaoagr').innerHTML = "Avenida Engenheiro Emiliano Macieira, 100 - Tibiri, São Luís - MA"
            document.getElementById('cep').innerHTML = "65095-601"
            document.getElementById('localizacaodaf').innerHTML = "Avenida Engenheiro Emiliano Macieira, 100 - Tibiri, São Luís - MA"
            document.getElementById('localizacaoasf').innerHTML = "Avenida Engenheiro Emiliano Macieira, 100 - Tibiri, São Luís - MA"
            document.getElementById('localizacaoeng').innerHTML = "Avenida Engenheiro Emiliano Macieira, 100 - Tibiri, São Luís - MA"
            document.getElementById('localizacaopav').innerHTML = "Avenida Engenheiro Emiliano Macieira, 100 - Tibiri, São Luís - MA"
        }   else if(base == 2) {
            document.getElementById('localizacaogrp').innerHTML = "Rua Dom Nivaldo Monte, 103 - Emaús, Parnamirim - RN"
            document.getElementById('localizacaoagr').innerHTML = "Rua Dom Nivaldo Monte, 103 - Emaús, Parnamirim - RN"
            document.getElementById('cep').innerHTML = "59149-070"
            document.getElementById('localizacaodaf').innerHTML = "Rua Dom Nivaldo Monte, 103 - Emaús, Parnamirim - RN"
            document.getElementById('localizacaoasf').innerHTML = "Rua Dom Nivaldo Monte, 103 - Emaús, Parnamirim - RN"
            document.getElementById('localizacaoeng').innerHTML = "Rua Dom Nivaldo Monte, 103 - Emaús, Parnamirim - RN"
            document.getElementById('localizacaopav').innerHTML = "Rua Dom Nivaldo Monte, 103 - Emaús, Parnamirim - RN"
        }   else if(base == 3) {
            document.getElementById('localizacaogrp').innerHTML = "Avenida Prefeito Wall Ferraz, 9247 - Lourival Parente, Teresina - PI"
            document.getElementById('localizacaoagr').innerHTML = "Avenida Prefeito Wall Ferraz, 9247 - Lourival Parente, Teresina - PI"
            document.getElementById('cep').innerHTML = "64022-800"
            document.getElementById('localizacaodaf').innerHTML = "Avenida Prefeito Wall Ferraz, 9247 - Lourival Parente, Teresina - PI"
            document.getElementById('localizacaoasf').innerHTML = "Avenida Prefeito Wall Ferraz, 9247 - Lourival Parente, Teresina - PI"
            document.getElementById('localizacaoeng').innerHTML = "Avenida Prefeito Wall Ferraz, 9247 - Lourival Parente, Teresina - PI"
            document.getElementById('localizacaopav').innerHTML = "Avenida Prefeito Wall Ferraz, 9247 - Lourival Parente, Teresina - PI"
        }   else if(base == 4) {
            document.getElementById('localizacaogrp').innerHTML = "Avenida Ademar Diogenes, 583 - BR 135, KM 349 - São Pedro, Bom Jesus - PI"
            document.getElementById('localizacaoagr').innerHTML = "Avenida Ademar Diogenes, 583 - BR 135, KM 349 - São Pedro, Bom Jesus - PI"
            document.getElementById('cep').innerHTML = "64900-000"
            document.getElementById('localizacaodaf').innerHTML = "Avenida Ademar Diogenes, 583 - BR 135, KM 349 - São Pedro, Bom Jesus - PI"
            document.getElementById('localizacaoasf').innerHTML = "Avenida Ademar Diogenes, 583 - BR 135, KM 349 - São Pedro, Bom Jesus - PI"
            document.getElementById('localizacaoeng').innerHTML = "Avenida Ademar Diogenes, 583 - BR 135, KM 349 - São Pedro, Bom Jesus - PI"
            document.getElementById('localizacaopav').innerHTML = "Avenida Ademar Diogenes, 583 - BR 135, KM 349 - São Pedro, Bom Jesus - PI"
        }
    }
    }

    //bloqueia o email da assinatura agro (na qual não usa email)
    function bloquear() {
        let emailbloq = document.getElementById('email')
            emailbloq.disabled = true;
    }
    //desbloqueia o email da assinatura agro (para o uso das outras empresas)
    function desbloquear() {
        let emailbloq = document.getElementById('email')
            emailbloq.disabled = false;
    }