function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// var targetScore = random(15, 150);
// var blue = $('.blue').val(random(1, 15));
// var green = $('.green').val(random(1, 15));
// var red = $('.red').val(random(1, 15));
// var yellow = $('.yellow').val(random(1, 15));

$(document).ready(function () {
    function beginGame() {
        var targetScore = random(15, 150);
        var blue = $('.blue').val(random(1, 15));
        var green = $('.green').val(random(1, 15));
        var red = $('.red').val(random(1, 15));
        var yellow = $('.yellow').val(random(1, 15));
        $(".targetScore").text(targetScore);
    }
})