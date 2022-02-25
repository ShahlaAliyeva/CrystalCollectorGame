function random(min, max) {
    return Math.floor(Math.random()*(max - min + 1))+min;
}

var targetScore = random(15, 150);

$(document).ready(function() {
    $(".targetScore").text(targetScore);
})

