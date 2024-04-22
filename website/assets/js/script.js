var currentQuote = 0;
var quotes = [
    `"Every bad situation is a blues song waiting to happen."`,
    `"I fall in love every day. Not with people but with situations."`,
    `"I would say that jazz is my own language."`,
    `"I don't think your ability to fight has anything to do with how big you are. It's to do with how much anger is in you."`,
    `"I wouldn't say I'm a feminist, but I don't like girls pretending to be stupid because it's easier."`,
    `"Life's short. Anything could happen, and it usually does, so there is no point in sitting around thinking about all the ifs, ands and buts."`,
    `"I'm not frightened of appearing vulnerable."`
];

function showQuote() {
    console.log(`Clicked`);
    currentQuote = Math.floor(Math.random() * quotes.length);
    var quote = quotes[currentQuote];
    document.querySelector(`.amy-quote`).textContent = quote;
}

document.querySelector(`.amy-quotes-button`).addEventListener(`click`, showQuote);