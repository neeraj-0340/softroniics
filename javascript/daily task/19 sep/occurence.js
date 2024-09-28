function occurences(sen,word) {
    sen=sen.toLowerCase();
    word=word.toLowerCase();

    let count = 0;
    
    let words=sen.split(' ');

    for(let i=0;i<words.length;i++)
    {
        if(words[i] == word)
            {
                count++;
            }
    }
    return count;
    
}

let sen="the tha jhaj kj the the thessj x";
let word="the";
let occurence=occurences(sen,word);
console.log(`there are ${occurence} of the "${word}" in the sentences.`);