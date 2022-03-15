let botao = document.querySelector('#adicionar-paciente');

botao.onclick = function(event){
    event.preventDefault();
    let form = document.querySelector('#form-adiciona');
    
    let paciente = obtemPacienteFormulario(form);

    let pacienteTr = montaTr(paciente);

    let erros = validaPaciente(paciente);

    if(erros.length > 0){
        // let mensagemErro = document.querySelector('');
        // mensagemErro.textContent = erros;
        exibeMensagensErro(erros);
        form.reset();
        return;
    }

    let tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

    form.reset();
}

function exibeMensagensErro(erros){
    let ul = document.querySelector('#mensagens-erro');
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

    if(!validaPeso(paciente.peso)) erros.push("O peso é inválido!");

    if(!validaAltura(paciente.altura)) erros.push("Altura inválida!");

    return erros;
}