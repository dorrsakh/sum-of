let arr = prompt("Enter a list of numbers of your choice: (for example: 1 2 -44 68 39)").split(" ");
let sum = 0;

for (let num of arr) {
    num = Number(num);
    sum += num;
}
console.log(sum);