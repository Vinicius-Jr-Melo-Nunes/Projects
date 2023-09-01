function DisplayHour(){
  let inHour = document.getElementById("inHour");
  let outDisplay = document.getElementById("outDisplay");

  let hour = Number (inHour.value);
  
  
    let hourFrench = (hour + 5);,
  DisplayHour.apply 
           
  
  if(hour.toFixed(2) <=19){
    outDisplay.textContent = "O Horário na França é: " + hourFrench.toFixed(2) ;
  

}else{
    
    let dif = hour - 19;
          
    outDisplay.textContent = dif.toFixed(2);    

}
}
let btnTime = document.getElementById("btnTime");
btnTime.addEventListener("click" , DisplayHour);