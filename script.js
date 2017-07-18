/**
 * Created by Роман on 18.07.2017.
 */
var gameOver = false;
var Gladiator = function(name) {
    this.name = name;
    this.attack = "";
    this.hitpoints = "";
};


Gladiator.prototype.setAttack = function() {
    this.attack = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    console.log(this.name + " attack is " + this.attack);
};

Gladiator.prototype.setHitpoints = function() {
    this.hitpoints = Math.floor(Math.random() * (100 - 80 + 1)) + 80;
    console.log(this.name + " HP is " + this.hitpoints);
};

Gladiator.prototype.refreshStats = function(){
    this.setAttack();
    this.setHitpoints();
};

Gladiator.prototype.fight = function(target) {
    if (target.hitpoints > 0 && gameOver === false && this.hitpoints > 0) {
        target.hitpoints -= this.attack;

        if (target.hitpoints > 0) {
            console.log(
                this.name +
                " Attacks " +
                target.name +
                " for " +
                this.attack +
                " hitpoints. " +
                target.name +
                " hitpoints are " +
                target.hitpoints
            );
        } else {
            console.log(
                this.name +
                " Attacks " +
                target.name +
                " for " +
                this.attack +
                " hitpoints. " +
                target.name +
                " is DEAD! "
            );
        }
    } else if (target.hitpoints <= 0) {
        console.log(this.name + " WINS!");
        gameOver = true;
    }
};

var champion = new Gladiator("Champion");
var monster = new Gladiator("Monster");

function startNewGame() {
    gameOver = false;
    monster.refreshStats();
    champion.refreshStats();

    do {
        champion.fight(monster);
        monster.fight(champion);
    } while (gameOver === false);
}
