export function trovaDivisori(num) {
    let arrayDivisori = [];
    for(let i = 2; i < num; i++) {
        if(num % i == 0)
            arrayDivisori.push(num / i);
    }

    return arrayDivisori;
}

let p = process.argv[2];
let q = process.argv[3];

let n = p * q;
let m = (p - 1) * (q - 1);

let i = m - 1;

while(trovaDivisori(i).length != 0) {
    i--;
}

let e = i;
let k = 0;
// let k = (m * h + 1) / e;

while((e * k) % m != 1 || e == k) {
    k++;
}

console.log("pubblica", e, n);
console.log("privata", k, n);