// Global Variables

var charSelect = false;
var enemySelect = false;
var gameReset = false;

$(document).ready(function() {

// Function for the Reset Button, resets page
    $("#reset").on("click", function(){
        location.reload();
    })

 // OnClick function for selecting Player Character
    $(".character").on("click", function(){
        charSelect = true;
        // Changes header text
        $("#capText").text("Your Captain!");
        // Removes unselected characters and moves selected character to first col.
        var currentCaptain = this;
            $(".character").each(function(){
            if (this != currentCaptain){
                $(this).parent().hide();
            }
    
        });
    })

// OnClick function for selecting Enemy Character
    $(".enemy").one("click", function(){ 
        enemySelect = true;
        // Changes header text
        $("#defenderText").text("Defenders!");
        $("#enemyText").text("Get Ready for Battle!");
        //Moves unselected enemies to defender space
        var currentEnemy = this;
        $(".enemy").each(function(){
            if (this != currentEnemy){
                $(this).toggleClass("enemy defender");
                $(this).parent().appendTo($("#defenderArena"));
            }
        });
    })
    
// OnClick function for Attack Button
    $("#attack").on("click", function(){
        
    })
    

});