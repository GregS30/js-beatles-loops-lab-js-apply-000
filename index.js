function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  var i;
  
  for (i=0; i < musicians.length; i++) {
    emptyArray.push(musicians[i] + " plays " + instruments[i])
  }
  return(emptyArray)
}

function johnLennonFacts(factsOfLennon) {
  var emptyArray = [];
  var i = 0;
  
  while (i < factsOfLennon.length) {
    emptyArray.push(factsOfLennon[i] + "!!!")
    i++;
  }
    return(emptyArray)
}