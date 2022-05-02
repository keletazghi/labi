function addTask(){ 

    let t = document.getElementById("text");  
    let textarea = document.getElementById("add");
    let items =localStorage.getItem("ku"); 

    if(items == null){
        localStorage.setItem("ku",t.value);  
        textarea.value = t.value;
        t.value = '';
    }else {
        localStorage.setItem("ku",items+"\n"+t.value);
        textarea.value = items+ " " +t.value;
        t.value = '';
    }       
      
 }
 function clearTask(){
     document.getElementById("add").value='';
     localStorage.removeItem("ku");
 }