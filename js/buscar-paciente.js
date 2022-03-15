let botaoAdicionar = document.querySelector('#buscar-paciente');


botaoAdicionar.addEventListener("click", function(){
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);
            pacientes.forEach(paciente => {
                adicionaPaciente(paciente)
            });
        }else{
            let mensagemErro = document.querySelector('#erro-busca');
            mensagemErro.classList.remove('invisivel');
            
        }
    })
    xhr.send();
})