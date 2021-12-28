// var playerName = 'Jeebis';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Bender", "Flexo", "The Robot Devil"];
var enemyHealth = 50;
var enemyAttack = 12;

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at "+ [i] + " index");
}

// Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

// fight function
var fight = function(enemyName) {
  while(playerHealth > 0 && enemyHealth > 0) {
  // ask player if they'd like to fight or run
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney);
      break;
    }
  } 
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyNames[i] + " ate shit!");
      break;
    } else {
      window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " ate shit!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  
  }

};

// run fight function to start game
for(var i = 0; i < enemyNames.length; i++) {

  if (playerHealth > 0) {
    window.alert("Round " + (i +1));
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
  } else {
    window.alert("Wasted.");
    break;
  }
  
}



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