// import { trovaDivisori } from "./trovaChiavi";

// function trova_e() {
//     let e = m - 1;
    
//     while(trovaDivisori(i).length != 0) {
//         i--;
//     }

//     return e;
// }

function encDec(mod, n, e, k, text) {
    text = text.split("");
    let stringa = [];
    let esponente = BigInt(0);
    
    // let e = trova_e();

    if (mod == 'E')
        esponente = e;
    else if (mod == 'D') {
        esponente = k;
    }

    for (let letter of text) {
        let i = BigInt(full_alphabet.indexOf(letter));
        stringa.push(full_alphabet[(i ** esponente) % n]);
    }

    stringa = stringa.join("");

    console.log("encrypted string", stringa);
}

let mod = process.argv[2];
let n = BigInt(process.argv[3]);
let e = BigInt(process.argv[4]);
let k = BigInt(process.argv[5]);
let text = process.argv[6];

let full_alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!£$%&/()=?^@,.-;:_òàùèì()[]{}<>|";

encDec(mod, n, e, k, text);