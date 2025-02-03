const cornyJokes = ["Why don’t skeletons fight each other? Because they don’t have the guts!",
     "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don’t eggs tell jokes? Because they might crack up!",
"What did the janitor say when he jumped out of the closet? “Supplies!”",
"Why did the math book look sad? Because it had too many problems!",
"What do you call fake spaghetti? An impasta!",
"Why can’t your nose be 12 inches long? Because then it would be a foot!",
"Why do cows have bells? Because their horns don’t work!",
"What do you call a factory that makes okay products? A satisfactory!",
"Why did the golfer bring two pairs of pants? In case he got a hole in one!"]

const pronoun = ["I", "She", "He", "They", "We"]
const verb = ["ran", "walked", "jumped", "shuffled", "bounced"]
const preposition = ["to", "from", "towards", "away from", "down", "up"]
const the = "the"
const noun = ["house", "garage", "school", "turtle", "koala", "meerkat"]
const button = document.getElementById('button')
const outputElement = document.getElementById('gen-sen-head');
const generatedSentence = document.getElementsByClassName('generated-sentence')[0]


const giveJoke = (array) => {
    let i = Math.floor(Math.random()*10);
    return array[i]
}

const randomPronoun = (array) => {
    let y = Math.floor(Math.random()*5);
    return array[y]
}
const randomVerb = (array) => {
    let x = Math.floor(Math.random()*5);
    return array[x]
}
const randomPreposition = (array) => {
    let z = Math.floor(Math.random()*6);
    return array[z]
}
const randomNoun = (array) => {
    let w = Math.floor(Math.random()*6);
    return array[w]
}

const sentence = () => {
    return `${randomPronoun(pronoun)} ${randomVerb(verb)} ${randomPreposition(preposition)} ${the} ${randomNoun(noun)}.`
}

console.log("Here's a randomly generated sentence: "+sentence()+"\nHere's a randomly selected corny joke: "+giveJoke(cornyJokes))


button.addEventListener('click', function() {
    outputElement.innerHTML = sentence();
    generatedSentence.style.visibility = 'visible'    
})
