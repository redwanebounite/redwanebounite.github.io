let inputBox = document.getElementById("input")
let listCont = document.getElementById("list-container")
let btn = document.getElementById("btn")
btn.onclick = function () {
    if (inputBox.value === '') {
        alert("You Must Write Something");
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listCont.appendChild(li)
        // var tom1 = new Audio("./sounds/ding-sound-effect_2.mp3");
        // tom1.play();
        let span = document.createElement("span")
        span.innerHTML= "\u00d7"
        li.appendChild(span)
        saveData();
    }
    inputBox.value = "";
}
listCont.addEventListener("click",function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("cheked");
        if(e.target.className === "cheked") {
            var sound = new Audio("./sounds/ding-sound-effect_2.mp3");
            sound.play();
        }
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
},false)
function saveData() {
    localStorage.setItem("data",listCont.innerHTML);
}
function showTask() {
    listCont.innerHTML= localStorage.getItem("data");
}
showTask();
