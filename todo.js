let input = document.querySelector("input");
let button = document.querySelector("button");
let container = document.querySelector(".container")
let data = []; 

button.addEventListener("click", function () {
    data.push(input.value);
    let result = data.map(function (el, index) {
        return `<p>${(index+1)+")"+" "+el}</p>` 
    })
    container.innerHTML = result;
    
})