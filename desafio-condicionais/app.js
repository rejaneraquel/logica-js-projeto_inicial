// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
/* 
Resolução:
  diaDaSemana = prompt('Qual é o dia da semana?');
  if (diaDaSemana == 'Sábado') {
      alert('Bom fim de semana!');
  } else if (diaDaSemana == 'Domingo') {
      alert('Bom fim de semana!');
  } else {
      alert('Boa semana!');
  }
*/

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
/*
Resolução
numeroDigitado = prompt('Digite um número');
if (numeroDigitado > 0) {
  alert(`É um número positivo`)
} else {
  alert(`É um número negativo`)  
};
*/

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
/*
Resolução
pontuacao = prompt('Digite aqui sua pontuação')
if (pontuacao >= 100) { alert('Parabéns, você venceu') }
else { alert('Tente novamente para ganhar')}
*/

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
/*
Resolução
saldo = prompt('Digite o valor do seu saldo');
alert(`O valor do seu saldo é R$${saldo},00`)
*/

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt('Qual o seu nome?');
alert(`Boas vindas ${nome}`);