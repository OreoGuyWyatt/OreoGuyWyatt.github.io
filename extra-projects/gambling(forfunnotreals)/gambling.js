var spadeAce = jQuery("#SA");
var spadeKing = jQuery("#SK");
var spadeQueen = jQuery("#SQ");
var spadeJack = jQuery("#SJ");
var spade10 = jQuery("#S10");
var spade9 = jQuery("#S9");
var spade8 = jQuery("#S8");
var spade7 = jQuery("#S7");
var spade6 = jQuery("#S6");
var spade5 = jQuery("#S5");
var spade4 = jQuery("#S4");
var spade3 = jQuery("#S3");
var spade2 = jQuery("#S2");

var heartAce = jQuery("#HA");
var heartKing = jQuery("#HK");
var heartQueen = jQuery("#HQ");
var heartJack = jQuery("#HJ");
var heart10 = jQuery("#H10");
var heart9 = jQuery("#H9");
var heart8 = jQuery("#H8");
var heart7 = jQuery("#H7");
var heart6 = jQuery("#H6");
var heart5 = jQuery("#H5");
var heart4 = jQuery("#H4");
var heart3 = jQuery("#H3");
var heart2 = jQuery("#H2");

var clubAce = jQuery("#CA");
var clubKing = jQuery("#CK");
var clubQueen = jQuery("#CQ");
var clubJack = jQuery("#CJ");
var club10 = jQuery("#C1");
var club9 = jQuery("#C9");
var club8 = jQuery("#C8");
var club7 = jQuery("#C7");
var club6 = jQuery("#C6");
var club5 = jQuery("#C5");
var club4 = jQuery("#C4");
var club3 = jQuery("#C3");
var club2 = jQuery("#C2");

var diamondAce = jQuery("#DA");
var diamondKing = jQuery("#DK");
var diamondQueen = jQuery("#DQ");
var diamondJack = jQuery("#DJ");
var diamond10 = jQuery("#D1");
var diamond9 = jQuery("#D9");
var diamond8 = jQuery("#D8");
var diamond7 = jQuery("#D7");
var diamond6 = jQuery("#D6");
var diamond5 = jQuery("#D5");
var diamond4 = jQuery("#D4");
var diamond3 = jQuery("#D3");
var diamond2 = jQuery("#D2");
var back = jQuery("#Back");
var deck = [spadeAce, spadeKing, spadeQueen,spadeJack, spade10, spade9, spade8, spade7, spade6, spade5, spade4, spade3, spade2,
  heartAce, heartKing, heartQueen,heartJack, heart10, heart9, heart8, heart7, heart6, heart5, heart4, heart3, heart2,
  clubAce, clubKing, clubQueen,clubJack, club10, club9, club8, club7, club6, club5, club4, club3, club2,
  diamondAce, diamondKing, diamondQueen,diamondJack, diamond10, diamond9, diamond8, diamond7, diamond6, diamond5, diamond4, diamond3, diamond2,];
var changeable = 0;
var dealerChangeable = 0;
var playerTotal = 0;
var dealerTotal = 0;
var shown = [];
var hidden;
var hiddenValue = 0;
var hit = jQuery("#hit");
var stand = jQuery("#stand");
var start = jQuery("#start");
$(hit).hide();
$(stand).hide();

function givecardplayer(){
  if (shown.length === deck.length){
        return"fuh nah";
      }
  var randomCard = deck[Math.floor(Math.random() * deck.length)];
  
    for (i = 0; i < shown.length; i++){
      if (shown[i] === randomCard){
        givecardplayer();
        return "redone";
      }
      else{
        redo = false;
      } 
    }
    if (randomCard === spade2 || randomCard === heart2 || randomCard ===  club2 || randomCard === diamond2){
      playerTotal = playerTotal+2;
    }
    else if (randomCard === spade3 || randomCard === heart3 || randomCard ===  club3 || randomCard === diamond3){
      playerTotal = playerTotal+3;
    }
    else if (randomCard === spade4 || randomCard === heart4 || randomCard ===  club4 || randomCard === diamond4){
      playerTotal = playerTotal+4;
    }
    else if (randomCard === spade5 || randomCard === heart5 || randomCard ===  club5 || randomCard === diamond5){
      playerTotal = playerTotal+5;
    }
    else if (randomCard === spade6 || randomCard === heart6 || randomCard ===  club6 || randomCard === diamond6){
      playerTotal = playerTotal+6;
    }
    else if (randomCard === spade7 || randomCard === heart7 || randomCard ===  club7 || randomCard === diamond7){
      playerTotal = playerTotal+7;
    }
    else if (randomCard === spade8 || randomCard === heart8 || randomCard ===  club8 || randomCard === diamond8){
      playerTotal = playerTotal+8;
    }
    else if (randomCard === spade9 || randomCard === heart9 || randomCard ===  club9 || randomCard === diamond9){
      playerTotal = playerTotal+9;
    }
    else if (randomCard === spade10 || randomCard === heart10 || randomCard ===  club10 || randomCard === diamond10){
      playerTotal = playerTotal+10;
    }
    else if (randomCard === spadeJack || randomCard === heartJack || randomCard ===  clubJack || randomCard === diamondJack){
      playerTotal = playerTotal+10;
    }
    else if (randomCard === spadeQueen || randomCard === heartQueen || randomCard ===  clubQueen || randomCard === diamondQueen){
      playerTotal = playerTotal+10;
    }
    else if (randomCard === spadeKing || randomCard === heartKing || randomCard ===  clubKing || randomCard === diamondKing){
      playerTotal = playerTotal+10;
    }
    else if (randomCard === spadeAce || randomCard === heartAce || randomCard ===  clubAce || randomCard === diamondAce){
      if(playerTotal < 11){
      playerTotal = playerTotal+11;
      changeable ++;
      }
      else{
      playerTotal = playerTotal+1
      }
    }
      if (playerTotal > 21 && changeable > 0){
      changeable = changeable - 1;
      playerTotal = playerTotal - 10;
    }

    document.getElementById("player total").innerHTML = ("player total:" + playerTotal);
    $(randomCard).show();
    shown.push(randomCard);
      if (playerTotal > 21){
        lose();
      }
    }

function givecarddealer(){
  if (shown.length === deck.length){
        return"fuh nah";
      }
  var randomCard = deck[Math.floor(Math.random() * deck.length)];
  
    for (i = 0; i < shown.length; i++){
      if (shown[i] === randomCard){
        givecarddealer();
        return "redone";
      }
      else{
        redo = false;
      } 
    }
    if (randomCard === spade2 || randomCard === heart2 || randomCard ===  club2 || randomCard === diamond2){
      dealerTotal = dealerTotal+2;
    }
    else if (randomCard === spade3 || randomCard === heart3 || randomCard ===  club3 || randomCard === diamond3){
      dealerTotal = dealerTotal+3;
    }
    else if (randomCard === spade4 || randomCard === heart4 || randomCard ===  club4 || randomCard === diamond4){
      dealerTotal = dealerTotal+4;
    }
    else if (randomCard === spade5 || randomCard === heart5 || randomCard ===  club5 || randomCard === diamond5){
      dealerTotal = dealerTotal+5;
    }
    else if (randomCard === spade6 || randomCard === heart6 || randomCard ===  club6 || randomCard === diamond6){
      dealerTotal = dealerTotal+6;
    }
    else if (randomCard === spade7 || randomCard === heart7 || randomCard ===  club7 || randomCard === diamond7){
      dealerTotal = dealerTotal+7;
    }
    else if (randomCard === spade8 || randomCard === heart8 || randomCard ===  club8 || randomCard === diamond8){
      dealerTotal = dealerTotal+8;
    }
    else if (randomCard === spade9 || randomCard === heart9 || randomCard ===  club9 || randomCard === diamond9){
      dealerTotal = dealerTotal+9;
    }
    else if (randomCard === spade10 || randomCard === heart10 || randomCard ===  club10 || randomCard === diamond10){
      dealerTotal = dealerTotal+10;
    }
    else if (randomCard === spadeJack || randomCard === heartJack || randomCard ===  clubJack || randomCard === diamondJack){
      dealerTotal = dealerTotal+10;
    }
    else if (randomCard === spadeQueen || randomCard === heartQueen || randomCard ===  clubQueen || randomCard === diamondQueen){
      dealerTotal = dealerTotal+10;
    }
    else if (randomCard === spadeKing || randomCard === heartKing || randomCard ===  clubKing || randomCard === diamondKing){
      dealerTotal = dealerTotal+10;
    }
    else if (randomCard === spadeAce || randomCard === heartAce || randomCard ===  clubAce || randomCard === diamondAce){
      if(dealerTotal < 11){
      dealerTotal = dealerTotal+11;
      dealerChangeable ++;
      }
      else{
      dealerTotal = dealerTotal+1
      }
    }
    if (dealerTotal > 21 && dealerChangeable > 0){
      dealerChangeable =- 1;
      dealerTotal = dealerTotal - 10;
    }
    document.getElementById("dealer total").innerHTML = ("dealer total:" + dealerTotal);
    $(randomCard).show();
    shown.push(randomCard);
}
function givefirstcarddealer(){
  if (shown.length === deck.length){
        return"fuh nah";
      }
  var randomCard = deck[Math.floor(Math.random() * deck.length)];
  
    for (i = 0; i < shown.length; i++){
      if (shown[i] === randomCard){
        givecarddealer();
        return "redone";
      }
      else{
        redo = false;
      } 
    }
    if (randomCard === spade2 || randomCard === heart2 || randomCard ===  club2 || randomCard === diamond2){
      hiddenValue = hiddenValue+2;
    }
    else if (randomCard === spade3 || randomCard === heart3 || randomCard ===  club3 || randomCard === diamond3){
      hiddenValue = hiddenValue+3;
    }
    else if (randomCard === spade4 || randomCard === heart4 || randomCard ===  club4 || randomCard === diamond4){
      hiddenValue = hiddenValue+4;
    }
    else if (randomCard === spade5 || randomCard === heart5 || randomCard ===  club5 || randomCard === diamond5){
      hiddenValue = hiddenValue+5;
    }
    else if (randomCard === spade6 || randomCard === heart6 || randomCard ===  club6 || randomCard === diamond6){
      hiddenValue = hiddenValue+6;
    }
    else if (randomCard === spade7 || randomCard === heart7 || randomCard ===  club7 || randomCard === diamond7){
      hiddenValue = hiddenValue+7;
    }
    else if (randomCard === spade8 || randomCard === heart8 || randomCard ===  club8 || randomCard === diamond8){
      hiddenValue = hiddenValue+8;
    }
    else if (randomCard === spade9 || randomCard === heart9 || randomCard ===  club9 || randomCard === diamond9){
      hiddenValue = hiddenValue+9;
    }
    else if (randomCard === spade10 || randomCard === heart10 || randomCard ===  club10 || randomCard === diamond10){
      hiddenValue = hiddenValue+10;
    }
    else if (randomCard === spadeJack || randomCard === heartJack || randomCard ===  clubJack || randomCard === diamondJack){
      hiddenValue = hiddenValue+10;
    }
    else if (randomCard === spadeQueen || randomCard === heartQueen || randomCard ===  clubQueen || randomCard === diamondQueen){
      hiddenValue = hiddenValue+10;
    }
    else if (randomCard === spadeKing || randomCard === heartKing || randomCard ===  clubKing || randomCard === diamondKing){
      hiddenValue = hiddenValue+10;
    }
    else if (randomCard === spadeAce || randomCard === heartAce || randomCard ===  clubAce || randomCard === diamondAce){
      
      hiddenValue = hiddenValue+11;
      dealerChangeable ++;
    }
    document.getElementById("dealer total").innerHTML = ("dealer total:" + dealerTotal);
    hidden = randomCard;
    $(back).show();
    shown.push(randomCard);
}
function removeall(){
  for (i = 0; i < shown.length; i++){
    $(shown[i]).hide();
  }for (i = 0; i < shown.length; i++){
    shown.length = 0;
  }
  dealerTotal = 0;
  playerTotal = 0;
  hiddenValue = 0;

}
function play(){
  removeall();
  givefirstcarddealer();
  givecardplayer();
  givecarddealer();
  givecardplayer();
  $(start).hide();
  document.getElementById("result").innerHTML = ("");
  $(hit).show();
  $(stand).show();
  if (dealerTotal === 21 && playerTotal !== 21){
    lose();
  }
  else if (dealerTotal === 21 && playerTotal === 21){
    draw();
  }
}
function phase2(){
  $(back).hide();
  $(hit).hide();
  $(stand).hide();
  dealerTotal = dealerTotal + hiddenValue
  hiddenValue = 0;
  $(hidden).show();
  document.getElementById("dealer total").innerHTML = ("dealer total:" + dealerTotal);
  if (dealerTotal > 21){
    win();
    return "bust";
  }
  else if (dealerTotal >= 17){
    ending();
    return "dealercap";
  }
  else if (dealerTotal > playerTotal){
    ending();
  }
  givecarddealer();
  phase2();
}
function ending(){
  if (dealerTotal > playerTotal){
    lose();
  }
  else if (dealerTotal === playerTotal){
    draw();
  }
  else if (dealerTotal < playerTotal){
    win();
  }
}
function lose(){
  $(start).show();
  $(hit).hide();
  $(stand).hide();
  $(hidden).show();
  document.getElementById("result").innerHTML = ("you lose");
}
function draw(){
  $(start).show();
  $(hit).hide();
  $(stand).hide();
  $(hidden).show();
  document.getElementById("result").innerHTML = ("it is a draw");
}
function win(){
  $(start).show();
  $(hit).hide();
  $(stand).hide();
  $(hidden).show();
  document.getElementById("result").innerHTML = ("you win");
}