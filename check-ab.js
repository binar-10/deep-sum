// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string.
// function tersebut mengembalikan nilai true jika di dalam string tersebut
// terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali.
// Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

function checkAB(num) {
  // you can only write your code here!

  let a = num.search("a"&&" "&&"b");
  let b = num.search("b"&&"a"&&"b");

  if (a >= 1){
    console.log("true");
  }else if (b >= 2){
    console.log("true");
  }else {
    console.log("false");
  }

 return;

  // const ab = ['a', 'b'];
  // var n = num.length;
  // var arr = [];

  // //for (let i = 0; i < n; i+3) {
  //   do {
  //     var i = 0
  //     var j = 0;
  //     var k = 3;
  //     let s = num.slice(j, k);
  //     arr.push(s);
  //     i+3;
  //     j+3;
  //     k+3; 
  //   } while (i <= n);
    
  // //}

  // return arr;
}



// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false