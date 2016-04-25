// Allocate and initialize global variabls.
var index = 0;
var atIndex = 0;
var printedQuotes = [];
var buttonText = "";

/* The contents of this object will be presented 
 * once all the quotes have been viewed.
 */
endingQuote = {
	quote: "We are out of quotes. Hit the 'Restart' button to go through the quotes again.",
	source: "Vineet Tiwari",
	color: "#36b55c"
};

// Array of objects to hold all the quotes.
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

/* Generate and return a random number between 0 to n-1, 
 * n being the number of values in the array.
 */
function getRandomQuote() {
	do {
		index = Math.floor(Math.random() * quotes.length);
		atIndex = printedQuotes.indexOf(index);
	} while (atIndex != -1);

	return quotes[index];
} 

// Update the html elements appropriately with the contents of the quote object.
function upDateHTML(quote) {
	document.getElementById("quote").innerHTML = quote.quote;
	document.getElementById("source").innerHTML = quote.source;

	document.body.style.backgroundColor = quote.color;
	document.getElementById("loadQuote").style.background = quote.color;
}

// Print the quite to the output stream ie. the web page.
function printQuote() {
	if (printedQuotes.length < quotes.length) {
		buttonText = document.getElementById("loadQuote").innerHTML;
		if (buttonText == "Restart") {
			document.getElementById("loadQuote").innerHTML = "Show another quote";
		}
		var quote = getRandomQuote();
		upDateHTML(quote)
		printedQuotes.push(index);
	} else if(printedQuotes.length == quotes.length){
		upDateHTML(endingQuote)
		document.getElementById("loadQuote").innerHTML= "Restart";
		printedQuotes = [];
	}
}

// Change the quote based on the availability of printable quotes.
function changeQuote() {
	var buttonText = document.getElementById("loadQuote").innerHTML;
	 if (buttonText === "Show another quote") {
		 printQuote();
	} else if (buttonText === "Restart") {
		return;
	}
}

/* Run the changeQuote() function every 3.5 seconds 
 * for self-updating the web page with a different quote.
 */
setInterval(changeQuote, 3500);

// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById("loadQuote").addEventListener("click", printQuote, false);