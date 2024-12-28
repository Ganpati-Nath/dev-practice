// let firstPromise = new Promise ( (resolve, reject) => {
//     setTimeout(function say() {
//         console.log("Hello...");
//     }, 5000);
//     resolve(1);
//     // reject(new Error("Internal server error !..."));
// });

let promiseOne = new Promise( (resolve, reject) => {
    let flag = false;
    if(flag) {
        resolve("Promise pura ho gya...");
    }
    else {
        reject("Nhi hua !...");
    }
});

promiseOne.then( (msg) => {
    console.log("Then ka msg : " + msg);
}).catch( (error) => {
    console.log("catch ka error : " + error);
});
