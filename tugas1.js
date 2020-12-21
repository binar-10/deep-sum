function sortCharacters(words) {
    // code here
      
    
    let list = words.split("");
    list.sort();
    
    return list.join('');
}
  
  console.log(sortCharacters('hello'));
  console.log(sortCharacters('truncate'));
  console.log(sortCharacters('developer'));
  console.log(sortCharacters('(#*&(asdkjasnd'));