let lists = document.getElementsByClassName("list");
let rightbox = document.querySelector(".right");
let leftbox = document.querySelector(".left");


for(items of lists){
    items.addEventListener("dragstart",function(e){
        let selected = e.target;

        // left to right

        rightbox.addEventListener("dragover",function(a){
            a.preventDefault();
        })
        rightbox.addEventListener("drop",function(a){
            rightbox.appendChild(selected);
            selected = null;
        })

        // right to left 
        leftbox.addEventListener("dragover",function(a){
            a.preventDefault();
        })
        leftbox.addEventListener("drop",function(a){
            leftbox.appendChild(selected);
            selected = null;
        })
    })
}
