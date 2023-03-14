const form = document.getElementById('form-numero');

function confirmador(valorA,valorB){
    if(valorA <= valorB){
        alert("Valor A= " + valorA, " é menor que valor B= " + valorB)
    }else{
        alert("Valor A= " + valorA, " é maior que valor B= " + valorB)
    }
}

form.addEventListener('submit', (e) =>{
    let formEvalido = false;
    e.preventDefault();


    const valorA = document.getElementById('valorA');
    const valorB = document.getElementById('valorB');
    const messagem = `Valor A=${valorA} é menor que o valor B=${valorB}`

    formEvalido = confirmador
        if(confirmador){
            alert(messagem)
        }else{
            alert("valor invalido")
        }
    
        return numerovalido;
    })

console.log(form);