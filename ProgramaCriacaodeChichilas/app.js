


function Chinchilas() {
  let inNum = document.getElementById("inNum");
  let inYear = document.getElementById("inYear");
  let outResult = document.getElementById("outResult");
  

  let num = Number(inNum.value);
  let year = Number(inYear.value);
  
  
 
  let quant = "";
  
  if (isNaN(num) || isNaN(year) || num == "" || year == "") {
    alert("Dados invalidos. Por favor, digite os dados novamente");
    inNum.value = "";
    inYear.value = "";
    inNum.focus();

    return;
  }
   
  
  for (let i = 1; i <= year; i++) {
    
    quant = quant + i + "º"+ " Ano: " + num + " Chinchilas" + "\n";
    num= num*3;
    
      
}
outResult.textContent = quant;
}

let btnPlay = document.getElementById("btnPlay");
btnPlay.addEventListener ("click",Chinchilas);