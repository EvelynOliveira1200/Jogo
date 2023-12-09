const inputNumero = document.getElementById('inputNumero');
const btnApostar = document.getElementById('inputApostar');
const btnJogarNovamente = document.getElementById('btnJogarNovamente');
const erros = document.getElementById("erros");
const chances = document.getElementById("chances");
const dicas = document.getElementById('dicas');

const errou = [];
let numeroGerado = Math.floor(Math.random() * 100) + 1;
const numeroDeChances = 6;

btnApostar.addEventListener("click", function ApostarNumero(){
    let numeroApostado = Number(inputNumero.value);
    //Chegar a validade do numero

    if(numeroApostado <=0 || numeroApostado >100 || isNaN(numeroApostado)){
        alert(`Digite um número válido`);
        inputNumero.value = '';
        inputNumero.focus();
        return;
    }

    //Caso apessoa acerte o numero

    if(numeroApostado === numeroGerado){
        alert('Parabéns você acertou o número');
        btnApostar.disable = true;
        btnJogarNovamente.className = "exibe";
        dicas.textContent = `O número sorteado foi: ${numeroGerado}`;

        //Caso não acerte o número
    }else{
        if(errou.indexOf(numeroApostado) >= 0){
            alert(`Você ja apostou esse Número ${numeroApostado}. Tente outro número`);
        }else{
            errou.push(numeroApostado);
            let numeroDeErros = errou.length; 
            let chancesRestantes = numeroDeChances - numeroDeErros;

            errou.textContent = `${numeroDeErros} (${errou.join(',')})`;
            chances.textContent = chancesRestantes;
            
            if(chancesRestantes === 0){
                alert('Suas chances acabaram, reinicie o jogo para tentar novamente');
                btnApostar.disable = true;
                btnJogarNovamente.className = "exibe";
            dicas.textContent = `O jogo terminou!! O numero sorteado foi: ${numeroGerado}`;
            }else{
                let dicaAposta = numeroApostado < numeroGerado ? 'Maior' : 'Menor';
                dicas.textContent = `Dica: Tente um número ${dicaAposta} que o número ${numeroApostado}`;
        
            }

        }
    }
    inputNumero.value = '';
    inputNumero.focus();
    
})
btnJogarNovamente.addEventListener("click", function reiniciar(){
     
})
