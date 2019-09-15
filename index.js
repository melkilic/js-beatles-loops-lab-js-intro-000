function theBeatlesPlay(musicians,instruments){
  var allTheMusicians= [];
  for(var i=0;i<musicians.length;i++)
  allTheMusicians.push(musicians[i] + " plays " + instruments[i]);

    return allTheMusicians;
}
function johnLennonFacts(){
  var facts=["He hated the sound of his own voice", "He was the last Beatle to learn to drive"];
 var hisFacts = [];
    var i = 0;
    while (i < facts.length) {
        hisFacts.push(facts[i] +"!!!");
        i++;
    }
    return hisFacts;
  }

