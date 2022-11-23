"use strict";
const no1 = document.getElementById('num1');
const no2 = document.getElementById('num2');
const button = document.querySelector('button');
const Result = [];
const strinresult = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printDisplay(relObj) {
    console.log(relObj.val);
}
button.addEventListener('click', () => {
    const num1 = no1.value;
    const num2 = no2.value;
    const result = add(+num1, +num2);
    const strngrsult = add(num1, num2);
    Result.push(result);
    strinresult.push(strngrsult);
    printDisplay({ val: result, date: new Date() });
    console.log(result);
    console.log(strngrsult);
});
