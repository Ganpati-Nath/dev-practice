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

let finds = ` ganpatinath07@gmail.com, bhaktiagrawal286@gmail.com, ayushnegi2928@gmail.com, dhiveash2523@gmail.com, py49828@gmail.com, adityabhi2003@gmail.com, tarun.jsr11@gmail.com, pankajkrp16@gmail.com, jiteshwarmahal16@gmail.com, aayushh158@gmail.com, sureshnangina@gmail.com, amanpratapnagvanshi7622@gmail.com, manikantkumar098@gmail.com, srijareddy840@gmail.com, chiran.bhullar@gmail.com, sg959832@gmail.com, kommireddymani141@gmail.com, sk27842909@gmail.com, sofiyaparveen1029@gmail.com, deeprajsinha444@gmail.com, aakarshvyas11@outlook.com, arushisingh9464@gmail.com, ashishshukla614251@gmail.com, vardhankamireddi8@gmail.com, anchalkumarmahato@gmail.com, inumarthivinaykumarvinaykumari@gmail.com, shivamvats1610@gmail.com, 00aakash251@gmail.com, vijayalaxmi.02vl@gmail.com, anureetkaur0804@gmail.com, vikashydv19@gmail.com, kunal15lodhi@gmail.com, saurabhkmrss585@gmail.com, madhusudantiwari2003@gmail.com, ybeauty172@gmail.com, sumitkayshap777@gmail.com, naazbutali@gmail.com, rsyadav2k21@gmail.com, lokeshraj3219@gmail.com, chhavinathyadavsaidpur@gmail.com, chandanmtl123@gmail.com, amitkumartiwari502@gmail.com, sriyaranga369@gmail.com, npnikhilpurwar@gmail.com, udaykumarkella67@gmail.com, k.anuja0608@gmail.com, bhaskarkumar5279@gmail.com, suryanshyadav885@gmail.com, saibhagavan126@gmail.com, nishantraj08082003@gmail.com, pathakvikash834@gmail.com, ayushinfinitesingh@gmail.com, singhjaspreet92551@gmail.com, balimanpreetsingh@gmail.com, utsavmandal5799@gmail.com, simerpreet513@gmail.com, gourav14243444@gmail.com, vrana4200@gmail.com`
let counts = finds.split('@');
let freq = 1;
for(let idx = 0; idx < counts.length ; ++idx){
    freq++;
}
console.log(counts.length);
