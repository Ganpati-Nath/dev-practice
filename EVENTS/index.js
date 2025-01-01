// function changeText(event) {
//     console.log(event);
//     let firstElement = document.getElementById('fPara');

//     firstElement.textContent = "Hello... Do it..."
// }

// let firstElement = document.getElementById('fPara');
// firstElement.addEventListener('click', changeText);

// let firAnc = document.getElementById('fAnchor');
// console.log(firAnc);

// firAnc.addEventListener('click', function(event) {
//     event.preventDefault();
//     firAnc.textContent = "Click ho gya...";
// });

// let paras = document.querySelectorAll('p');

function alertPara(event) {
    alert("You have clicked... " + event.target.textContent);
}

// for(let idx = 0; idx < paras.length; ++idx) {
//     let para = paras[idx];
//     para.addEventListener('click', alertPara);
// }

let myDiv = document.getElementById('wrapper');

myDiv.addEventListener('click', alertPara);