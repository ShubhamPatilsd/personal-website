setTimeout(function(){
    document.getElementById("introtext").classList.remove("hide");
    document.getElementById("aboutintro").classList.remove("hide");
    
    
  },2200)
  
  setTimeout(function(){
    document.getElementById("typing").classList.remove("hide");
    document.getElementById("typing").classList.add("show");

    document.getElementById("projects").classList.remove("hide");
    document.getElementById("projects").classList.add("show");

    //document.getElementById("typearea").focus();
  },2200);


  setTimeout(function(){

    document.getElementById('typearea').onkeypress=function(e){
    if(!e) e=window.event;
    if(e.keyCode=='13'){
  
      if(this.value.toLowerCase()=="cd space-catch"){
        window.location.href="https://shubhampatilsd.github.io/projects/space-catch";
      }
      
      return false;
    }
  }
  }
  ,2200)