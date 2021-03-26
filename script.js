window.onload = function() {
    //Declare Variables
    let seconds = 00; 
    let tens = 00; 
    
    //Declare Node Varibles
    
    
    const startbtn = document.getElementById("startbtn");
    const stopbtn = document.getElementById("stopbtn");
    const resetbtn = document.getElementById("resetbtn");
      var appendTens = document.getElementById("tens");
      var appendSeconds = document.getElementById("seconds");
      //time
      var Interval ;
      
      startbtn.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
      }
      
      stopbtn.onclick = function() {
        clearInterval(Interval) 
      }
      
      resetbtn.onclick = function() {
        clear(Interval)
      }
      
      resetbtn.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
      }
      
      function startTimer () {
        tens++;
        
        if(tens <9){
          appendTens.innerHTML = "0" + tens;
        }
        
        if(tens >9){
          appendTens.innerHTML = tens;
        }
         if (tens > 99) {
          seconds++;
          appendSeconds.innerHTML = "0" + seconds;
          tens = 0;
          appendTens.innerHTML = "0" + 0;
        }
          if (seconds > 9){
          appendSeconds.innerHTML = seconds;
        }
      }
    }
    