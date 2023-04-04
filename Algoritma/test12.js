function reverseString(str) {
    return str;
}

const myString = "NEGIE1";
const splitString = myString.split("");
let reverseArray = splitString.reverse();

const digitOne = reverseArray.splice(0, 1);
reverseArray.push(digitOne[0]);

console.log(reverseArray);

function render(func) {
    console.log(func);
}

render(reverseArray.join(""));
