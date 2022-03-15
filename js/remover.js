let pacientes = document.querySelectorAll('.paciente');

let tabela = document.querySelector('tbody');

tabela.addEventListener("dblclick", function(event) {
    let alvo = event.target;
    alvo.parentNode.remove();
})

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        paciente.remove()
    })
})