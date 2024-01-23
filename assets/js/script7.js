var sentence = prompt("Please enter your sentence:");

function reversedSentence () {
    return sentence.split(' ').reverse().join(' ');
}

var newSentence = reversedSentence(sentence);

console.log(newSentence);