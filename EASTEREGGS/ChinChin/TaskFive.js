let coin = Math.floor(Math.random() * 2);
let guess = parseInt(prompt("Guess coin flip (0 for heads, 1 for tails):"));
if (guess === coin) console.log("Correct!");
else console.log(`Incorrect. It was ${coin === 0 ? "heads" : "tails"}.`);


