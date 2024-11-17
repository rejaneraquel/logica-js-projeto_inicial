alert('Seja bem vindo(a) ao jogo do número secreto');
let numeroSecreto = 29;
let chute = prompt('Escolha um número entre 1 e 30')

if (numeroSecreto == chute) {
  console.log(`Parabéns, você acertou o número secreto ${chute}`)
} else { console.log(`Tente outra vez, não é o número ${chute}`)}