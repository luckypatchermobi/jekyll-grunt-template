function pickHeader() {
  var $welcomeHeader = $('#js-welcome');
  var arr = [
    'salut',
    'hallo',
    'ciao',
    'ahoj',
    'yah sahs',
    'bog',
    'üdvözlöm',
    'hej',
    'czesc',
    'hola',
    "kon'nichiwa",
    'annyeonghaseyo',
    'shalom',
    'merhaba',
    'hujambo',
    'olá'
  ];
  var randLang = arr[Math.floor(Math.random() * arr.length)];

  $welcomeHeader.text(randLang);
}


function init() {
  pickHeader();
}

$(function() {
  init();
});
