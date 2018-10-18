$(document).ready(function() {
    var theme = $("#TOS");
    theme.autoplay = true;
    theme.load();
    $("#enlist").on("click", function(){
        window.location.href="game.html";
        return false;
    })
});