var index = 0;
var qLine = "";
var numArray = [];
var buttonText = "";
var quotes = [
	{
		quote: "Life is really simple, but we insist on making it complicated.",
		source: "Confucius",
		color: "#05668D"
	},
	{
		quote: "Success is simple. Do what's right, the right way, at the right time.",
		source: "Arnold H. Glasow",
		color: "#00A896"
	},
	{
		quote: "Conversation would be vastly improved by the constant use of four simple words: I do not know.",
		source: "Andre Maurois",
		color: "#FF1654"
	},
	{
		quote: "Things are not quite so simple always as black and white.",
		source: "Doris Lessing",
		color: "#9C89B8"
	},
	{
		quote: "The most simple things can bring the most happiness.",
		source: "Izabella Scorupco",
		color: "#E83F6F"
	},
	{
		quote: "It is always the simple that produces the marvelous.",
		source: "Amelia Barr",
		color: "#8EA604"
	},
	{
		quote: "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
		source: "St. Jerome",
		color: "#00A6ED"
	},
	{
		quote: "You can't cross the sea merely by standing and staring at the water.",
		source: "Rabindranath Tagore",
		color: "#E8AA14"
	},
	{
		quote: "Accept the challenges so that you can feel the exhilaration of victory.",
		source: "George S. Patton",
		color: "#9CAFB7"
	},
	{
		quote: "Life is 10% what happens to you and 90% how you react to it.",
		source: "Charles R. Swindoll",
		color: "#4281A4"
	}
];

function getRandomQuote() {
	do {
		index = Math.floor(Math.random() * quotes.length);
		j = numArray.indexOf(index);
	} while (j != -1);

	return quotes[index];
} 

function printQuote() {
	if (numArray.length < quotes.length) {
		buttonText = document.getElementById("loadQuote").innerHTML;
		if (buttonText == "Reset") {
			document.getElementById("loadQuote").innerHTML = "Show another quote";
		}

		var quote = getRandomQuote();

		document.getElementById("quote").innerHTML = quote.quote;
		document.getElementById("source").innerHTML = quote.source;

		document.body.style.backgroundColor = quote.color;
		document.getElementById("loadQuote").style.background = quote.color;

		numArray.push(index);
	} else if(numArray.length == quotes.length){
		document.getElementById("quote").innerHTML = "We are out of quotes.";
		document.getElementById("source").innerHTML = "Vineet Tiwari";

		document.body.style.backgroundColor = "#36b55c";
		document.getElementById("loadQuote").style.background = "#36b55c";

		document.getElementById("loadQuote").innerHTML= "Reset";

		numArray = [];
	}
}

function autoChangeQuote() {
	var buttonText = document.getElementById("loadQuote").innerHTML;
	 if (buttonText === "Show another quote") {
		 printQuote();
	} else if (buttonText === "Reset") {
		return;
	}
}

setInterval(autoChangeQuote, 3500);

// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById("loadQuote").addEventListener("click", printQuote, false);