const form = document.getElementById('form-numero');

function confirmador(valorA,valorB){
    if(valorA <= valorB){
        alert("Valor A=" + valorA, " é menor que valor B= " + valorB)
    }else{
        alert("Valor A=" + valorA, " é maior que valor B= " + valorB)
    }
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();


    const valorA = document.getElementById('valorA');
    const valorB = document.getElementById('valorB');

        if(confirmador){
            alert(messagem)
        }else{
            alert("valor invalido")
        }
    
        return numerovalido;
    })

console.log(form);