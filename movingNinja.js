
 var leftValue = 450, topValue = 100, direction = 'down', walking='1';

 function update(){
     document.getElementById("character").style.left = leftValue+"px";
     document.getElementById("character").style.top = topValue+"px";
     document.getElementById("character").style.backgroundImage = "url('img/"+direction+""+walking+".png')";
 }

 document.onkeydown = function(e){
     console.log(e);
     
     if (walking=='1'){
         walking = '2';
     }
     else if(walking=='2'){
         walking ='1';
     }

     if(e.keyCode == 37 && leftValue > 0) { // LEFT
         leftValue = leftValue - 10;
         direction = 'left';				
     }
     else if (e.keyCode == 39 && leftValue < 501) { // RIGHT
         leftValue = leftValue + 10;  
         direction = 'right';				 		
     }
     else if (e.keyCode == 40 && topValue < 501) { // DOWN
         topValue = topValue + 10;
         direction = 'down';				
     }
     // ...
     else if (e.keyCode == 38 && topValue > 0) { //ARRIBA
         topValue = topValue -10;
         direction = 'top';				
     }
     update();
 }