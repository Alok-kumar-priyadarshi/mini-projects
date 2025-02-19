const para = document.getElementById("para");
const inpbox = document.getElementById("inpbox");
const qrimg = document.getElementById("qrimg");
const btn = document.getElementById("btn");

function generateqr(){
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inpbox.value}`
}



btn.addEventListener("click",() => {
    if(inpbox.value == ""){
        inpbox.classList.add("error")
        setTimeout(() =>{
            inpbox.classList.remove("error")
        },1000)
        qrimg.alt ="unable to generate qr code";
        qrimg.src = ""



    }
    else{
        generateqr()
    }
})

inpbox.addEventListener("change",() => {
    if(inpbox.value == ""){}
    else{
        generateqr()
    }
})

inpbox.addEventListener("keypress",(e) => {
    if(e.key  == "Enter"){
        e.preventDefault()
        btn.click()
    }
})

localStorage.clear();
