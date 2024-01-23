let sentence = "this is a comment and should not be changed. please comment on this comment.";

function toUpperCase (text){
    let sentences = text.split('. ');
    const newArray = sentences.map(function (sentence){
        return sentence[0].toUpperCase() + sentence.slice(1);
    });
    return newArray.join('. ');
}

console.log(toUpperCase(sentence));


