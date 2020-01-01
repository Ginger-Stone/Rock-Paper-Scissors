// Design
var data = {
    'r': 'ROCK',
    'p': 'PAPER',
    's': 'SCISSORS',
}
// let i = 3;
// while (i > 0) {
    var animeVar=setInterval(rock, 400);
    var animeVar1=setInterval(paper, 800);
    var animeVar2=setInterval(scissors, 1200);
    // i--;
// }

function rock() {

    let rps = document.getElementById('rps-text');
    rps.innerHTML = "<h1 style=display:inline-block;>"+data['r']+"</h1>";

}

function paper() {
    rps = document.getElementById('rps-text');
    rps.innerHTML = "<h1 style=display:inline-block;>"+data['p']+"</h1>";
}

function scissors() {
    rps = document.getElementById('rps-text');
    rps.innerHTML = "<h1 style=display:inline-block;>"+data['s']+"</h1>";
}

// Game Logic
function rpmGame(yourChoice){
    console.log(yourChoice.src);
    clearInterval(animeVar);
    clearInterval(animeVar1);
    clearInterval(animeVar2);
    let humanChoice,botChoice;
    humanChoice=yourChoice.id;
    console.log(humanChoice);
    botChoice=numberToChoice(randToRpsInt());
    console.log(botChoice);

    results=decideWinner(humanChoice,botChoice);
    console.log(results);

    message=finalMessage(results)
    rpsFrontEnd(yourChoice.id, botChoice, message);
    console.log(yourChoice.id, botChoice, message)
}

function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return['rock','paper','scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDb={
        'rock':{'rock':0.5,'paper':0,'scissors':1},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'rock':0,'paper':1,'scissors':0.5},
    }

    var yourScore=rpsDb[yourChoice][computerChoice];
    var computerScore=rpsDb[computerChoice][yourChoice];

    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    if(yourScore===0){
        return{'message':'You lost!','color':'red'};
    }else if(yourScore===0.5){
        return{'message':'You tied!','color':'gray'};
    }else{
        return{'message':'You won!','color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDb={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src,
    }
    console.log(imagesDb['rock']);

    var container = document.getElementById('container-1');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var mid = document.getElementById('mid');

    document.getElementById('right-rock').remove();
    document.getElementById('left-rock').remove();
    document.getElementById('rps-text').remove();

    container.style="width:80%; margin-left:10%; height:35%";
    left.innerHTML="<img src='"+imagesDb[humanImageChoice]+"'style='box-shadow: 6px 6px 53px 1px rgba(201,66,197,1); width:40%; height:auto;'>";
    // left.appendChild(humanDiv);
    right.innerHTML="<img src='"+imagesDb[botImageChoice]+"'style='box-shadow: 6px 6px 53px 1px rgba(237,12,237,1); width:40%; float:right; margin-right:15%; height:auto;'>";
    // left.appendChild(botDiv);
    mid.innerHTML="<h1 style='color:"+finalMessage['color']+"; width:10%;'>"+finalMessage['message']+"</h1>"
}

// confetti
// for (var i = 0; i < 250; i++) {
//     create(i);
//   }
  
//   function create(i) {
//     var width = Math.random() * 12;
//     var height = width * 0.6;
//     var colourIdx = Math.ceil(Math.random() * 3);
//     var colour = "red";
//     switch(colourIdx) {
//       case 1:
//         colour = "yellow";
//         break;
//       case 2:
//         colour = "blue";
//         break;
//       default:
//         colour = "red";
//     }
//     $('<div class="confetti-'+i+' '+colour+'"></div>').css({
//       "width" : width+"px",
//       "height" : height+"px",
//       "top" : -Math.random()*20+"%",
//       "left" : Math.random()*100+"%",
//       "opacity" : Math.random()+0.5,
//       "transform" : "rotate("+Math.random()*360+"deg)"
//     }).appendTo('.wrapper');  
    
//     drop(i);
//   }
  
//   function drop(x) {
//     $('.confetti-'+x).animate({
//       top: "100%",
//       left: "+="+Math.random()*15+"%"
//     }, Math.random()*3000 + 3000, function() {
//       reset(x);
//     });
//   }
  
//   function reset(x) {
//     $('.confetti-'+x).animate({
//       "top" : -Math.random()*20+"%",
//       "left" : "-="+Math.random()*15+"%"
//     }, 0, function() {
//       drop(x);             
//     });
//   }
  