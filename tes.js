// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string.
// function tersebut mengembalikan nilai true jika di dalam string tersebut
// terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali.
// Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

function checkAB(words) {
    // you can only write your code here!
    // tugas1 return words.split('').sort().join('');
    //iki bener let stra = words.search("a"&&"b");
    //let strb = words.search("b");
  
    let stra = words.search("a"&&" "&&" "&&" "&&"b");
    
    return stra;
    
      
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false