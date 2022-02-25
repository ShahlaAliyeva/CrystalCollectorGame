/*use script*/
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
        name: 'Yellow',
        value: 0
    }
}

// var blue = crystals.blue.value;
// var green = crystals.green.value;
// var red = crystals.red.value;
// var yellow = crystals.yellow.value;

// var targetScore = random(15, 150);
// var blue = $('.blue').val(random(1, 15));
// var green = $('.green').val(random(1, 15));
// var red = $('.red').val(random(1, 15));
// var yellow = $('.yellow').val(random(1, 15));

$(document).ready(function () {
    function beginGame() {
        targetScore = random(15, 150);
        userScore = 0;
        crystals.blue.value = random(1, 15);
        crystals.green.value = random(1, 15);
        crystals.red.value = random(1, 15);
        crystals.yellow.value = random(1, 15);
        $('.targetScore').text(targetScore);
        $('.userScore').text(userScore);

        /*Testing code on console*/
        console.log('*******************************');
        console.log('Target Score: ', targetScore);
        console.log('Blue val: ', crystals.blue.value, '\n Green val: ', crystals.green.value, '\n Red val: ', crystals.red.value, '\n Yellow val: ', crystals.yellow.value)
        console.log('*******************************');
    }

    function increaseUserChoice (selectedCrystal) {
        userScore += selectedCrystal.value;

        checkWinner();

        $('.userScore').text(userScore);
        /*Testing code on console*/
        console.log('Your Score: ', userScore);
        console.log('*******************************');
    }

    $('.blue').on('click', function() {
        increaseUserChoice(crystals.blue);
    });
    $('.green').on('click', function() {
        increaseUserChoice(crystals.green);
    });
    $('.red').on('click', function() {
        increaseUserChoice(crystals.red);
    });
    $('.yellow').on('click', function() {
        increaseUserChoice(crystals.yellow);
    });

    function checkWinner () {
        if(userScore === targetScore) {
            alert('Congratulations, You Won!!');
            /*Testing code on console*/
            console.log('You win');

            winCount++;
            $('.winCount').text(winCount);

            beginGame();
        } else if (userScore > targetScore) {
            alert('Oh no, You lost the game! Don`t worry try again');
            /*Testing code on console*/
            console.log('You lost!');

            lossCount++;
            $('.lossCount').text(lossCount);

            beginGame();
        }
    }

    beginGame();
})