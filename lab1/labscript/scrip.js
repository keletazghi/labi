function addTask(){  
    let t = document.getElementById("add").value;  
    let m=localStorage.getItem("ku") ;
    localStorage.setItem("ku",m+"\n"+t)        
    let s= document.getElementById("text");    
    document.getElementById("add").innerText=localStorage.getItem("ku"); 
    s.value = '';   
 }
 function clearTask(){
     document.getElementById("add").innerHTML="";
 }