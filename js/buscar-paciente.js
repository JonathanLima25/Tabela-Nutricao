let botaoAdicionar = document.querySelector('#buscar-paciente');

botaoAdicionar.addEventListener("click", function(){
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        let resposta = xhr.responseText;
        let pacientes = JSON.parse(resposta);
        pacientes.forEach(paciente => {
            adicionaPaciente(paciente)
        });
    })
    xhr.send();
})