let tdIMCs = document.querySelectorAll('.info-imc');

let tdPesos = document.querySelectorAll('.info-peso');
let tdAlturas = document.querySelectorAll('.info-altura');

let pesos = [];
tdPesos.forEach(peso => pesos.push(peso.textContent));
let alturas = [];
tdAlturas.forEach(altura => alturas.push(altura.textContent));


function calcIMC(peso, altura, index){
    let IMC = peso / (altura * altura);
    
    tdIMCs[index].textContent = IMC.toFixed(2);
}

for(let i=0; i<pesos.length; i++){
    calcIMC(pesos[i], alturas[i], i)
}

