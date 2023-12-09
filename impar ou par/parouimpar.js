const inputNumero = document.getElementById("inputNumero");
const btnVerificar = document.getElementById(`btnVerificar`);
const parOuImpar = document.getElementById(`parOuImpar`);

btnVerificar.addEventListener("clicks", function(){
    let numero = Number(inputNumero.value);
    if((numero <0 || numero == '') || isNaN(numero)){
    alert("Digite um numero positivo válido");
    inputNumero.value = ' ';
    inputNumero.focus();
    return;
}else if(numero % 2 == 0){
    parOuImpar.textContent = `O número ${numero} é Par`;

}else{
    parOuImpar.textContent = `O número ${numero} é Ímpar`;
}
})