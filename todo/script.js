const inp = document.querySelector(".inp-text");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list");

btn.addEventListener("click", () => {
    if(inp.value == ""){
        alert("please write something !");
        
    }else{

        let li = document.createElement("li");
        li.innerHTML = inp.value;
        list.appendChild(li);
        inp.value = "";

        let span = document.createElement("span");
        span.innerHTML = "X";
        li.appendChild(span);

        

    } 
        
})

// enter to add btn added

inp.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        e.preventDefault();
        btn.click();
    }
})


list.addEventListener("click",(e)=> {
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName ==="SPAN"){
        

        e.target.parentElement.remove();

        savedata();


    }
})

function savedata(){
    localStorage.setItem("data", list.innerHTML);
}
function showdata(){
    list.innerHTML = localStorage.getItem("data");
}

showdata();
 
