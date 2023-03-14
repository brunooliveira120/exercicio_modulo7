const form = document.getElementById('form-numero');
const valorA = document.getElementById('valorA');
const valorB = document.getElementById('valorB');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (valorA.value > valorB.value){
        alert("Invalido! Valor A maior que VALOR B.")
    }
    else if(valorA.value < valorB.value){
        alert("Tudo ok! O número B é maior do que o número A")
    }
    else if(valorA.value == valorB.value){
        alert("Número B igual a número A!")

        valorA.value = ''
        valorB.value = ''
    }
})