var väder;

// API 
// apiKey = '9e4907e3191448e0abc675bca328372f';
const url = 'https://api.weatherbit.io/v2.0/current';
const apiKey = '&APPID=9e4907e3191448e0abc675bca328372f';
const lang = sv,

// FETCH
const currentPromise = fetch(url);

currentPromise.then(
    function(response){
        console.log(response);
    }
);

var input;

function setup() {
    createCanvas(400, 200);

    var button = select('#submit');
    button.mousePressed(väderAsk);

    input = select('#stad');
}

function väderAsk() {
    var url = api + ort + apiKey + units;
    loadJSON(url, gotData);
}

function gotData(data) {
    väder = data;
}

function draw() {

}

