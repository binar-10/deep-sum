// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string.
// function tersebut mengembalikan nilai true jika di dalam string tersebut
// terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali.
// Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

function checkAB(num) {
  // you can only write your code here!

  // declare new variable type array kosong
  let ABDistance = [] 
  //looping
  for(let index = 0; index < num.length; index++) { 
  //push masukan hasil hitungan index dari num
    ABDistance.push(num[index]) 
  } 
  
  //looping
  for(let huruf = 1; huruf < num.length; huruf++) { 
  //jika pada ABDistance huruf terdapat huruf 'a'
    if(ABDistance[huruf] == 'a'){ 
      //lakukan kondisi jika huruf a termasuk dihitung dalam 4 huruf berderet terdapat huruf b
      if(ABDistance[huruf+4] == 'b'){
        //kembalikan nilai true
        return true
      }
      //jika pada ABDistance huruf sekian terdapat huruf 'b'
    } else if(ABDistance[huruf] == 'b'){
      //jika setelah huruf b termasuk dihitung dalam 4 huruf berderet terdapat huruf a
      if (ABDistance[huruf+4] == 'a'){
        //kembalikan nilai t
        return true
      }
    }
  }
  return false //kembalikan nilai false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false