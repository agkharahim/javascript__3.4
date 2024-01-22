let word = "random word";

console.log(word);

function reversedWord () {
    return word.split('').reverse().join('');
}

let newWord = reversedWord(word);

console.log(newWord);


