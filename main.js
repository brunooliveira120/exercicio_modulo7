const form = document.getElementById('form-numero');
const valorA = document.getElementById('valorA');
const valorB = document.getElementById('valorB');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
})

function confirmador(valorA,valorB){
    if(valorA < valorB){
        alert("Valor A=", + valorA, " é menor que valor B= ", + valorB)
    }else if(valorA = valorB){
        alert("Valor A=", + valorA, " é igual que valor B= ", + valorB)
    }else if(valorA > valorB){
        alert("Valor A=", + valorA, " é maior que valor B= ", + valorB)
    }
    return confirmador
}

console.log(form);