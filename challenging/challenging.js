function generateParent(num) {
  let arr = []
  let input = ['()','(())','()(())']
  let random = Math.floor(Math.random() * (num-1))

  for (let i = random; i < num; i++) {
    arr.push(input[random])
  }
  return arr
}
console.log(generateParent(3));;
