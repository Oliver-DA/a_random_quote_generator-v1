/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [

  {quote:
    "The world isn’t perfect. But it’s there for us, doing the best it can….that’s what makes it so damn beautiful.",
    source:'Roy Mustang',
    citation:'Full Metal Alchemist BrotherHood',
    year:2010
  },
  
  {quote:
    "Don’t give up, there’s no shame in falling down! The true shame is to not stand up again!",
    source:'Shintaro Midorima',
    citation:'Kuroko No Basket',
    year:2017
  },

  {quote:
    "Every journey begins with a single step. We just have to have patience",
    source:'Milly Thompson',
  },

  {
    quote:"If you only face forward, there is something you will miss seeing.",
    source:'Vash the Stampede',
  },

  {
    quote:"If you don’t like the hand that fate’s dealt you with, fight for a new one.",
    source:'Naruto Uzumaki',
    citation:'Naruto Shippuden',
    year:2015
  },

  {
    quote:"Be who you are and say what you feel, because those who mind don’t matter, and those who matter don’t mind.",
    source:'Bernard M. Baruch',
  },

  {
    quote:"All we have to decide is what to do with the time that is given us.",
    source:'J.R.R.Tolkein',
    citation:'The Fellowship of the Ring',
  },

  {
    quote:"Made weak by time and fate, but strong in will To strive, to seek, to find, and not to yield.",
    source:'Alfred Lord Tennyson',
    citation:'Ulysses',
  },
]

console.log(quotes)



/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);