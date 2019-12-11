var allElems = [];

function parseBoardElem(elem){
  var elem = {
    name: elem.getAttribute('data-name'),
    score: elem.getAttribute('data-score'),
    photoURL: elem.getAttribute('data-photoURL')
  }
  return(elem);
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

window.addEventListener('DOMContentLoaded', function () {

var boardElems = document.getElementsByClassName('card');
for(var i = 0; i<boardElems.length; i++){
  allElems.push(parseBoardElem(boardElems[i]));
}

var swapped, temp;

for(var i = 0; i < allElems.length - 1; i++){
  swapped = 0;
  for(var j = 0; j < allElems.length - i - 1; j++){
    if(allElems[j].score > allElems[j + 1].score){
      temp = allElems[j];
      allElems[j] = allElems[j + 1];
      allElems[j + 1] = temp;
      swapped = 1;
    }
  }
  if(swapped == 1){break;}
}


});
