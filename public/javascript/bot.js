console.log("this is running");
//affirmations
const affirmText = document.getElementById("affirmation");

//quote
const quoteText = document.getElementById("quote");
const quoteBy = document.getElementById("by");

//teas
const teaText = document.getElementById("tea");
const teaBenefits = document.getElementById("benefits");

//buttons
const affirmationBtn = document.querySelector(".affirmationBtn");
const quoteBtn = document.querySelector(".quoteBtn");
const teaBtn = document.querySelector(".teaBtn");

//AFFIRMATIONS
const getAffirmation = async () => {
  const res = await fetch("/api/affirmations", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const affirmations = await res.json();
  const num = Math.floor(Math.random() * affirmations.length);
  const item = affirmations[num];
  const affirmation = item.affirmation_phrase;
  affirmText.innerText = affirmation;
};
affirmationBtn.addEventListener("click", getAffirmation);

//QUOTES
const getQuote = async () => {
  const res = await fetch("/api/quotes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const quotes = await res.json();
  const num = Math.floor(Math.random() * quotes.length);
  const item = quotes[num];
  const quote = item.quote;
  const by = item.by;
  quoteText.innerText = quote;
  quoteBy.innerText = by;
};
quoteBtn.addEventListener("click", getQuote);

//TEAS
const getTea = async () => {
  const res = await fetch("/api/teas", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const teas = await res.json();
  const num = Math.floor(Math.random() * teas.length);
  const item = teas[num];
  const tea = item.tea_type;
  const benefits = item.benefits;
  teaText.innerText = tea;
  teaBenefits.innerText = benefits;
};
teaBtn.addEventListener("click", getTea);

getAffirmation();
getQuote();
getTea();
