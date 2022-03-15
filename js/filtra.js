let campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function(){
    
    let pacientes = document.querySelectorAll('.paciente');
    if(this.value.length > 0 ){
        pacientes.forEach(function(paciente){
            let nome = paciente.querySelector('.info-nome').textContent;
            
            let expressao = new RegExp(campoFiltro.value, "i")
            
            if(!expressao.test(nome)){
                paciente.classList.add('invisivel');
            } else {
                paciente.classList.remove('invisivel');
            }
        })
    }else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove('invisivel');
        })
    }
})