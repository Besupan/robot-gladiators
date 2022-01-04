var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1)) + min;

  return value;
}

var getPlayerName = function() {
  var name = "";

  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }

  console.log("Your roboit's name is " + name);
  return name
};

var playerInfo = {
  health : 100,
  name: getPlayerName(),
  attack : 10,
  money : 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money>= 7){
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("need mo money");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7){
      this.attack += 6;
      this.money -= 7;
    } else {
      window.alert("need mo money");
    }
  }
};


var enemyInfo = [
  {
    name: "Scruffy the Janitor",
    attack: randomNumber(10, 14),
    health: randomNumber(40,60)
  },
  {
    name: "Dr. Zoiberg",
    attack: randomNumber(10, 15),
    health: randomNumber(40,60)
  },
  {
    name: "Professor Farnsworth",
    attack: randomNumber(10, 16),
    health: randomNumber(40,60)
  },
  {
    name: "Phillip J. Fry",
    attack: randomNumber(10, 17),
    health: randomNumber(40,60)
  },
  {
    name: "Bender",
    attack: randomNumber(10, 18),
    health: randomNumber(40,60)
  },
  {
    name: "Flexo",
    attack: randomNumber(10, 19),
    health: randomNumber(40,60)
  },
  {
    name: "The Robot Devil",
    attack: randomNumber(10, 20),
    health: randomNumber(40,60)
  }
];

for(var i = 0; i < enemyInfo.length; i++) {
    console.log(enemyInfo[i].name);
    console.log(enemyInfo[i]);
  }
// Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

// fight function
var fight = function(enemy) {
  while(playerInfo.health > 0 && enemy.health > 0) {
  // ask player if they'd like to fight or run
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you're a quitter?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " chickened out!");
      // subtract money from playerMoney for skipping
      playerInfo.money = Math.max(0, playerInfo.money - 10);
      console.log("gold = ", playerInfo.money);
      break;
    }
  } 
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " ate shit!");
      //money for win
      playerInfo.money = playerInfo.money + 20;

      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " ate shit!");
      break;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
  
  }

};

var startGame = function() {
  //reset player stats
  playerInfo.reset();

  if (playerInfo.name === "Bernie Sanders") {
    playerInfo.health = 500;
  }

  // run fight function to start game
  for(var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) { 
      window.alert("Round " + (i +1)); 
      var pickedEnemyObj = enemyInfo[i];
      enemyInfo.health = randomNumber(40, 60);
      fight(pickedEnemyObj);
      //if wer're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        var storeConfirm = window.confirm("Visit store?");
        if (storeConfirm) {
          shop();
        }
      }
    } else {
      window.alert("Wasted.");
      break;
   }
  }
  //after the loop ends, player is either out of health or enemies to fight
  endGame();
};

var endGame = function() {
  if (playerInfo.health > 0) {
    window.alert((playerInfo.name) + " has survived the game, your score is: " + (playerInfo.health * (enemyInfo[i])));
  } else {
    window.alert((playerInfo.name) + " has got dedded. D:")
  }

  var playAgainConfirm = window.confirm("would you like to play again?");

  if (playAgainConfirm) {
    //restart game
    startGame();
  } else {
    window.alert("Bite my shiny metal ass");
  }
}

//shop function
var shop = function() {
  var shopOptionPrompt = window.prompt(
    "Would you like ot refill your health [REFILL], upgrade your attack [UPGRADE], or leave the store [LEAVE]?"
  );

  //use switch to carry out action
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
    case "Refill":
        playerInfo.refillHealth();
      break;
    case "UPGRADE":
    case "upgrade":
    case "Upgrade":
        playerInfo.upgradeAttack();
      break;
    case "LEAVE":
    case "leave":
    case "Leave":
      window.alert("leaving the store.");

      //do nothing, so function will end
      break;
    default:
      window.alert(" you did not pick a valid option. Think again.");

      //call shop function again
      shop();
      break;
  }
};

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

