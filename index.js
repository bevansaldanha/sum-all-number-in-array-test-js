function sumItems(array) {
  let sum = 0;
  array.forEach(element => {
    if ( Array.isArray(element)) {
      return sum += sumItems(element);
      
    } else {sum += element;}

  });
  return sum;
}

module.exports = sumItems;