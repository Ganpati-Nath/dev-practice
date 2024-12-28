// async function getData () {
//     setTimeout(function () {
//         console.log("I'm inside timeout function !...");
//     }, 3000);
// };
// let output = getData();


// fetch API...
// async function getData () {
//     // get request --> async...
//     let res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments/');
//     // parse json --> async...
//     let data = await res.json();
//     // sync...
//     console.log(data);
// }
// getData();
// Scenario...
// prepare url --> API endpoint --> sync...
// fetch data --> network call --> async... // await entry...
// process data --> print --> sync...


const myHeaders = new Headers();

myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const option = {
    method: "POST",
    body: JSON.stringify({username: "sample"}),
    headers: myHeaders,
};

async function getData() {
    const res = await fetch(url, option);
    let data = await res.json();
    console.log("My data : ", data);
}

getData();