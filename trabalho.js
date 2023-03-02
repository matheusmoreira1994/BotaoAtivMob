

/*
let timer1, timer2; // variáveis para armazenar os timers

function aCaminho() { // função para o "a caminho"
  let duration = 0.1 * 60; // 1 minuto em segundos
  let timer1Display = document.getElementById("btn1");
  timer1 = setInterval (function() {
    duration--;
    timer1Display.innerHTML = "A caminho" // atualiza a exibição
    if (duration <= 0) {
      clearInterval(timer1); // para o timer1
      document.getElementById("btn2").disabled = false; // ativa o botão 2
    }
  }, 1000); //contagem do tempo em ms
}

function entregue() { //função para o entregue
  let timer2Display = document.getElementById("btn2");
    timer2Display.innerHTML = "Feito"; // atualiza a exibição
 }

function durationToString(duration) {
  let seconds = duration % 10;
  return `${seconds.toString().padStart(2, '0')}`;
}
*/


/*
let timer1, timer2; // variáveis para armazenar os timers
let detectFail = false; // variável para controlar se o botão 2 foi habilitado

function reset() {
  clearInterval(timer1)
  clearInterval(timer2);
  detectFail = false;
  document.getElementById("btn1").innerHTML = "A caminho";
  document.getElementById("btn2").innerHTML = "Entregue";
}

function aCaminho() { // função para o "a caminho"
  let duration = 1 * 60; // 1 minuto em segundos
  let timer1Display = document.getElementById("btn1");
  timer1Display.innerHTML = durationToString(duration); // exibe a duração inicial
  timer1 = setInterval(function() {
    duration--;
    timer1Display.innerHTML = durationToString(duration); // atualiza a exibição
    if (duration <= 0) {
      clearInterval(timer1); // para o timer1
      detectFail = true; // habilita o botão 2
      document.getElementById("btn2").disabled = !detectFail; // atualiza o estado do botão 2
    }
  }, 1000); //contagem do tempo em ms
}

function entregue() { //função para o entregue
  if (detectFail) {
    let timer2Display = document.getElementById("btn2");
    timer2Display.innerHTML = "Feito"; // atualiza a exibição
  } else {
    alert("Você perdeu pontos por acionar o botao a caminho e entregue ao mesmo tempo.");
  }
}

function durationToString(duration) {
  let seconds = duration % 10;
  return `${seconds.toString().padStart(2, '0')}`;
}
*/

let timers = [];

function aCaminho() {
  timers.push(new Date());
  console.log(timers)
  if (timers.length == 2) {
    let duration = timers[1].getTime() - timers[0].getTime();
    if (duration < 1000 * 60) {
      alert("Você perdeu ponto por marcar entregue antes de chegar ao destino");
    } else {
      console.log("Feito");
    }
    timers = [];
    location.reload();
  }
}



