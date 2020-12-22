// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string.
// function tersebut mengembalikan nilai true jika di dalam string tersebut
// terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali.
// Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

function checkAB(words) {
  // you can only write your code here!
  var sortedWords = [[], []];  //screen the words based on characters
  for (let i = 0; i < words.length; i++) {
    if (words[i] === 'a') {
      sortedWords[0].push(i);
    } else if (words[i] === 'b') {
      sortedWords[1].push(i);
    }
  }

  let cases = false; // check whether/not the cases true (or false?)
  for (a = 0; a <= sortedWords[0].length && true; a++) {
    for (let b = 0; b <= sortedWords[1].length && true; b++) {
      if (Math.abs(sortedWords[0][a] - sortedWords[1][b]) === 4) {
        cases = true;
      }
    }
  }
  return cases;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false