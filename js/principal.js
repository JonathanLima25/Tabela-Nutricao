let tdIMCs = document.querySelectorAll('.info-imc');

let tdPesos = document.querySelectorAll('.info-peso');
let tdAlturas = document.querySelectorAll('.info-altura');

let pesos = [];
tdPesos.forEach(peso => pesos.push(peso.textContent));
let alturas = [];
tdAlturas.forEach(altura => alturas.push(altura.textContent));


tdPesos.forEach(peso => {if(peso.textContent<0 || peso.textContent>1000){
    peso.textContent = "Peso Invalido!"
}})

tdAlturas.forEach(altura => {if(altura.textContent<0 || altura.textContent>1000){
    altura.textContent = "Altura Invalido!"
}})

function calcIMC(peso, altura, index){
    let IMC = peso / (altura * altura);
    if(IMC < 5 || IMC >50){
        tdIMCs[index].textContent = "IMC inválido!"
    }
    else{
        tdIMCs[index].textContent = IMC.toFixed(2);
    }
}

for(let i=0; i<pesos.length; i++){
    calcIMC(pesos[i], alturas[i], i)
}
