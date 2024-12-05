const quotes = [
  "Sancta, Sancta, tractata sunt",
  "What is moved is moved by something",
  "Man know thyself",
  "The law excuses no one",
  "The best way to predict the future is to invent it. – Alan Kay",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
];

const quoteDisplay = document.getElementById('quote-display');

const newQuoteButton = document.getElementById('new-quote');

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  const randomQuote = quotes[randomIndex]

  quoteDisplay.textContent = randomQuote;
}

newQuoteButton.addEventListener("click", displayRandomQuote);

displayRandomQuote();