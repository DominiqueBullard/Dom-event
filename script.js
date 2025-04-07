document.addEventListener("DOMContentLoaded", function(){
    let onload = document.getElementById("onload");
    onload.innerHTML = "<h>this is loaded</h>"
})

const directionEl = Document.getElementById("dirction");
Document.addEventListener("keydown", function(event){

    directionEl.innerText = `This key was pressed ${event.key}`
})

const clickMe = Document.getElementById("clickMe");
click.addEventListner("click", function (){
clickMe.innerText = "Big Click";
})

const button = document.getElementById("randomColorBtn");
function getRandomInt (max){
    Math.random();
}

let button = document.querySelector("button");
button.addEventListener("click",function(){
    
})