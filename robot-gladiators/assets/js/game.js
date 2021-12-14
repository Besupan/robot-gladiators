// variable section
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Bender";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //Round starting
    window.alert("Welcome to Robot Gladiators!");
};
enemyHealth = (enemyHealth - playerAttack);
console.log(enemyName + "'s health is now at " + enemyHealth);
playerHealth = (playerHealth - enemyAttack);
console.log(playerName + "'s health is now at " + playerHealth);

fight();

console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

//check to see if the value of the playerHealth variable is greater than 0
if(playerHealth > 0) {
    console.log("Your player is still alive!");
}

if(playerHealth < 0) {
    window.alert(playerName + " got dedded.");
}
else {
    window.alert(playername + " still has " + playerHealth + " health left.");
}

console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

//check enemy's health
if(enemyHealth <= 0) {
    window.alert(enemyName + "has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
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
console.log("Your exquisite splecimine " + playerName + " has won");*/