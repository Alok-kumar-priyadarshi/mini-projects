let button = document.querySelectorAll(".button");
let inputs = document.getElementsByClassName("input");
let inp = inputs[0];
let str = "";
let arr = Array.from(button);

arr.forEach(btn =>{

    btn.addEventListener("click",function(e){
        if(e.target.innerHTML == "="){

            str = eval(str);
            inp.value= str;

        }
        else if(e.target.innerHTML == "AC"){
            str = "";
            inp.value= str;

        }

        else if(e.target.innerHTML == "DEL"){
            str = str.substring(0,str.length-1)
            inp.value = str;
        }

        else{
            str += e.target.innerHTML;
            inp.value = str;
            console.log(str)
        }
    })

})

