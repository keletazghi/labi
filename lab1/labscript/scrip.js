function addTask(){  
    let t = document.getElementById("add").value;  
    let m=localStorage.getItem("ku");
    localStorage.setItem("ku",m+"\n"+t);

    let s= document.getElementById("text");    
    s.innerText=localStorage.getItem("ku"); 
   
 }
 function clearTask(){
     document.getElementById("add").innerText="";
 }