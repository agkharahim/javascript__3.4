let text = "This text is random text and that is a random";

function repeatedWords (text) {
    text = text.toLowerCase();
    let words = text.split(" ");
    let repeatedWord = {};
    for ( let i = 0; i < words.length; i++) {
        let word = words[i];
        if (repeatedWord[word]) {
            repeatedWord[word] ++;
        }
        else {
            repeatedWord[word] = 1 ;
        }
    }
    return repeatedWord;
}

let repeatedText = repeatedWords(text);
let say = 0;
for (let item in repeatedText) {
    if (repeatedText [item] > 1 ) {
        say ++;
    }
}

console.log(say);

console.log(repeatedWords(text));