const time=document.querySelector(".timer");
setInterval(function(){
    let date=new Date();
    time.innerHTML=date.toLocaleTimeString();
},1000)