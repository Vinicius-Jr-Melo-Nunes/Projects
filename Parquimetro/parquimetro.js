function MostarResultado() {
  var inValor = document.getElementById("inValor");
  var outTempo = document.getElementById("outTempo");
  var outTroco = document.getElementById("outTroco");

  let valor = Number(inValor.value);

  var TrocoDePermaTrinta = valor - 1;
  var TrocoDePermaSescenta = valor - 1.75;
  var TrocoDePermaCentoeVinte = valor - 3;

  var TempDePermaTrinta = "30 Minutos";
  var TempDePermaSescenta = "60 minutos";
  var TempDePermaCentoeVinte = "120 minutos";
   
 
  if (valor >= 1 && valor < 1.75) {
    outTempo.textContent = "Tempo: " + TempDePermaTrinta;
    outTroco.textContent = "Troco: " + TrocoDePermaTrinta; 
} else if (valor >= 1.75 && valor < 3) {
    
    outTempo.textContent = "Tempo: " + TempDePermaSescenta;
    outTroco.textContent = "Troco: " + TrocoDePermaSescenta;
    
} else{
    outTempo.textContent = "Tempo: " + TempDePermaCentoeVinte;
    outTroco.textContent = "Troco: " + TrocoDePermaCentoeVinte;
    
    if (valor < 1 || valor < (1.75 < 3)) {
        alert ("Valor insuficiente");
        outTempo.textContent ="";
        outTroco.textContent ="";
        inValor.value = "";
        inValor.focus();

        return;
        
      
}
}
}
var btnDeposito = document.getElementById("btnDeposito");
btnDeposito.addEventListener("click", MostarResultado);
