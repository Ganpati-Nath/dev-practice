// console.log("Shi chal rha h !...");

let src1 = {
    age : 12,
    wt  : 68,
    ht  : 180
};

// console.log(obj);

// // dynamic allocation...
// obj.color = "Black";

// console.log(obj);

// object cloning --> method 1 --> using spread operator...
// let dest = {...src};

// src.age = 15;

let src2 = {
    id : 101,
    finalName : "Name"
};

// object cloning --> method 2 --> using assign method...
// let dest = Object.assign({}, src1, src2);
// src1.age = 15;
// src2.id = 102;

// object cloning --> method 3 --> using loop...
let dest = {};

for(let key in src1) {
    let utility = key;
    let val = src1[key];
    // assign it for dest...
    dest[utility] = val;

}

// console.log("src : ", src1);
console.log("dest : ", dest);