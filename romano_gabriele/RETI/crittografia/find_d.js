let e = process.argv[2];
let m = process.argv[3];

let d = 0;
// let k = (m * h + 1) / e;

while((e * d) % m != 1 || e == d) {
    d++;
}

console.log(d);