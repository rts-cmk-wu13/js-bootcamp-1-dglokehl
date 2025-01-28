const quotes = [
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe - Albert Einstein",
    "So many books, so little time. - Frank Zappa",
    "Be the change that you wish to see in the world. - Mahatma Gandhi",
    "If you tell the truth, you don't have to remember anything. - Mark Twain",
    "I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living. - Dr. Seuss",
    "Everything you can imagine is real. - Pablo Picasso",
    "The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for. - Bob Marley",
    "I'm the one that's got to die when it's time for me to die, so let me live my life the way I want to. ― Jimi Hendrix",
    "If you don't know where you're going, any road'll take you there ― George Harrison"
]

const randQuote = document.querySelector("blockquote");

let randNum = Math.floor(Math.random() * 10);

randQuote.textContent = quotes[randNum];