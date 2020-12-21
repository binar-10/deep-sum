// Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka.
// Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut,
//  Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6.
//  Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6,
//  sehingga function akan me-return 2.

function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  let check = []
  let kiri = []
  let kanan = []
  let result
  for(let i =1; i<=angka; i++) {
    for(let j = 1; j<=angka;j++) {
      if(i * j === angka && i < 10 && j < 10) {
        // console.log(i, j)
        check.push([i, j])
      }
    }
  }
  
  for(let x = 0; x<check.length; x++) {
    check[x].sort()
  }
  console.log(check, "aaaa")
  
  
  console.log(removeDups(check))
  result = removeDups(check)

  return result.length
  
}

function removeDups(data) {
  let unique = {};
  data.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}



// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
// console.log(digitPerkalianMinimum(90)); // 3
// console.log(digitPerkalianMinimum(20)); // 2
// console.log(digitPerkalianMinimum(179)); // 4
// console.log(digitPerkalianMinimum(1)); // 2
