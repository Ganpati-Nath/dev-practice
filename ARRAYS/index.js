let obj = {
    name : "Name",
    age : 25,
    weight : "85 kg",
    height : "6 ft 1 inch",
    greet : () => {
        console.log("Done");
    }
};
// console.log(obj);
// obj.greet();

// console.log(typeof(obj));
// let ob = obj;

// let arr = [1, 2, false, "Name"];
// console.log(arr);
// console.log(typeof(arr));

// let brr = new Array("Name", 1, false);
// brr.push("Done");
// brr.pop();
// brr.shift();
// brr.unshift("Name");
// brr.push(20);
// brr.push(40);
// brr.push(60);
// console.log(brr.slice(2, 4));
// brr.splice(1, 0, "Done");
// console.log(brr);
// console.log(typeof(brr));

// brr[0] = "firstName lastName";
// console.log(brr[0]);

let arr = [10, 20, 30, 11, 51, 33];

// let ans = arr.map((number) => {
//     return number*number;
// })

// let ans = arr.filter((num) => {
//     if(num % 2 !== 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// });

// let ans = arr.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);

// let ans = arr.sort((a, b) => b - a);

// arr.forEach((val, idx) => {
//     console.log("Number : ", val, " Index : ", idx);
// })

// console.log(ans);
// console.log(typeof(ans));

for(let key in obj) {
    console.log(key, " ", obj[key]);
}

for(let val of arr) {
    console.log(val);
}