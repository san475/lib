function counter() {
  let count = 0;
  return function() {
    return count++;
  };
}

const countValue = counter();
console.log(countValue()) // 0
console.log(countValue()) // 1
console.log(countValue()) // 2
