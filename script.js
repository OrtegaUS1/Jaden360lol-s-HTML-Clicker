var current = parseFloat(localStorage.getItem('Current'));
var Points = parseFloat(localStorage.getItem('Points'));
var audio = new Audio("click.mp3");
var PPC = parseFloat(localStorage.getItem('PPC'));
var clicks = 0  
var color = "green"
 function Color(Kolor){
  Kolor = prompt("Color")
  color = Kolor
    
    if (Kolor==="adam"){
    color = "darkRed"    
    }
     if (Kolor==="wiley"){
    color = "Purple"    
    }
    if (Kolor==="jhazz"){
    color = "skyblue"    
    }
    if (Kolor==="jaden"){
    color = "lime"    
    }
     if (Kolor==="blake"){
    color = "darkgreen"    
    }
     if (Kolor==="joel"){
    color = "skyblue"    
    }
   recall()
  }
function recall(){
 Bar(Points/current);
 document.getElementById('Buy').value = "Buy " + current + " PPC";
 document.getElementById('text').innerHTML = Points;
  
}
recall()

function Bar(frac){
  
 if ((frac*100)<=100) {
document.getElementById("myBar").style = "width: " + (frac * 100) + "%"+ ";  height: 30px; background-color:"+ color + ";"  
} else {
document.getElementById("myBar").style = "width: " + "100" + "%"+ ";  height: 30px; background-color:"+ color + ";";  
}}
 




function Click(){
 Points = Points + PPC ;
localStorage.setItem('Points', Points);
clicks = clicks + 1
audio.play();
recall()

}
function Clear(){
 Points =  1 ;
 current = 1 ;
 PPC = 1;
  localStorage.setItem('Current', current);
 localStorage.setItem('PPC', PPC);
 localStorage.setItem('Points', Points);
 recall()
 
}
function Buy(){
if (current <= Points) {
    Points = Points - current;
  current = current + 10 + Math.round(0.1 * Points + (current*0.1))
  

 
  localStorage.setItem('Current', current);
  PPC = PPC + 1
  localStorage.setItem('PPC', PPC);
  recall()
audio.play();

  
}
}
recall()


recall()
