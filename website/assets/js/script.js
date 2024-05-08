// Quote Index
var currentQuote = 0;
// List of quotes
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
    // Get random number
    currentQuote = Math.floor(Math.random() * quotes.length);
    // Get random quote from that number
    var quote = quotes[currentQuote];
    // Set the quote element text to the quote text
    document.querySelector(`.amy-quote`).textContent = quote;
    // Scroll the quote element into view smoothly
    document.querySelector(`.amy-quote`).scrollIntoView({
        behavior: 'smooth'
    })
}

// When we click the quote button we want to trigger the function above 
document.querySelector(`.amy-quotes-button`).addEventListener(`click`, showQuote);

function fadeIn(entries) {
    console.log(entries);
    entries.forEach((entry) => {
        entry.target.classList.toggle('fade-in-now', true);
        entry.target.classList.toggle('fade-in', false);
    });
}


var observer = new IntersectionObserver(fadeIn, { threshold: 1 });
document.querySelectorAll(`.fade-in`).forEach((element) => observer.observe(element));