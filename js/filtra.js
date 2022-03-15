let campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function(){
    console.log(this.value)
    let pacientes = document.querySelectorAll('.paciente');
    pacientes.forEach(function(paciente){
        let nome = paciente.querySelector('.info-nome').textContent;
        
        if(nome != campoFiltro.value){
            paciente.classList.add('invisivel');
        } else {
            paciente.classList.remove('invisivel');
        }
    })
})