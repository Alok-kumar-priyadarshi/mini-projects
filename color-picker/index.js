const buttons=document.querySelectorAll('#button')
const body=document.querySelector('body')

buttons.forEach(function (button){
    // console.log(button);
    button.addEventListener('click',function(color){
        console.log(color.target);
        if(color.target.className==='red'){
            body.style.backgroundColor="red";

            
        }

        if(color.target.className==='blue'){
            body.style.backgroundColor="blue";
            
        }

        if(color.target.className==='yellow'){
            body.style.backgroundColor="yellow";
            
        }

        if(color.target.className==='green'){
            body.style.backgroundColor="greenYellow";
            
        }

        
    })
    
})