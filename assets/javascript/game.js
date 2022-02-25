function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var userScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0;

var crystals = {
    blue: {
        name: 'Blue',
        value: 0
    },
    green: {
        name: 'Green',
        value: 0
    },
    red: {
        name: 'Red',
        value: 0
    },
    yellow: {
        name: 'Yellow'
        
    }
}

// var targetScore = random(15, 150);
// var blue = $('.blue').val(random(1, 15));
// var green = $('.green').val(random(1, 15));
// var red = $('.red').val(random(1, 15));
// var yellow = $('.yellow').val(random(1, 15));

$(document).ready(function () {
    function beginGame() {
        targetScore = random(15, 150);
        userScore = 0;
        var blue = $('.blue').val(random(1, 15));
        var green = $('.green').val(random(1, 15));
        var red = $('.red').val(random(1, 15));
        var yellow = $('.yellow').val(random(1, 15));
        $('.targetScore').text(targetScore);
        $('.userScore').text(userScore);

        console.log('*******************************');
        console.log('Target Score: ', targetScore);
        console.log('Blue val: ', blue, '\n Green val: ', green, '\n Red val: ', red, '\n Yellow val: ', yellow)
        console.log('*******************************');
    }

    beginGame()
})