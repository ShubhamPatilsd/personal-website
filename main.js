setTimeout(function(){
  document.getElementById("hello").classList.remove("hide");
  document.getElementById("hellodiv").classList.remove("hide");
},3200)

setTimeout(function(){
  document.getElementById("typing").classList.remove("hide");
  document.getElementById("typing").classList.add("show");
  document.getElementById("typearea").focus();
},3200);

setTimeout(function(){

  document.getElementById('typearea').onkeypress=function(e){
  if(!e) e=window.event;
  if(e.keyCode=='13'){

    if(this.value.toLowerCase()=="cd \"about me\"" || this.value=="cd about\\ me"){
      window.location.href="https://shubhampatilsd.github.io/about";
    }else if(this.value.toLowerCase()=="./contactme"){
      window.location.href="https://shubhampatilsd.github.io/contact";
    }else if(this.value.toLowerCase()=="cd skills"){
      window.location.href="https://shubhampatilsd.github.io/skills";
    }else if(this.value.toLowerCase()=="cd projects"){
      window.location.href="https://shubhampatilsd.github.io/projects";
    }
    return false;
  }
}
}
,3200)
