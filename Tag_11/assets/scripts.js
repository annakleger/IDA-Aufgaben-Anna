let n = 0; /*schlüsselwort let und variablenname. zuweisung des werts von rechts nach links */
function buttonPressed() {
    n++;
    document.getElementById("element").style.left = (n * 5) + "px";
}

// function neuesElement() {
//     let div = document.createElement("div");
//     div.classList.add('random');
//     div.style.left = Math.random() * window.innerWidth + "px";
//     div.style.top = Math.random() * window.innerHeight + "px";
//     document.body.appendChild(div);
// }

function neuesElement() {
    let div = document.createElement("div");
    div.classList.add('random');
    div.style.left = Math.random() * window.innerWidth + "px";
    div.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(div);
}

function neuesElement2() {
    let div = document.createElement("div");
    div.classList.add('random2');
    div.style.left = Math.random() * window.innerWidth + "px";
    div.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(div);
}

function neuesElement3() {
    let div = document.createElement("div");
    div.classList.add('random3');
    div.style.left = Math.random() * window.innerWidth + "px";
    div.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(div);
}