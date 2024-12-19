function dice() {
  const value = Math.floor(Math.random() * 10);

  if (value === 0) {
    return value + 1;
  }

  if (value > 6) {
    return value - 3;
  }

  return value;
}

function playGame() {
  let target = prompt("\nenter target you want:");
  console.log("\nthe target you entered:", +target);

  const wantToChange = confirm("\ndo you want to change your target:");
  if (wantToChange) {
    target = prompt("\nenter new target");
  }

  let stopGame = false;
  let score = 0;

  console.log("\nYour Score:", score);
  console.log("Your target:", +target);

  while (!stopGame) {
    prompt("\nhit enter to roll dice ->");

    const value = dice();

    console.log("\nYou Got :", +value);
    score += value;
    console.log("Your Current Score:", score);
    console.log("Your target:", +target);

    if (score === +target) {
      console.log("\n \t \t 🏆 🏆 !! CONGRATULATIONS YOU WON !! 🏆 🏆 ");
      stopGame = true;
    }

    if (score > +target) {
      console.log("\n 💔 🙁 Sorry ,Better Luck Next TimeTime 👍");
      stopGame = true;
    }
  }
}

function main() {
  const name = prompt("enter your name");

  console.log("\n \tHello,", '"', name, '"');
  console.log("\n \t\t\t ⚠️ ⚠️ !!DISCLAIMER!! ⚠️ ⚠️ \n");
  console.log("THIS GAME IS FULLY BASED ON YOUR LUCK\n");
  console.log("** RULES **\n\n1.You need to fix target.\n");
  console.log("2.Enter the target you had fixed\n");
  console.log("3.Now You need to reach the target by rolling dice\n");
  console.log("4.In this game you need to reach the target exactly without exceeding the target\n");

  console.log("For Example :- if your target is 40 ,your current score is 38 ,\nif you get 3 by rolling dice it is foul you need to restart the game from score 0\n");

  const isReady = confirm("would you like to play this game:");

  if (isReady) {
    playGame();
  } else {
    console.log("\n \t Thank You For Giving Your Precious Time");
  }
}

main();