function funk(){
document.getElementById("l1").innerHTML="AAAA";}

function Dodawanie(a) 
 {let kil=parseInt(document.getElementById(a).textContent);
  document.getElementById(a).innerHTML = (kil+1).toString();
 }
 
function Odejmowanie(a) 
 {let kil=parseInt(document.getElementById(a).textContent);
  if(kil!=0)
   document.getElementById(a).innerHTML = (kil-1).toString();
 }
 
const zimoweCeny=[20, 18, 15, 13, 1, 50, 15, 48, 13];
const latoweCeny=[30, 28, 20, 18, 1, 70, 20, 68, 18];
const idCeny=["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9"];
const idLabel=["l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8", "l9"];
var c=0;

function CenaZima()
 {for(var i=0; i<9; i++)
 {
 document.getElementById(idCeny[i]).innerHTML = zimoweCeny[i];
 }
 c=1;
 }
 
function CenaLato()
 {for(var i=0; i<9; i++)
  document.getElementById(idCeny[i]).innerHTML = latoweCeny[i];
  c=0;
 }
 
 function Obliczanie()
 {var suma=0;
  
  if(c==0)
  { for(var i=0; i<9; i++) {
              suma += latoweCeny[i]*parseInt(document.getElementById(idLabel[i]).textContent);
              }
  }
  else
  {for(var i=0; i<9; i++)
   suma += zimoweCeny[i]*parseInt(document.getElementById(idLabel[i]).textContent);
  }
  document.getElementById("p1").innerHTML+= suma +" PLN";
  
  /*document.getElementById("p2").innerHTML="Paragon:";*/
  
  if(parseInt(document.getElementById("l1").textContent)!=0)
  {
    DodajP(document.getElementById("l1").textContent + " x 'Normalny'");
  }
  if(parseInt(document.getElementById("l2").textContent)!=0)
  {
    DodajP(document.getElementById("l2").textContent + " x 'Normalny+'");
  }
  if(parseInt(document.getElementById("l3").textContent)!=0)
  {
    DodajP(document.getElementById("l3").textContent + " x 'Ulgowy'");
  }
  if(parseInt(document.getElementById("l4").textContent)!=0)
  {
    DodajP(document.getElementById("l4").textContent + " x 'Ulgowy+'");
  }
  if(parseInt(document.getElementById("l5").textContent)!=0)
  {
    DodajP(document.getElementById("l5").textContent + " x 'Za 1 PLN'");
  }
  if(parseInt(document.getElementById("l6").textContent)!=0)
  {
    DodajP(document.getElementById("l6").textContent + " x '2 + 1'");
  }
  if(parseInt(document.getElementById("l7").textContent)!=0)
  {
    DodajP(document.getElementById("l7").textContent + " x '2 + 2 i więcej'");
  }
  if(parseInt(document.getElementById("l8").textContent)!=0)
  {
    DodajP(document.getElementById("l8").textContent + " x '2 + 1 +'");
  }
  if(parseInt(document.getElementById("l9").textContent)!=0)
  {
    DodajP(document.getElementById("l9").textContent + " x '2 + 2 i więcej +'");
  }
 
 
  
  
  
  
	
	
 }
 
function DodajP(a)
{let para = document.createElement("p");
para.innerText = a;
document.getElementById("p1").appendChild(para);
}
 
function Resetacja()
 {for(var i=0; i<9; i++) 
            document.getElementById(idLabel[i]).innerHTML=0;
  document.getElementById("p1").innerHTML="SUMA : ";
  document.getElementById("p2").innerHTML="";          
        
 }
 
function WyrownanieKol(divA, divB)
{
 var heightA = document.getElementById(divA).offsetHeight;
 var heightB = document.getElementById(divB).offsetHeight;
 
 if(heightA > heightB)
 {document.getElementById(divB).style.height = heightA;
 } 
 else{document.getElementById(divA).style.height = heightB;
      }

}
 

