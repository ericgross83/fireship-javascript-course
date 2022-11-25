
let arr = [1,3,5,7]



const initialValue = 0;
const sumWithInitial = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);


function sum(array) {
    let total = 0

    array.forEach(element => total = total + element)

    return total
}

console.log(sum(arr));

arr = ['😊','🦢','🦊','🍇','😏','🙈',]

function search(array, target) {

    return array.findIndex((element) => (element === target))
}

console.log(search(arr, '🙈')); 
