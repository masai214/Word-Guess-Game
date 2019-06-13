var gamesList = ["tonyhawksproskater", "grandtheftauto", "residentevil", "metalgearsolid", "sanandreas",
    "vicecity", "granturismo", "maddennfl", "devilmaycry", "ncaafootball", "godofwar",
    "virtuafighter", "burnout", "ssx", "okami", "espnnfl", "soulcalibur", "princeofpersia", "finalfantasy",
    "guitarhero", "ratchetandclank", "jakanddaxter", "twistedmetal", "shadowofthecolossus",
    "nbastreet", "splintercell", "dragonquest", "tekken", "slycooper", "socom", "darkcloud",
    "kingdomhearts", "beyondgoodandevil", "suikoden", "amplitude", "psychonauts", "viewtifuljoe",
    "psiops", "redfaction", "onimusha", "needforspeed", "mercenaries", "hotshotsgolf", "roguegalaxy",
    "defjamvendetta", "wipeout", "xmenlegends", "tombraider", "mortalkombat", "legacyofkain",
    "maxpayne", "warofthemonsters"
];

var gameChose = "";

var lettersInWord = [];

var blanks = 0;

var blanksAndRights = [];

var wrongs = [];

var wins = 0;
var losses = 0;
var numGuesses = 10;

function startGame() {
    numGuesses = 10;

    gameChose = gamesList[Math.floor(Math.random() * gamesList.length)];

    lettersInWord = gameChose.split("");

    blanks = lettersInWord.length;

    console.log(gameChose);

    blanksAndRights = [];

    wrongs = [];

    for (var i = 0; i < blanks; i++) {
        blanksAndRights.push("_");
    }

    document.getElementById("guesses-left").innerHTML = numGuesses;

    document.getElementById("word-guess").innerHTML = blanksAndRights.join(" ");

    document.getElementById("wrongs").innerHTML = wrongs.join(" ");
}

function letterCheck(letter) {

    var lettersInWord = false;

    for (var i = 0; i < blanks; i++) {
        if (gameChose[i] === letter) {

            lettersInWord = true;

        }
    }

    if (lettersInWord) {
        for (var x = 0; x < blanks; x++) {
            if (gameChose[x] === letter) {
                blanksAndRights[x] = letter;
            }
        }
    }

    else {
        wrongs.push(letter);
        numGuesses--;
    }
}



function roundComplete() {
    document.getElementById("guesses-left").innerHTML = numGuesses;
    document.getElementById("word-guess").innerHTML = blanksAndRights.join(" ");
    document.getElementById("wrongs").innerHTML = wrongs.join(" ");

    if (lettersInWord.toString() === blanksAndRights.toString()) {
        wins++;

        document.getElementById("wins").innerHTML = wins;
        startGame();
    }

    else if (numGuesses === 0) {
        losses++;

        document.getElementById("losses").innerHTML = losses;

        startGame();

    }
}


startGame();

document.onkeyup = function (event) {

    if (event.keyCode >= 65 && event.keyCode <= 90 ) {
        var letterGuessed = event.key.toLowerCase();
        letterCheck(letterGuessed);
        roundComplete();
    }
};