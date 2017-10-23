var add = (x) => {
  return (y) => {
    return x + y;
  }
}

console.log(add(1)(2))

var addFive = add(5)
console.log(addFive(10))
console.log(addFive(8))
console.log(addFive(2))
console.log(addFive(3))
