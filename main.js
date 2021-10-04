let numN;
let numM;

do{
    numN = +prompt("Введіть число N", "");
}while(!Number.isInteger(numN));

do{
    numM = +prompt("Введіть число  M, яке буде більше за число  N", "");
}while(!Number.isInteger(numM) || (numM < numN));


const skipEvenNumbers = confirm("Пропускаємо парні числа?");

let sum = 0;
for(let i = numN; i <= numM; i++){
    if(skipEvenNumbers && i % 2 !== 0){
    } else {
        sum += i;
    }
}
document.writeln(`Розрахунок: ${sum}`) 