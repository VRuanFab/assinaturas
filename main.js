window.addEventListener(ramalatv())
    function clicar() {
        //função do onchange principal das empresas
        function empresa() {
            var empresas = document.querySelectorAll('.emp')
            let imagem = document.querySelectorAll('.esc')
            var imagemarray = Array.from(imagem);
            imagemarray.forEach((noimage) => {
                if (empresas[0].selected) {
                    //grupo
                    var grupo = imagem[0]
                    grupo.style.display = "block";
                    noimage.style.display = "none";
                    info(0);
                    localidade(1);
                    bloquear(2);
                    ramalatv();
                    
        
                } else if (empresas[1].selected) {
                    //agro
                    var agro = imagem[1]
                    agro.style.display = "block";
                    noimage.style.display = "none";
                    info(1);
                    localidade(2);
                    bloquear(1);
                    ramalatv();
        
                } else if (empresas[2].selected) {
                    //daf
                    var daf = imagem[2]
                    daf.style.display = "block";
                    noimage.style.display = "none";
                    info(2);
                    localidade(1);
                    bloquear(2);
                    ramalatv();
                    
                } else if (empresas[3].selected) {
                    //asf
                    var asf = imagem[3]
                    asf.style.display = "block";
                    noimage.style.display = "none";
                    info(3);
                    localidade(1);
                    bloquear(2);
                    ramalatv();
        
                } else if (empresas[4].selected) {
                    //eng
                    var eng = imagem[4]
                    eng.style.display = "block";
                    noimage.style.display = "none";
                    info(4);
                    localidade(1);
                    bloquear(2);
                    ramalatv();

                } else if (empresas[5].selected) {
                    //pav
                    var pav = imagem[5]
                    pav.style.display = "block";
                    noimage.style.display = "none";
                    info(5);
                    localidade(1);
                    bloquear(2);
                    ramalatv();
                }
            });
        }
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

                    var f2 = `BEGIN:VCARD\nVERSION:3.0\nN:${nome}\nTEL:${number}\nEMAIL:${email}@grupofornecedora.com.br\nEND:VCARD`
                    const encoded = encodeURIComponent(f2);
                    var link = "https://quickchart.io/qr?text="  + encoded
                    document.getElementById('QRCodeImagegrp').src = link
                    
            } else if (n == 1) {
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

                    var f2 = `BEGIN:VCARD\nVERSION:3.0\nN:${nome}\nTEL:${number}\nEMAIL:${email}@fornecedoracaminhoes.com.br\nEND:VCARD`
                    const encoded = encodeURIComponent(f2);
                    var link = "https://quickchart.io/qr?text="  + encoded
                    document.getElementById('QRCodeImagedaf').src = link
        
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

                        var f2 = `BEGIN:VCARD\nVERSION:3.0\nN:${nome}\nTEL:${number}\nEMAIL:${email}@fornecedoraasfaltos.com.br\nEND:VCARD`
                        const encoded = encodeURIComponent(f2);
                        var link = "https://quickchart.io/qr?text="  + encoded
                        document.getElementById('QRCodeImageasf').src = link
        
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
                    
                        var f2 = `BEGIN:VCARD\nVERSION:3.0\nN:${nome}\nTEL:${number}\nEMAIL:${email}@fornecedoraengelog.com.br\nEND:VCARD`
                        const encoded = encodeURIComponent(f2);
                        var link = "https://quickchart.io/qr?text="  + encoded
                        document.getElementById('QRCodeImageeng').src = link
                
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

                        var f2 = `BEGIN:VCARD\nVERSION:3.0\nN:${nome}\nTEL:${number}\nEMAIL:${email}@pavimentos.com.br\nEND:VCARD`
                        const encoded = encodeURIComponent(f2);
                        var link = "https://quickchart.io/qr?text="  + encoded
                        document.getElementById('QRCodeImagepav').src = link
                }

            }

        //exibe as localidades também na função de onchange
        function localidade(n) {
            var localizacao = document.querySelectorAll('.location')
            if (n == 1){
                let empresa = [grupo, agro, daf, asfaltos, engelog, pavimentos];
                empresa[0] = document.getElementById('localizacaogrp');
                empresa[1] = document.getElementById('localizacaoagr');
                empresa[2] = document.getElementById('localizacaodaf');
                empresa[3] = document.getElementById('localizacaoasf');
                empresa[4] = document.getElementById('localizacaoeng');
                empresa[5] = document.getElementById('localizacaopav');

                empresa.forEach((noempresa) =>{
                    if (localizacao[0].selected) {
                        noempresa.innerHTML = "Rodovia BR 116, Nº 2524 - Km 65 - Cajazeiras, Fortaleza - CE, CEP - 60864-440"
                }   else if (localizacao[1].selected) {
                        noempresa.innerHTML = "Avenida Engenheiro Emiliano Macieira, Nº 100 - Tibiri, São Luís - MA, CEP - 65095-601"
                }    else if (localizacao[2].selected) {
                        noempresa.innerHTML = "Rua Dom Nivaldo Monte, Nº 103 - Emaús, Parnamirim - RN, CEP - 59149-070"
                }   else if (localizacao[3].selected) {
                        noempresa.innerHTML = "Avenida Prefeito Wall Ferraz, Nº 9247 - Lourival Parente, Teresina - PI, CEP - 64022-800"
                }   else if (localizacao[4].selected) {
                        noempresa.innerHTML = "Avenida Ademar Diogenes, Nº 583 - BR 135, KM 349 - São Pedro, Bom Jesus - PI, CEP - 64900-000"
                }
                });
    } else if (n == 2){
       if (localizacao[0].selected){
            document.getElementById('localizacaoagr').innerHTML = "Rodovia BR 116, Nº 2524 - Km 65 - Cajazeiras, Fortaleza - CE"
            document.getElementById('cep').innerHTML = "60864-440"

        } else if (localizacao[1].selected){
            document.getElementById('localizacaoagr').innerHTML = "Avenida Engenheiro Emiliano Macieira, Nº 100 - Tibiri, São Luís - MA"
            document.getElementById('cep').innerHTML = "65095-601"

        } else if (localizacao[2].selected){
            document.getElementById('localizacaoagr').innerHTML = "Rua Dom Nivaldo Monte, Nº 103 - Emaús, Parnamirim - RN"
            document.getElementById('cep').innerHTML = "59149-070"

        } else if (localizacao[3].selected){
            document.getElementById('localizacaoagr').innerHTML = "Avenida Prefeito Wall Ferraz, Nº 9247 - Lourival Parente, Teresina - PI"
            document.getElementById('cep').innerHTML = "64022-800"

        } else if (localizacao[4].selected){
            document.getElementById('localizacaoagr').innerHTML = "Avenida Ademar Diogenes, Nº 583 - BR 135, KM 349 - São Pedro, Bom Jesus - PI"
            document.getElementById('cep').innerHTML = "64900-000"

        }
    }
}
}
    //bloqueia o email da assinatura agro (na qual não usa email)
    function bloquear(n) {
        if (n == 1) {
            let emailbloq = document.getElementById('email')
                emailbloq.disabled = true;
        } else if (n == 2) {
            let emailbloq = document.getElementById('email')
            emailbloq.disabled = false;
        }
    }
    //desbloqueia o email da assinatura agro (para o uso das outras empresas)
    function ramalatv(){
        var ramal = document.getElementById('ramal')
        var ramalativo = document.getElementById('ramalatv')
    if (ramalativo.checked == false){
        ramal.disabled = true
    } else {
        ramal.disabled = false
        document.getElementById('ramalgrp').innerHTML = ramal.value
        document.getElementById('ramalasf').innerHTML = ramal.value
        document.getElementById('ramaleng').innerHTML = ramal.value
        document.getElementById('ramalpav').innerHTML = ramal.value
        document.getElementById('ramalagr').innerHTML = ramal.value
    }
};