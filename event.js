
// event handler
// by id 
const redButton = document.getElementById('red');
redButton.onclick = makeRed;
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// function for yellow color 
function yellow() {
    document.body.style.backgroundColor = 'yellow';
}


// auther way

// handel event with anonymous function 
const green = document.getElementById('make-green');
// Anonymous function . with out function name
green.onclick = function () {
    document.body.style.backgroundColor = "green";
}

// add event by addEventListener 
const greenYellow = document.getElementById('make-green-yellow');
greenYellow.addEventListener('click', makeGreenYellow);
function makeGreenYellow() {
    document.body.style.backgroundColor = 'greenyellow';
}
// addEventListener 2nd way 
const hotPinkButton = document.getElementById('make-Hot-Pink');
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})


// addEventListener 3nd way | sortcut
document.getElementById('make-light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})


// set text by useing Function
function handelJustFunctionClick() {
    const p = document.getElementById('click-method');
    p.innerText = 'set by useing function';
}
// direct function 
document.getElementById('direct-event').addEventListener('click', function () {
    const p = document.getElementById('click-method');
    p.innerText = 'This content showing by direct function';
})

// update name by Udate button 
document.getElementById('handler-event').addEventListener('click', function () {
    const nameFild = document.getElementById('name-fild');
    const p = document.getElementById('click-method-input');
    p.innerText = nameFild.value;
    // for text fild clear 
    nameFild.value = '';
})