// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string.
// function tersebut mengembalikan nilai true jika di dalam string tersebut
// terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali.
// Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

function checkAB(num) {
  // you can only write your code here!
  // find a,b or b,a
  const indexA = num.indexOf('a');
  const indexB = num.indexOf('b');

  // const indexCoba = num.charAt(indexA + 4);

  if(indexA != -1 && indexB != -1 ){
    return num.charAt(indexA + 4) == 'b' || num.charAt(indexB + 4) == 'a'
  }else{
    return false;
  }
  // return indexCoba;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false