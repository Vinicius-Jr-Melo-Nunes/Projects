function MostrarVelocidade() {
  var inVelocidade = document.getElementById("inVelocidade");
  var inCondutor = document.getElementById("inCondutor");
  var outSituacao = document.getElementById("outSituacao");

  let velocidade = Number(inVelocidade.value);
  let condutor = Number(inCondutor.value);
  
  /*if((inCondutor.value =='' || inVelocidade.value =='') || (isNaN(inVelocidade) || isNaN(inCondutor))) {
    alert("Dados Invalidos! Por favor, digite novamente...")
    inCondutor.value = '';
    inVelocidade.value = '';
    inVelocidade.focus();
    return;
  } */
  

  if (condutor <= velocidade) {
    outSituacao.textContent = "Sem multa!";
    outSituacao.style.color = "green";
  } else {
    var multa = velocidade * 1.2;
    if (condutor <= multa) {
      outSituacao.textContent = "Multa leve!";
      outSituacao.style.color = "orange";
    } else {
      outSituacao.textContent = "Multa Grave!";
      outSituacao.style.color = "red";
    }
  }
}
alert("Bem vindo ao Sistema de multas!");
var btnVelocidade = document.getElementById("btnVelocidade");
btnVelocidade.addEventListener("click", MostrarVelocidade);
