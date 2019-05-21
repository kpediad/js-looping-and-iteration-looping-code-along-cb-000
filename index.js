// Code your solutions in this file
function printBadges(employees) {
  for (let i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i+1}.`);
  }
  return employees;
}

function tailsNeverFails() {
  coinFlip = Math.round(Math.random());
  // Tails == 1 and Heads == 0
  let tailsCounter = 0;
  while (coinflip != 0) {
    tailsCounter++;
    coinFlip = Math.random().round();
  }
  console.log(`You got ${tailsCounter} tails in a row!`);
  return tailsCounter;
}
