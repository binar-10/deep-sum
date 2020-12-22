// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string.
// function tersebut mengembalikan nilai true jika di dalam string tersebut
// terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali.
// Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

function checkAB(num) {
  // you can only write your code here!
  let checkAb = ""
  for(let i = 0; i<num.length; i++) {
    if(num[i]=="a"||num[i]=="b") {
      checkAb += num[i]
    }
  }
  if(checkAb === "ab") {
    return true
  } else {
    return false
  }
  // console.log(checkAb)
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false