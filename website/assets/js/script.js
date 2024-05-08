// Quote Index
var currentQuote = 0;
// List of quotes
var quotes = [
    `"Every bad situation is a blues song waiting to happen."`,
    `"I fall in love every day. Not with people but with situations."`,
    `"I would say that jazz is my own language."`,
    `"I don't think your ability to fight has anything to do with how big you are. It's to do with how much anger is in you."`,
    `"I wouldn't say I'm a feminist, but I don't like girls pretending to be stupid because it's easier."`,
    `"Life's short. Anything could happen, and it usually does, so there is no point in sitting around thinking about all the ifs, and buts."`,
    `"I'm not frightened of appearing vulnerable."`
];

function showQuote() {
    // Get random number
    currentQuote = Math.floor(Math.random() * quotes.length);
    // Get random quote from that number
    var quote = quotes[currentQuote].split(' ');

    // Remove the previous quote
    document.querySelector(`.amy-quote`).innerHTML = '';

    // Loop over all the words in the quote
    quote.forEach((word, index) => {
        // We wait 0.5 seconds for each word to appear
        setTimeout(() => {
            // Create a span element
            var span = document.createElement(`span`);
            // Set the span element text to the word
            span.textContent = word + " ";
            // Add the span element to the quote
            document.querySelector(`.amy-quote`).appendChild(span);

            // Scroll the quote element into view smoothly
            document.querySelector(`.amy-quote`).scrollIntoView({
                behavior: 'smooth'
            });
        }, index * 500);
    });
}

// When we click the quote button we want to trigger the function above 
document.querySelector(`.amy-quotes-button`)?.addEventListener(`click`, showQuote);

function fadeIn(entries) {
    // Loop over all of the entries we are looking at
    entries.forEach((entry) => {
        // If the thing we are looking at is intersecting (in view) we want to add the class "fade-in-now" and remove the class "fade-in"
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-now');
            entry.target.classList.remove('fade-in');
        }
    });
}
// We want to fade in the elements when they are in view (more than 50% visible)
var observer = new IntersectionObserver(fadeIn, { threshold: 0.2 });
// We want to fade in all elements with the class "fade-in"
document.querySelectorAll(`.fade-in`).forEach((element) => observer.observe(element));