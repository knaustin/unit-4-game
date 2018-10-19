// Redirects from index.html to game.html with onclick
$(document).ready(function() {
    $("#enlist").on("click", function(){
        window.location.href="game.html";
        return false;
    })
});