// Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka.
// Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut,
//  Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6.
//  Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6,
//  sehingga function akan me-return 2.

function digitPerkalianMinimum(angka) {
  const divider = [...Array(angka+1).keys()]; //array [0...angka] as a divider
  const moduloDivider = [];
  divider.map(pembagi => {
    if (angka % pembagi === 0) { // modulo function
      return moduloDivider.push(pembagi);
    }
  });
  const reversed = moduloDivider.slice().reverse(); //reversing modulo array
  const outputs = moduloDivider.map((value, index) => [value, reversed[index]]).map(output => { //join 2 arrays then join each elements
    return output.join("").length;
  });
  const minPoint = Math.min.apply(Math, outputs); // looking for the min point
  return minPoint;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2