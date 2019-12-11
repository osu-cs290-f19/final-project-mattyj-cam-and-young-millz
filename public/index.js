
var allElems = [];


function parseBoardElem(elem){
  var elem = {
    name: elem.getAttribute('data-name'),
    score: elem.getAttribute('data-score'),
    photoURL: elem.getAttribute('data-photoURL'),
    place: elem.getAttribute('data-place')
  }
  return(elem);
}

function insertLoser(score, name, counter){
  var newElem = Handlebars.templates.loserCard({
    place: counter,
    score: score,
    name: name
  });
  var container = document.getElementById('losers');
  container.insertAdjacentHTML('beforeend', newElem);
}

function insertNewElem(photoURL, score, name){
  var newElem = Handlebars.templates.scoreCard({
    photoURL: photoURL,
    name: name,
    score: score
  });
  var container = document.getElementById('cards');
  container.insertAdjacentHTML('beforeend', newElem);
}

var boardElems = document.getElementsByClassName('card');
for(var i = 0; i<boardElems.length; i++){
  allElems.push(parseBoardElem(boardElems[i]));
}

var swapped, temp;

for(var i = 0; i < allElems.length - 1; i++){
  swapped = 0;
  for(var j = 0; j < allElems.length - i - 1; j++){
    if(allElems[j].score < allElems[j + 1].score){
      temp = allElems[j];
      allElems[j] = allElems[j + 1];
      allElems[j + 1] = temp;
      swapped = 1;
      console.log("SWAPPED");
    }
  }
  if(swapped == 1){break;}
}

var postContainer = document.getElementById('cards');
  while(postContainer.lastChild) {
    postContainer.removeChild(postContainer.lastChild);
  }
var counter = 1;
allElems.forEach(function (scoreCard){
  if(counter <= 3){
    insertNewElem(scoreCard.photoURL, scoreCard.score, scoreCard.name);
  }
  else{
    insertLoser(scoreCard.score, scoreCard.name, counter);
  }
  counter += 1;
});
