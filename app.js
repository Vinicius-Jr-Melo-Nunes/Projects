function MostrarStars() {
  let inEstrelas = document.getElementById("inEstrelas");
  let outMostrarEstrelas = document.getElementById("outMostrarEstrelas");

  let estrelas = Number (inEstrelas.value);

  if (estrelas == 0 || isNaN(estrelas)) {
    inEstrelas.value = "";
    inEstrelas.focus();
    return;
  }
  let soma = "";

  for (let i = 1 ; i <= estrelas; i++) {
    
    for (let j = 1; j <= i; j++) {
        soma += '*'
        
    }
    soma += '\n'; 
}
outMostrarEstrelas.textContent = soma;
}


let btnVerificar = document.getElementById("btnVerificar");
btnVerificar.addEventListener("click", MostrarStars);
