setTimeout(function(){
  document.getElementById("aboutintro").classList.remove("hide");
  document.getElementById("introh3").classList.remove("hide");
  document.getElementById("typing").classList.remove("hide");
  document.getElementById("typing").classList.add("show");
  document.getElementById("typearea").focus();
},3200);

setTimeout(function(){
  document.getElementById('typearea').onkeypress=function(e){
  if(!e) e=window.event;
  if(e.keyCode=='13'){

    if(this.value.toLowerCase()=="cd .."){
      window.location.href="https://shubhampatilsd.github.io/main";
    }
    return false;
  }
}
}

,3200);
/*
setTimeout(function(){
  document.getElementById("typing").classList.remove("hide");
  document.getElementById("typing").classList.add("show");
  document.getElementById("typearea").focus();
},3200)
*/
