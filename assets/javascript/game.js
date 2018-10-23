// Global Variables

var characters = [
    // janeway
    {
        name: "Janeway",
        health: 150,
        attack: 6,
        counterAttack: 15,
        imageUrl: "assets/images/Janeway.jpg",
    },
    // picard
    {
        name: "Picard",
        health: 120,
        attack: 4,
        counterAttack: 10,
        imageUrl: "assets/images/Picard.jpg"
    },
    // q
    {
        name: "Q",
        health: 200,
        attack: 2,
        counterAttack: 20,
        imageUrl: "assets/images/Q.jpg",
    },
    //borg queen
    {
        name: "Borg Queen",
        health: 110,
        attack: 3,
        counterAttack: 25,
        imageUrl: "assets/images/BorgQueen.jpg",
    }
]

var defenders = [];
var currentCharacterObject = characters[0];
var currentEnemyObject = characters[0];


// Rendering Playable Characters 
function charRender() {
    $(characters).each(function (index, element) {
        var charBox = $("<div class='col-lg-2 charCard' data-name='" + this.name + "'>");
        var charName = $("<h3>").text(this.name);
        var charImg = $("<img alt='" + this.name + "'>").attr("src", this.imageUrl);
        var charHealth = $("<h5 class=hp-" + this.name + ">").text(this.health);
        charBox.attr("data-attack", this.attack);
        charBox.attr("data-counterAttack", this.counterAttack);
        charBox.attr("data-health", this.health);
        charBox.append(charName).append(charImg).append(charHealth);
        $("#charRow").append(charBox);
        //Convert strings to value
        var attackValue = ($(this).attr("data-attack"));
        attackValue = parseInt(attackValue);
        var contValue = ($(this).attr("data-counterAttack"));
        contValue = parseInt(contValue);
        var healthValue = ($(this).attr("data-health"));
        healthValue = parseInt(healthValue);

    })
}


// attack function
var attackFunction = function () {
    currentEnemyObject.health -= currentCharacterObject.attack;
    currentCharacterObject.attack *= currentCharacterObject.attack;
    currentCharacterObject.health -= currentEnemyObject.counterAttack;
    $(".hp-" + currentCharacterObject.name).text(currentCharacterObject.health);
    $(".hp-" + currentEnemyObject.name).text(currentEnemyObject.health);
    if (currentEnemyObject.health < 0) {
        $(".enemy").remove();
        $(".defender").attr("style", "");
    }
    if (currentCharacterObject.health < 0) {
        location.replace("youLose.html");
    }
}


// Render Attack Button
function attackButt() {
    var attackButt = $("<button>");
    attackButt.addClass("attackButton btn btn-danger btn-lg");
    attackButt.text("Attack!");
    attackButt.click(attackFunction);
    $("#button").append(attackButt);
    $(attackButt).hide()
}


// Loads game on onload
$(document).ready(function () {

    var curChar;
    var curEnemy;
    //Calling charRender Function
    charRender();
    attackButt();

    //On Click Function for Character Selection
    $(".charCard").on("click", function charSelect() {
        $('#charInst').text("Your Character!")
        curChar = this;
        $(".charCard").each(function (index, element) {
            if (element != curChar) {
                $(element).toggleClass("charCard defender")
                $('#defenders').append(element);
                $('#defText').text("Pick Your Enemy!");
            } else currentCharacterObject = characters[index];
            //Turning off the charSelect on click
            $(element).unbind("click");
            //On Click Function for Enemy Selection
            $(".defender").on("click", function enemySelect() {
                $('#enemyText').text("Get Ready for Battle!");
                curEnemy = this;
                //Broken Maths, please helps. Will not give you cookies!
                $(".defender").each(function (index, element) {
                    if (element === curEnemy) {
                        $(element).toggleClass("defender enemy");
                        $('#enemyRow').append(element);
                        $('#defText').text("Defenders");
                        $('.attackButton').show();
                        currentEnemyObject = characters[index];
                    }
                    else {
                        $(element).attr("style", "pointer-events:none");
                    }
                })

            })
        });

    })



})