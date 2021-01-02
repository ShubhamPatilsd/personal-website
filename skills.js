setTimeout(function(){
  document.getElementById("skiller").classList.remove("hide");
  document.getElementById("skiller2").classList.remove("hide");
  document.getElementById("levelstuff").classList.remove("hide");
  document.getElementById("levelstuff").classList.add("show");

  //document.getElementById("hellodiv").classList.remove("hide");
},1400)

setTimeout(function(){
  document.getElementById("typing").classList.remove("hide");
  document.getElementById("typing").classList.add("show");
  document.getElementById("typearea").focus();

  document.getElementById('typearea').onkeypress=function(e){
  if(!e) e=window.event;
  if(e.keyCode=='13'){
    if(this.value=="cd .."){
      window.location.href="https://shubhampatilsd.github.io/main";
    }
  }
}
},1400)
