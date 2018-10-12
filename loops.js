function forLoop(array) {
  for (let i = 1; i < 26; i++) {
    array.push(`"I am ${i} strange loop${i === 1 ? '' : 's'}."`);
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
}

function doWhileLooop(array) {
  do {
    array.pop();
  } while(array.length > 1);
}
