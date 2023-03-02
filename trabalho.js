

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



