let obj = {
    name : "Name",
    age : 25,
    weight : "85 kg",
    height : "6 ft 1 inch",
    greet : () => {
        console.log("Done");
    }
};
console.log(obj);
obj.greet();

console.log(typeof(obj));
let ob = obj;

let arr = [1, 2, false, "Name"];
console.log(arr);
console.log(typeof(arr));

let brr = new Array("Name", 1, false);
brr.push("Done");
brr.pop();
brr.shift();
brr.unshift("Name");
brr.push(20);
brr.push(40);
brr.push(60);
console.log(brr.slice(2, 4));
brr.splice(1, 0, "Done");
console.log(brr);
console.log(typeof(brr));

brr[0] = "firstName lastName";
console.log(brr[0]);