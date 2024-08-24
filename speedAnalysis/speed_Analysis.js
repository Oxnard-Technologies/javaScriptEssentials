let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    document.getElementById('inputTest').value = testText;

    document.getElementById('output').innerHTML = '';
    document.getElementById('userInput').value = '';
    document.getElementById('userInput').readOnly = false;

    startTime = new Date().getTime();

    var button = document.getElementById('btn');
    button.innerHTML = 'End Test';
    button.onclick = endTest;
}

function endTest() {
    endTime = new Date().getTime();

    document.getElementById('userInput').readOnly = true;

    var timeLapsed = (endTime - startTime) / 1000;
    var userTypedText = document.getElementById('userInput').value;

    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0;
    if (timeLapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeLapsed) * 60);
    }

    var outputdiv = document.getElementById('output');

    outputdiv.innerHTML = '<h2>Typing Test Results</h2>' +
    '<p> Total length: ' + userTypedText.length +
    '<p>Words typed: ' + typedWords + '</p>' +
    '<p>Time lapsed: ' + timeLapsed + ' seconds</p>' +
    '<p>Words per minute (WPM): ' + wpm + '</p>';

    var button = document.getElementById('btn');
    button.innerHTML = 'Start Test';
    button.onclick = startTest;
}