// var playerName = 'Jeebis';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Bender", "Flexo", "The Robot Devil"];
var enemyHealth = 50;
var enemyAttack = 12;

for(var i = 0; i < 3; i++) {
    console.log("apple");
}

// fight function
var fight = function() {
  // Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  // ask player if they'd like to fight or run
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  // if player choses to fight, fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyNames[i] + ". " + enemyName[i] + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
    // if player did not chose 1 or 2 in prompt
  } else {
    window.alert("You need to pick a valid option. Try again!");
  }
};

// run fight function to start game
fight();



/* Starter Code References
console.log(playerName);

var name = "Burt";
console.log(name);

console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(5*4);
//Who dis?
console.log("Our robot's name is " + playerName);

// robot is ready for battle
console.log(playerName + " is ready for battle!");
//robot has won
//console.log("Your exquisite splecimine " + playerName + " has won");*/