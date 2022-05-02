function addTask(){  
    let textarea = document.getElementById("add").value;           
    let s= document.getElementById("text");    
    document.getElementById("add").innerText=textarea+ "\n "+s.value; 
    s.value = '';   
 }
 function clearTask(){
     document.getElementById("add").innerHTML="";
 }