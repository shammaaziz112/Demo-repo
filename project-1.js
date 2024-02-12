// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".qoute");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"Be yourself; everyone else is already taken."`,
    person: `Oscar Wilde`,
  },
  {
    quote: `"So many books, so little time."`,
    person: `Frank Zappa`,
  },
  {
    quote: `"A room without books is like a body without a soul."`,
    person: `Marcus Tullius Cicero`,
  },
  {
    quote: `"You only live once, but if you do it right, once is enough."`,
    person: `Mae West`,
  },
  {
    quote: `"We accept the love we think we deserve."`,
    person: `Stephen Chbosky`,
  },
  {
    quote: `"Always forgive your enemies; nothing annoys them so much."`,
    person: `Oscar Wilde`,
  },
  {
    quote: `"It does not do to dwell on dreams and forget to live."`,
    person: `J.K. Rowling`,
  },
  {
    quote: `"Good friends, good books, and a sleepy conscience: this is the ideal life."`,
    person: `Mark Twain`,
  },
  {
    quote: `"We are all in the gutter, but some of us are looking at the stars."`,
    person: `Oscar Wilde`,
  },
  {
    quote: `"Life is what happens to us while we are making other plans."`,
    person: `Allen Saunders`,
  },
  {
    quote: `"I have not failed. I've just found 10,000 ways that won't work."`,
    person: `Thomas A. Edison`,
  },
  {
    quote: `"A woman is like a tea bag; you never know how strong it is until it's in hot water."`,
    person: `Eleanor Roosevelt`,
  },
];

btn.addEventListener(`click`, function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
