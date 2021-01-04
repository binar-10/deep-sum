// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string.
// function tersebut mengembalikan nilai true jika di dalam string tersebut
// terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali.
// Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

function checkAB(str) {
  // you can only write your code here!
    str.split("");
    let hurufA = str.indexOf('a');
    let hurufB = str.indexOf('b');
    let jarak = hurufB - hurufA || hurufA - hurufB;

    if (jarak >= 3) {
      let hasil = 'true'
      return hasil;
    } else
    if (jarak < 3) {
      let hasil = 'false' 
      return hasil;
    }
        
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false