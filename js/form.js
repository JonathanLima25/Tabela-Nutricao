let botao = document.querySelector('#adicionar-paciente');

botao.onclick = function(event){
    event.preventDefault();
    let form = document.querySelector('#form-adiciona');
    
    let paciente = obtemPacienteFormulario(form);

    adicionaPaciente(paciente);
    let erros = validaPaciente(paciente);

    if(erros.length > 0){

        exibeMensagensErro(erros);
        form.reset();
        return;
    }



    form.reset();
    document.querySelector('#mensagens-erro').innerHTML = "";
}

function adicionaPaciente(paciente){
    let pacienteTr = montaTr(paciente);
    let tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
}

function exibeMensagensErro(erros){
    let ul = document.querySelector('#mensagens-erro');

    ul.innerHTML = "";

    erros.forEach(function(erro){
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function obtemPacienteFormulario(form) {
    let paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}
 function montaTr(paciente) {
    let pacienteTr = document.createElement('tr');

    pacienteTr.classList.add('paciente')

    let nomeTd = montaTd(paciente.nome, 'info-nome');
    let pesoTd = montaTd(paciente.peso, 'info-peso');
    let alturaTd = montaTd(paciente.altura, 'info-altura');
    let gorduraTd = montaTd(paciente.gordura, 'info-gordura');
    let imcTd = montaTd(paciente.imc, 'info-imc');
    
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);


    return pacienteTr
 }

 function montaTd(dado,classe){
    let td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
 }

function validaPaciente(paciente){
    let erros = [];

    if(paciente.nome.length == 0) erros.push("Nome n??o pode ser em branco");

    if(paciente.peso.length == 0) erros.push("Peso n??o pode ser em branco");

    if(paciente.altura.length == 0) erros.push("Altura n??o pode ser em branco");

    if(paciente.gordura.length == 0) erros.push("Gordura n??o pode ser em branco");

    if(!validaPeso(paciente.peso)) erros.push("O peso ?? inv??lido!");

    if(!validaAltura(paciente.altura)) erros.push("Altura inv??lida!");

    return erros;
}