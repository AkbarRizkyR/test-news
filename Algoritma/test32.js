const inputArr = ['Aziz', 'Tole', 'Tole', 'Akbar', 'Tole'];
const queryArr = ['Akbar', 'Tole', 'Budi', 'Aziz'];
const result = countWords(inputArr, queryArr);
console.log(result);


function countWords(inputArr, queryArr) {
    const wordCount = [];
    for (const query of queryArr) {
        let count = 0;
        for (const word of inputArr) {
            if (word === query) {
                count++;
            }
        }
        wordCount.push(count);
    }
    return wordCount;
}

