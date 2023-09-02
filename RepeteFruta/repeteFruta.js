function Fruit() {
  let inFruit = document.getElementById("inFruit");
  let inQuant = document.getElementById("inQuant");
  let ouResult = document.getElementById("outResult");

  let fruit = inFruit.value;
  let quant = Number(inQuant.value);

  if ((fruit == "" && quant == "") || isNaN(quant)) {
    alert("Dados inseridos incorretamente. Por favor, digite novamente...");
    inFruit.value = "";
    inQuant.value = "";
    inFruit.focus();

    return;
  }
  let resulFruit = "";
  for (let i = 1; i <= quant; i++) {
    if (i == 1) {
      resulFruit = fruit + "" + resulFruit;
    } else {
      resulFruit = fruit + "*" + resulFruit;
    }

    ouResult.textContent = resulFruit;
  }
}
 
let btnFruit = document.getElementById("btnFruit");
btnFruit.addEventListener("click", Fruit);
