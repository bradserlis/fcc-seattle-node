
// ==
// using a for loop
// ==
let total = 0;

for(let i=2; i < process.argv.length; i++){
  total += Number(process.argv[i])
}

console.log(total);

// ==
// Devon's answer!
// ==
const numberStrings = process.argv.slice(2);
const numbers = numberStrings.map((numberString)=>{
  parseInt(numberString, 10)
})

const sum = numbers.reduce((sum, number) => {
  return sum + number
})

console.log(sum)
