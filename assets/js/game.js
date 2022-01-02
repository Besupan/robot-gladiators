// var playerName = 'Jeebis';
var playerHealth = 100;
var playerName = window.prompt("What is your robot's name?");
  if (playerName === "Bernie Sanders") {
    playerHealth = 500;
  }
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Scruffy the Janitor", "Dr. Zoiberg", "Professor Farnsworth", "Phillip J. Fry", "Bender", "Flexo", "The Robot Devil"];
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
    var confirmSkip = window.confirm("Are you sure you're a quitter?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " chickened out!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney);
      break;
    }
  } 
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " ate shit!");
      break;
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
      window.alert(playerName + " ate shit!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  
  }

};

var startGame = function() {
  //reset player stats
  var playerHealth = 100;
  if (playerName === "Bernie Sanders") {
    playerHealth = 500;
  }
  var playerAttack = 10;
  var playerMoney = 10; 
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
  //after the loop ends, player is either out of health or enemies to fight
  endGame();
};

var endGame = function() {
  if (playerHealth > 0) {
    window.alert((playerName) + " has survived the game, your score is:" + (playerHealth * i));
  } 
  else {
    window.alert((playerName) + " has got dedded. D:")
  }

  var playAgainConfirm = window.confirm("would you like to play again?");

  if (playAgainConfirm) {
    //restart game
    startGame();
  } else {
    window.alert("Quitter o;");
  }
}

//start the game wht the page loads
startGame();


//Start Game logic function
/* between fights shop() with upgrade attack and refill for health
if refill, playerhealth =100, -playerMoney
else if upgrade, update attack to XX, -playerMoney
  if playerMoney <= 0 alert, insufficient funds
else if leave to return to fight loop
else shop()*/


//Endgame logic function
/*Display stats in alert.window
window.prompt play again?
if yes restart o; */

//post round
/*after defeat of opponent or skip, call shop()
*/

