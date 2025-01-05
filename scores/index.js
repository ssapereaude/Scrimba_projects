let lcount = document.getElementById("left")
let rcount = document.getElementById("right")
let lcounter = 0
let rcounter = 0
function lone(){
    lcounter+= 1
    lcount.textContent = lcounter
}

function ltwo(){
    lcounter += 2
    lcount.textContent = lcounter
}

function lthree(){
    lcounter += 3
    lcount.textContent = lcounter
}

function rone(){
    rcounter += 1
    rcount.textContent = rcounter
}

function rtwo(){
    rcounter += 2
    rcount.textContent = rcounter
}

function rthree(){
    rcounter += 3
    rcount.textContent = rcounter
}
function newgame(){
    lcount.innerText = 0
    rcount.innerText = 0
    lcounter = 0
    rcounter = 0
}
