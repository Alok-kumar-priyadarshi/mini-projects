const randomcolor=function (){

    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color=color+hex[Math.floor(Math.random()*16)];

    }
    return color;
}


let intervalId;

const startchange = ()=>{
    const newcolor= function(){
        document.body.style.backgroundColor=randomcolor();
    }
    
    if(!intervalId)
    intervalId = setInterval(newcolor, 500);
   
};

const stopchange= function(){
    
    clearInterval(intervalId);

    intervalId = null;
}


document.querySelector("#start").addEventListener('click',startchange)
document.querySelector("#stop").addEventListener('click',stopchange)