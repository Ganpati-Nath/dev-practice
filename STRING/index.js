let str1 = 'demoName';
let str2 = "demoName";
let str3 = `demoName`;
let str4 = new String("demoName");

console.log(str1);
console.log(str2);
console.log(str3);
console.log(typeof(str4));

let op1 = `firstName`;
let op2 = `lastName`;

let finalName = `${op1} ${op2}`;
console.log(finalName);

let demoName = `demo Name`;
let words = demoName.split(' ')
console.log(words);
console.log(words.join(' '));