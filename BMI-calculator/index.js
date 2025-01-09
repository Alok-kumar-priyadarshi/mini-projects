const form=document.querySelector("form")

form.addEventListener('submit',function(calculate){
    calculate.preventDefault()

    const height = parseFloat(document.querySelector("#height").value)
    const weight = parseFloat(document.querySelector("#weight").value)
    const result = document.querySelector(".result")

    if (height==""||isNaN(height)||height<0) {
        result.innerHTML="Please enter a valid value."
    }else if (weight==""||isNaN(weight)||weight<0) {
        result.innerHTML="Please enter a valid value."
    }else{
        const BMI=(weight/((height*height)/10000)).toFixed(3)

        result.innerHTML=`your B M I is   ${BMI} `
     
    }
   
})