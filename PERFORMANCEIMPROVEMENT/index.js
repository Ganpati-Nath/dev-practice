// // code example One...
// const t1 = performance.now();
// for(let idx = 1; idx <= 100; ++idx) {

//     let para = document.createElement('p');
//     para.textContent = "This is Para : " + idx;
//     document.body.appendChild(para);
// }
// const t2 = performance.now();

// console.log("Total time by code 1 : " + (t2 - t1));

// // code example Two...
// const t3 = performance.now();
// let myDiv = document.createElement('div');
// for(let idx = 1; idx <= 100; ++idx) {

//     let para = document.createElement('p');
//     para.textContent = "This is Para : " + idx;
//     myDiv.appendChild(para);
// }
// document.body.appendChild(myDiv);

// const t4 = performance.now();

// console.log("Total time by code 2 : " + (t4 - t3));


// best practice...
const time1 = performance.now();
let fragment = document.createDocumentFragment();

for(let i = 1; i <= 100; ++i) {
    let para = document.createElement('p');
    para.textContent = "This is Para : " + i;
    // No reflow AND No repaint...
    fragment.appendChild(para);
}
// only 1 reflow and repaint...
document.body.appendChild(fragment);
const time2 = performance.now();
console.log("Total time : " + (time2 - time1));