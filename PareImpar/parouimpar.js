

function Mostrar(){
    
var inNumero = document.getElementById("inNumero");
var outResposta = document.getElementById("outResposta");

  let numero = Number(inNumero.value);
  
  if(numero % 2===0){
  outResposta.textContent = "Resposta: " + numero + " é Par";

 }else{
outResposta.textContent = "Resposta: " + numero + " é Impar";
}

}
var btnVerificar = document.getElementById("btnVerificar");
btnVerificar.addEventListener("click", Mostrar);