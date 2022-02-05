var randomColor;
var randQuote;
var currentQuote;
var currentAuthor;

var colors = ["#28FFBF","#FFB319","#FF0075","#F2F013",
"#FC5404","#81B214","#132743","#3D087B","#E7305B","#F90716",];
var quotes = [["The purpose of our lives is to be happy.","— Dalai Lama"],
["Life is what happens when you’re busy making other plans." ,"— John Lennon"],
["You only live once, but if you do it right, once is enough." ,"— Mae West"],
["Many of life’s failures are people who did not realize how close they were to success when they gave up.","– Thomas A. Edison"],
["If you want to live a happy life, tie it to a goal, not to people or things.","– Albert Einstein"],
["Never let the fear of striking out keep you from playing the game.","– Babe Ruth"],
["Money and success don’t change people; they merely amplify what is already there.","— Will Smith"],
["Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.","– Steve Jobs"],
["Not how long, but how well you have lived is the main thing."," — Seneca"],
["The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.","– Henry Ford"]
];

generator();

$(".next-btn").on("click",function(){
    generator();
});

function generator(){
    var randomNumber = Math.floor(Math.random()*10);
    randomColor = colors[randomNumber];
    currentQuote = quotes[randomNumber][0];
    currentAuthor = quotes[randomNumber][1];
    $(".quote").text(currentQuote);
    $(".author").text(currentAuthor);
    $(".bg").css("background-color",randomColor);
    $(".fonta").css("color",randomColor);
}
